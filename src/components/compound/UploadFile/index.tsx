import { Box, Stack, Text } from "@chakra-ui/react"
import { Button } from "../../unique/Button"

export const UploadFile = () => {
    return (
        <Box
            width='100%'
            border='2px'
            borderStyle="dashed"
            borderRadius={20}
            borderColor="copybase.general.whiteGray"
            p={20}
        >
            <Stack spacing={4} align="center">
                <Text fontSize='3xl' color="copybase.general.purple">Drag and drop files here</Text>
                <Text fontSize='3xl' color="copybase.general.purple">-OR-</Text>
                <Button 
                    color="copybase.button" 
                    size="xbig"
                    padding="2rem"
                    callback={()=>console.log('Helloworld')}
                >
                    Encontrar Arquivo
                </Button>
            </Stack>
        </Box>
    )
}