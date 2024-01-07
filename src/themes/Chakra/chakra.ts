import { extendTheme } from "@chakra-ui/react"

const colors = {
    general: {
        purple: '#44377f',
        white: '#ffffff',
        whiteGray: '#eaeafe'
    }
}

export const theme = extendTheme({
    colors: {
        copybase: {...colors}
    }
})