import { Box, Stack, Text } from "@chakra-ui/react"
import { ReportQueueItem } from "./ReportQueueItem"
export const ReportQueue = () => {
    return (
        <Box>
            <Text color="copybase.general.black" fontSize="4xl" fontWeight="600">Relatorios</Text>
            <Stack>
                <ReportQueueItem />  
                <ReportQueueItem />  
                <ReportQueueItem />  
            </Stack>
        </Box>
    )
}