import { render } from 'preact'
import '@/assets/styles/base.scss'
import ChatGPTTip from '@/content-script/compenents/ChatGPTTip'
import Browser from 'webextension-polyfill'
import mount from '@/content-script/compenents/Mount'
import getQuestion from './compenents/GetQuestion'
import { siteConfig as sietConfigFn } from './utils'
import '@/content-script/styles.scss'

const siteConfig = sietConfigFn()

async function Run() {
    const questionData = await getQuestion()
    if (questionData) {
        mount(questionData)
    }

    Browser.runtime.onMessage.addListener((message, _, sendResponse) => {
        const { type, data } = message
        switch (type) {
            case 'CHATGPT_TAB_CURRENT': {
                const container = document.createElement('section')
                container.className = 'glarity--chatgpt--tips'
                container.id = 'glarity--chatgpt--tips'
                document.body.prepend(container)
                render(<ChatGPTTip isLogin={data.isLogin} />, container)
                break
            }
            case 'GET_DOM': {
                sendResponse({ html: document.querySelector('html')?.outerHTML })
                break
            }
        }
    })
}

Run()

if (siteConfig?.watchRouteChange) {
    siteConfig.watchRouteChange(Run)
}
