import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "./chakra"

type Props = {
    children: React.ReactNode
}

export const ProviderTheme = ({children}: Props) => {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}