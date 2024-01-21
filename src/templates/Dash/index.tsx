import { Box, Image, Text } from "@chakra-ui/react"

type Props = {
    children: React.ReactNode
}
export const Dash = ({ children }: Props) => {
    return (
        <>
            <Box 
                width="100%" 
                p={2} 
                bg="copybase.general.purple" 
                display="flex"
                alignItems="center"
                columnGap={2}
            >
                <Image 
                    src="informacao-financeira.png" alt="logo"
                    height={30}
                    background="#fff"
                    borderRadius={30}
                />
                <Text
                    color="copybase.general.white"
                    fontWeight={700}
                    fontSize={25}
                    fontFamily="Sans serif"
                    letterSpacing={1}
                >Relatorios</Text>
            </Box>
            <Box width="100%">{children}</Box>        
        </>
    )
}