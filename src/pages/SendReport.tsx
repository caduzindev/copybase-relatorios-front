import { Box, Grid, GridItem } from "@chakra-ui/react"
import { UploadFile } from "../components/compound/UploadFile"
import { ReportQueue } from "../components/compound/ReportQueue"

export const SendReport = () => {
    return (
        <Box>
            <Grid templateColumns='repeat(2, 1fr)' p={4} gap={4}>
                <GridItem>
                    <UploadFile/>
                </GridItem>
                <GridItem>
                    <ReportQueue/>
                </GridItem>
            </Grid>
        </Box>
    )
}