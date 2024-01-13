import { Box, Grid, GridItem, useToast } from "@chakra-ui/react"
import { UploadFile } from "../components/compound/UploadFile"
import { ReportQueue } from "../components/compound/ReportQueue"
import { useCallback, useEffect, useState } from "react"
import { usePostReport } from "../hooks/report/mutations"
import { useReportStore } from "../hooks/report/store"
import { StatusReport } from "../shared/types/report"
import { showMessageChrakra } from "../shared/helpers/showMessageChakra"
import { Toast } from "../components/unique/Toast"

export const SendReport = () => {
    const { mutate, isError, isSuccess, error } = usePostReport();
    const { addReport } = useReportStore()
    const [actualFile,setActualFile] = useState<File | null>();
    const toast = useToast();

    const onUploadFile = useCallback((file: File) => {
        setActualFile(file)
        mutate(file)
    }, [mutate])

    const showMessage = useCallback((text: string, type: 'error' | 'success') => {
        showMessageChrakra(toast, <Toast 
            message={text} 
            backgroundColor={type === 'error' ? "copybase.general.purple" : "copybase.general.green"}
            textColor="copybase.general.white"
        />)
    }, [toast])

    useEffect(() => {
        if (isError) {
            showMessage(error.message, 'error')
        }
        if (isSuccess && actualFile) {
            showMessage('Arquivo importado com sucesso!!!', 'success')
            addReport({
                status: StatusReport.PROCESSING,
                fileName: actualFile?.name
            })
            setActualFile(null)
        }
    }, [isError, isSuccess, actualFile, addReport, error, showMessage])

    return (
        <Box>
            <Grid 
                templateColumns={['1fr', '1rf','repeat(2, 1fr)']} 
                p={[1,1,4]} 
                gap={4}
            >
                <GridItem>
                    <UploadFile allowExtensions={['text/csv']} onFileUpload={onUploadFile}/>
                </GridItem>
                <GridItem>
                    <ReportQueue/>
                </GridItem>
            </Grid>
        </Box>
    )
}