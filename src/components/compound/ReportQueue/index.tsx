import { Box, Stack, Text } from "@chakra-ui/react"
import { ReportQueueItem } from "./ReportQueueItem"
import { useGetReportsInterval } from "../../../hooks/report/queries"
import { useEffect, useState } from "react"
import { useReportStore } from "../../../hooks/report/store"
import { Button } from "../../unique/Button"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
export const ReportQueue = () => {
    const [page,setPage] = useState(1);

    const { data, isPending, isSuccess } = useGetReportsInterval({
        page,
    }, 3000)

    const { reports,listReport } = useReportStore()

    const nextPage = () => {
        setPage(prevPage => prevPage + 1)
    }

    const prevPage = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1)
        }
    }

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
            <Box display="flex" justifyContent="center" alignItems="center" gap={1} padding={2}>
                <Button 
                    size="medium"
                    callback={prevPage}
                    color="copybase.button"
                    enable={page > 1}
                >
                    <ArrowBackIcon/>
                </Button>
                <Text color="copybase.general.black">{page} de {data?.totalPages as number}</Text>
                <Button 
                    size="medium"
                    callback={nextPage}
                    color="copybase.button"
                    enable={data?.totalPages as number > page}
                >
                    <ArrowForwardIcon />
                </Button>
            </Box>
        </Box>
    )
}