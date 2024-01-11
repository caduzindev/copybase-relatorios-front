import { extendTheme } from "@chakra-ui/react"

export const colors = {
    general: {
        purple: '#44377f',
        purpleClean: '#786ab8',
        white: '#ffffff',
        whiteGray: '#eaeafe',
        whiteGrayClean: '#f7f7ff',
        black: '#0f0b25'
    },
    button: {
        500: '#338c5c',
    },
    progress: {
        500: '#44377f'
    },
    badge: {
        100: '#44377f',
        200: '#44377f',
        800: '#44377f',
    }
}

export const theme = extendTheme({
    fonts: {
        heading: `'Inter Variable', sans-serif`,
        body: `'Inter Variable', sans-serif`,
    },
    colors: {
        copybase: {...colors}
    }
})