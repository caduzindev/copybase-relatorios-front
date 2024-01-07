import { Box, Image } from "@chakra-ui/react"

type Props = {
    children: React.ReactNode
}
export const Dash = ({ children }: Props) => {
    return (
        <>
            <Box width="100%" p={2} bg="copybase.general.purple">
                <Image src="copybase_logo.svg" alt="logo"/>
            </Box>
            <Box width="100%">{children}</Box>        
        </>
    )
}