import { Box } from "@chakra-ui/react"

type Props = {
    children: React.ReactNode
}
export const Dash = ({ children }: Props) => {
    return (
        <Box width="100%" p={2} bg="copybase.">{children}</Box>        
    )
}