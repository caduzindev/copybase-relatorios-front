import { Box, Card, CardBody, Icon, Progress, Stack, Text } from "@chakra-ui/react"
import { FaEye } from "react-icons/fa6";
import { MdFilePresent } from 'react-icons/md' 
import { Button } from "../../unique/Button"
export const ReportQueue = () => {
    return (
        <Box>
            <Text color="copybase.general.black" fontSize="4xl" fontWeight="600">Relatorios</Text>
            <Stack>
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
                                    <Button callback={()=>console.log('Button')} color="copybase.button" size="small">
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
                <Card 
                    direction={{base: 'column',sm: "row"}} 
                    overflow='hidden'
                    alignItems="center"
                    p={4}
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
                                <Text>Em progresso</Text>
                            </Box>
                            <Progress 
                                size='sm' 
                                isIndeterminate 
                                colorScheme="copybase.progress"
                                borderRadius={5}
                            />
                        </CardBody>
                    </Stack>
                </Card>
                <Card 
                    direction={{base: 'column',sm: "row"}} 
                    overflow='hidden'
                    alignItems="center"
                    p={4}
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
                                <Text>Erro inesperado</Text>
                            </Box>
                            <Progress 
                                size='sm'
                                borderRadius={5}
                            />
                        </CardBody>
                    </Stack>
                </Card>
            </Stack>
        </Box>
    )
}