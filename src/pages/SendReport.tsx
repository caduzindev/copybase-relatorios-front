import { Box, Grid, GridItem } from "@chakra-ui/react"
import { UploadFile } from "../components/compound/UploadFile"
import { ReportQueue } from "../components/compound/ReportQueue"
import { useCallback } from "react"

export const SendReport = () => {
    const onUploadFile = useCallback((file: File) => {
        console.log(file)
    }, [])
    return (
        <Box>
            <Grid templateColumns='repeat(2, 1fr)' p={4} gap={4}>
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