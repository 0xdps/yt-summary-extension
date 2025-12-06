import { waitForElm } from './utils'
import { queryParam } from 'gb-url'

export interface SearchEngine {
    inputQuery: string[]
    sidebarContainerQuery: string[]
    appendContainerQuery: string[]
    extabarContainerQuery?: string[]
    contentContainerQuery: string[]
    watchRouteChange?: (callback: () => void) => void
    name?: string
    siteName: string
    siteValue: string
    regex: string
    searchRegExp?: string
}

export const config: Record<string, SearchEngine> = {
    youtube: {
        inputQuery: ["input[name='q']"],
        sidebarContainerQuery: ['#rhs'],
        appendContainerQuery: ['#rcnt'],
        extabarContainerQuery: ['#extabar'],
        contentContainerQuery: [],
        name: 'youtube',
        watchRouteChange(callback) {
            let currentUrl = window.location.href

            setInterval(() => {
                const videoId = queryParam('v', window.location.href)
                if (window.location.href !== currentUrl && videoId) {
                    waitForElm('#secondary.style-scope.ytd-watch-flexy').then(() => {
                        if (document.querySelector('section.glarity--container')) {
                            document.querySelector('section.glarity--container')?.remove()
                        }
                    })

                    callback()
                    currentUrl = window.location.href
                }
            }, 1000)
        },
        siteName: 'YouTube',
        siteValue: 'youtube',
        regex: '(^(www.)?youtube.com)',
    },
}
