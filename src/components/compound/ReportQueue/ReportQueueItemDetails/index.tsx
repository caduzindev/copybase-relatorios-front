import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { SimpleBarChart } from "../../../unique/Chart/SimpleBar"

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
        <Tabs variant='soft-rounded' colorScheme='green' width="100%">
            <TabList display="flex" justifyContent="center">
                <Tab>MRR</Tab>
                <Tab>Churn Rate</Tab>
            </TabList>
            <TabPanels>
                <TabPanel height={500}>
                    <SimpleBarChart 
                        data={mrrData} 
                        labels={months} 
                    />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Box>
}