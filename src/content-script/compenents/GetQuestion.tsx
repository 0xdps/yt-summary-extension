import { getUserConfig, getProviderConfigs, Language } from '@/config'
import { getSummaryPrompt } from '@/content-script/prompt'
import { videoPrompt, videoSummaryPromptHightligt } from '@/utils/prompt'
import { getLangOptionsWithLink, getConverTranscript } from '@/content-script/utils'
import { queryParam } from 'gb-url'
import { siteConfig as sietConfigFn, siteName as siteNameFn } from '@/content-script/utils'

export default async function getQuestion() {
    const siteConfig = sietConfigFn()
    const siteName = siteNameFn()

    if (!siteConfig) {
        return
    }

    const language = window.navigator.language
    const userConfig = await getUserConfig()
    const providerConfigs = await getProviderConfigs()

    // Youtube
    if (siteName === 'youtube') {
        const videoId = queryParam('v', window.location.href)

        if (!videoId) {
            return ''
        }

        // Get Transcript Language Options & Create Language Select Btns
        const langOptionsWithLink = await getLangOptionsWithLink(videoId)

        const transcriptList = await getConverTranscript({ langOptionsWithLink, videoId, index: 0 })

        const videoTitle = document.title

        const transcript = (
            transcriptList.map((v) => {
                return `${v.text}`
            }) || []
        ).join('')

        const Instructions = userConfig.prompt ? `${userConfig.prompt}` : videoSummaryPromptHightligt

        const queryText = videoPrompt({
            title: videoTitle,
            transcript: getSummaryPrompt(transcript, providerConfigs.provider),
            language: userConfig.language === Language.Auto ? language : userConfig.language,
            prompt: Instructions,
        })

        return {
            question: transcript.length > 0 ? queryText : '',
            transcript: transcriptList,
            langOptionsWithLink,
        }
    }

    return null
}
