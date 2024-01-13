import { Box, Stack, Text } from "@chakra-ui/react"
import { ReportQueueItem } from "./ReportQueueItem"
import { useGetReportsInterval } from "../../../hooks/report/queries"
import { useEffect } from "react"
import { useReportStore } from "../../../hooks/report/store"
export const ReportQueue = () => {
    const { data, isPending, isSuccess } = useGetReportsInterval({
        page: 1,
    }, 3000)

    const { reports,listReport } = useReportStore()

    useEffect(()=>{
        if (isSuccess) {
            listReport(data.data);
        }
    },[data, listReport, isSuccess])

    if (isPending) return <h1>Loading...</h1>

    return (
        <Box>
            <Text 
                color="copybase.general.black" 
                fontSize="2xl" 
                fontWeight="600"
                fontFamily="Sans serif"
                textAlign={['center','center','start']}
            >
                RELATORIOS
            </Text>
            <Stack>
                {reports?.map((report) => <ReportQueueItem 
                        fileName={report.fileName}
                        status={report.status}
                        resultProcess={report.resultProcess}
                        key={report.id}
                    /> 
                )}
            </Stack>
        </Box>
    )
}