import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { SimpleBarChart } from "../../../unique/Chart/SimpleBar"

export const ReportQueueItemDetails = () => {
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
                        data={[45,67,21,34,98,45,67]} 
                        labels={["1","2","3","4","5","6","7"]} 
                    />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Box>
}