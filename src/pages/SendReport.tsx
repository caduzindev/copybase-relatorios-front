import { Box, Grid, GridItem } from "@chakra-ui/react"
import { UploadFile } from "../components/compound/UploadFile"
import { ReportQueue } from "../components/compound/ReportQueue"
import { useCallback } from "react"
import { usePostReport } from "../hooks/report/mutations"
import { useReportStore } from "../hooks/report/store"
import { StatusReport } from "../shared/types/report"

export const SendReport = () => {
    const { mutate } = usePostReport();
    const { addReport } = useReportStore()

    const onUploadFile = useCallback((file: File) => {
        addReport({
            status: StatusReport.PROCESSING,
            fileName: file.name
        })
        mutate(file)
    }, [mutate, addReport])

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