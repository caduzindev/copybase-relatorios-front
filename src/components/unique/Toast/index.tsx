import { Box, Text } from "@chakra-ui/react"

type Props = {
    message: string;
    backgroundColor: string;
    textColor: string;
}
export const Toast = ({ message, backgroundColor, textColor }: Props) => {
    return (
        <Box 
            color={textColor} 
            p={4} 
            bg={backgroundColor}
            borderRadius={10}
            display="flex"
            justifyContent="center"
        >
            <Text
                fontFamily="Sans serif"
                fontWeight="700"
                textAlign="center"
            >{message}</Text>
        </Box>
    )
}