import { render } from 'preact'
import { getUserConfig, Theme } from '@/config'
import { config } from '@/content-script/search-engine-configs'
import ChatGPTContainer from '@/content-script/compenents/ChatGPTContainer'
import { detectSystemColorScheme } from '@/utils/utils'
import { waitForElm } from '@/content-script/utils'
import { siteConfig as sietConfigFn, siteName as siteNameFn, hostname } from '@/content-script/utils'

interface MountProps {
    question: string | null
    transcript?: unknown
    langOptionsWithLink?: unknown
}

export default async function mount(props: MountProps) {
    const siteConfig = sietConfigFn()
    const siteName = siteNameFn()

    const { question, transcript, langOptionsWithLink } = props
    if (!siteConfig) {
        return
    }
    const userConfig = await getUserConfig()

    const sites = Object.values(config).map((site) => {
        return site.siteValue
    })

    const enableSites = userConfig.enableSites ? userConfig.enableSites : sites
    const regexList = []
    Object.values(enableSites).map((v) => {
        const item = config[v]

        if (item.regex) {
            regexList.push(item.regex)
        }
    })

    if (regexList.length <= 0) {
        return
    }
    const sitesRegex = new RegExp(regexList.join('|'))

    if (!sitesRegex.test(hostname)) {
        return
    }

    if (document.querySelector('section.glarity--container')) {
        document.querySelector('section.glarity--container')?.remove()
    }

    const container = document.createElement('section')
    container.className = 'b_glarity'
    container.classList.add('glarity--container')
    container.id = 'glarity--container'

    let theme: Theme
    if (userConfig.theme === Theme.Auto) {
        theme = detectSystemColorScheme()
    } else {
        theme = userConfig.theme
    }
    if (theme === Theme.Dark) {
        container.classList.add('gpt--dark')
    } else {
        container.classList.add('gpt--light')
    }

    // YouTube only
    if (siteName === 'youtube') {
        container.classList.add('glarity--chatgpt--youtube')
        waitForElm('#secondary.style-scope.ytd-watch-flexy').then(() => {
            document.querySelector('#secondary.style-scope.ytd-watch-flexy')?.prepend(container)
        })
    }

    render(
        <ChatGPTContainer
            question={question}
            transcript={transcript}
            siteConfig={siteConfig}
            langOptionsWithLink={langOptionsWithLink}
            triggerMode={userConfig.triggerMode || 'always'}
        />,
        container,
    )
}
