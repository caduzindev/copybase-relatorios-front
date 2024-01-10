import { Box, Stack, Text } from "@chakra-ui/react"
import { ReportQueueItem } from "./ReportQueueItem"
import { useGetReportsInterval } from "../../../hooks/report/queries"
export const ReportQueue = () => {
    const { data, isError, isPending, isSuccess, error } = useGetReportsInterval({
        page: 1,
    }, 3000)

    if (isPending) return <h1>Loading...</h1>
    if (isError) {
        console.log(error)
    }
    if (isSuccess) {
        console.log('OPaaa')
        console.log(data)
    }
    return (
        <Box>
            <Text color="copybase.general.black" fontSize="4xl" fontWeight="600">Relatorios</Text>
            <Stack>
                {data?.data.map((report) => <ReportQueueItem 
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