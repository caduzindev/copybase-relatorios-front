import { Box, Stack, Text, useToast } from "@chakra-ui/react"
import { Button } from "../../unique/Button"
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Toast } from "../../unique/Toast"
import { showMessageChrakra } from "../../../shared/helpers/showMessageChakra"

type Props = {
    onFileUpload: (file: File) => void,
    allowExtensions: string[]
}

export const UploadFile = ({ onFileUpload, allowExtensions }: Props) => {
    const toast = useToast()

    const showMessage = useCallback((text: string, type: 'error' | 'success') => {
        showMessageChrakra(toast, <Toast 
            message={text} 
            backgroundColor={type === 'error' ? "copybase.general.purple" : "copybase.general.green"}
            textColor="copybase.general.white"
        />)
    }, [toast])

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length < 1) return;
        
        const isAllowExtension = allowExtensions.includes(acceptedFiles[0].type)
        if (!isAllowExtension) {
            showMessage(`Erro: Arquivos permitidos "${allowExtensions.join(',')}"`, 'error')
            return;
        }
        
        onFileUpload(acceptedFiles[0])
    }, [onFileUpload, allowExtensions, showMessage])

    const { getRootProps, getInputProps, open, isDragActive } = useDropzone({ 
        onDrop,
        noClick: true,
        noKeyboard: true 
    });

    return (
        <Box {...getRootProps()} width="100%">
            <input {...getInputProps()} />
            <Box
                width="100%"
                border='3px'
                borderStyle="dashed"
                borderRadius={20}
                borderColor={isDragActive ? "copybase.general.purple" : "copybase.general.whiteGray"}
                p={[15,15,20]}
                opacity={isDragActive ? 0.5 : 1}
                bg="copybase.general.whiteGrayClean"
                transition="all 0.3s ease-out"
            >
                <Stack spacing={4} align="center">
                    <Text 
                        fontSize={['2xl','2xl','3xl']} 
                        color="copybase.general.purple"
                        fontFamily="Sans serif"
                        fontWeight="700"
                        textAlign="center"
                    >Arraste e solte o arquivo aqui</Text>
                    <Text 
                        fontSize={['2xl','2xl','3xl']}
                        color="copybase.general.purple"
                        fontFamily="Sans serif"
                        fontWeight="700"
                    >-OU-</Text>
                    <Button 
                        color="copybase.button" 
                        size="big"
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