import { Box, Stack, Text } from "@chakra-ui/react"
import { Button } from "../../unique/Button"
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"

type Props = {
    onFileUpload: (file: File) => void,
    allowExtensions: string[]
}

export const UploadFile = ({ onFileUpload, allowExtensions }: Props) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length < 1) return;
        
        const isAllowExtension = allowExtensions.includes(acceptedFiles[0].type)
        if (!isAllowExtension) {
            alert(`Arquivos permitidos "${allowExtensions.join(',')}"`)
            return;
        }
        
        onFileUpload(acceptedFiles[0])
    }, [onFileUpload, allowExtensions])

    const { getRootProps, getInputProps, open, isDragActive } = useDropzone({ 
        onDrop,
        noClick: true,
        noKeyboard: true 
    });

    return (
        <Box {...getRootProps()}>
            <input {...getInputProps()} />
            <Box
                width='100%'
                border='3px'
                borderStyle="dashed"
                borderRadius={20}
                borderColor={isDragActive ? "copybase.general.purple" : "copybase.general.whiteGray"}
                p={20}
                opacity={isDragActive ? 0.5 : 1}
                bg="copybase.general.whiteGrayClean"
                transition="all 0.3s ease-out"
            >
                <Stack spacing={4} align="center">
                    <Text fontSize='3xl' color="copybase.general.purple">Arraste e solte o arquivo aqui</Text>
                    <Text fontSize='3xl' color="copybase.general.purple">-OU-</Text>
                    <Button 
                        color="copybase.button" 
                        size="xbig"
                        padding="2rem"
                        callback={()=>open()}
                    >
                        Encontrar Arquivo
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}