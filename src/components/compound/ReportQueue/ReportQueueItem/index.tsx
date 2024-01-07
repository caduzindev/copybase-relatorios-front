import { Box, Card, CardBody, Icon, Progress, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { MdFilePresent } from "react-icons/md"
import { Button } from "../../../unique/Button"
import { FaEye } from "react-icons/fa6"
import { Modal } from "../../../unique/Modal"
import { ReportQueueItemDetails } from "../ReportQueueItemDetails"

export const ReportQueueItem = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Card 
                direction={{base: 'column',sm: "row"}} 
                overflow='hidden'
                alignItems="center"
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
                            <Text>nome_do_arquivo.csv</Text>
                            <Box display="flex" gap={2} mb={1}>
                                <Text>Completo</Text>
                                <Button callback={onOpen} color="copybase.button" size="small">
                                    <Icon as={FaEye}/>
                                </Button>
                            </Box>
                        </Box>
                        <Progress 
                            size='sm' 
                            colorScheme="copybase.progress" 
                            value={100}
                            borderRadius={5}
                        />
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