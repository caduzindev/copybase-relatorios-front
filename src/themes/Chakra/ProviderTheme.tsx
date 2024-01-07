import { Box, ChakraProvider } from "@chakra-ui/react"
import { theme } from "./chakra"

type Props = {
    children: React.ReactNode
}

export const ProviderTheme = ({children}: Props) => {
    return <ChakraProvider theme={theme}>
        <Box bg="copybase.general.white" h="100vh">
            {children}
        </Box>
    </ChakraProvider>
}