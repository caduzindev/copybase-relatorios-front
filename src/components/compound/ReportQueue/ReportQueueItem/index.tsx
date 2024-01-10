import { Box, Card, CardBody, Icon, Progress, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { MdFilePresent } from "react-icons/md"
import { Button } from "../../../unique/Button"
import { FaEye } from "react-icons/fa6"
import { Modal } from "../../../unique/Modal"
import { ReportQueueItemDetails } from "../ReportQueueItemDetails"
import { StatusReport } from "../../../../shared/types/report"

type Props = {
    fileName: string;
    status: StatusReport
}

const statusReportToText = (status: StatusReport) => (
    <>
        {status === StatusReport.DONE && (<Text>Completo</Text>)}
        {status === StatusReport.PROCESSING && (<Text>Em processamento</Text>)}
        {status === StatusReport.ERROR && (<Text>Erro</Text>)}
    </>
)

const statusReportToButton = (status: StatusReport, callback: ()=> void) => (
    <>
        {status === StatusReport.DONE && (
            <Button callback={callback} color="copybase.button" size="small">
                <Icon as={FaEye}/>
            </Button>
        )}
        {status === StatusReport.ERROR && (
            <Button callback={callback} color="red" size="small">
                <Text>Ver motivo</Text>
            </Button>
        )}
    </>
)

const statusReportToProgress = (status: StatusReport) => (
    <>
        {status === StatusReport.DONE && (
            <Progress 
                size='sm' 
                colorScheme="copybase.progress" 
                value={100}
                borderRadius={5}
            />
        )}
        {status === StatusReport.PROCESSING && (
            <Progress 
                size='sm' 
                colorScheme="copybase.progress" 
                borderRadius={5}
                isIndeterminate
            />
        )}
        {status === StatusReport.ERROR && (
            <Progress 
                size='sm' 
                colorScheme="copybase.progress"
                borderRadius={5}
            />
        )}
    </>
)

export const ReportQueueItem = ({ fileName, status }: Props)=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Card 
                direction={{base: 'column',sm: "row"}} 
                overflow='hidden'
                alignItems="center"
                height="100%"
                p={4}
                gap={2}
            >
                <Icon 
                    as={MdFilePresent} 
                    color="copybase.general.purple"
                    width={10}
                    height={10}
                />
                <Stack w="100%">
                    <CardBody p={0} w="100%">
                        <Box display="flex" justifyContent="space-between">
                            <Text>{fileName}</Text>
                            <Box display="flex" gap={2} mb={1}>
                                {statusReportToText(status)}
                                {statusReportToButton(status, onOpen)}
                            </Box>
                        </Box>
                        {statusReportToProgress(status)}
                    </CardBody>
                </Stack>
            </Card>
            <Modal
                title={<Text>Detalhes do relatorio</Text>}
                isOpen={isOpen}
                size="full"
                onClose={onClose}
            >
                <ReportQueueItemDetails />
            </Modal>
        </>
    )
}