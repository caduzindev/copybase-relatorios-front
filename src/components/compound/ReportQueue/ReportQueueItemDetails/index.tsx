import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { SimpleBarChart } from "../../../unique/Chart/SimpleBar"
import { SimpleLineChart } from "../../../unique/Chart/SimpleLine"

type Props = {
    mrrData: number[],
    churnRateData: number[],
    months: string[]
}

export const ReportQueueItemDetails = ({ mrrData,churnRateData,months }: Props) => {
    return <Box 
        display="flex" 
        justifyContent="center"
        p="4" 
        width="100%"
        maxHeight={500}
    >
        <Tabs variant='soft-rounded' width="100%">
            <TabList display="flex" justifyContent="center">
                <Tab _selected={{bg: "copybase.general.purple", color:'copybase.general.white'}}>MRR</Tab>
                <Tab _selected={{bg: "copybase.general.purple", color:'copybase.general.white'}}>Churn Rate</Tab>
            </TabList>
            <TabPanels>
                <TabPanel height={500}>
                    <SimpleBarChart 
                        data={mrrData} 
                        labels={months}
                        title="MRR por mês" 
                    />
                </TabPanel>
                <TabPanel height={500}>
                    <SimpleLineChart 
                        data={churnRateData} 
                        labels={months} 
                        title="Churn rate por mês"
                    />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Box>
}