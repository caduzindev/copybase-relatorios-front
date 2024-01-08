import { Box } from "@chakra-ui/react"
import { SimpleBarChart } from "../../../unique/Chart/SimpleBar"

export const ReportQueueItemDetails = () => {
    return <Box 
        display="flex" 
        justifyContent="center"
        p="4" 
        width="100%"
    >
        <Box maxHeight={500}>
            <SimpleBarChart 
                data={[45,67,21,34,98,45,67]} 
                labels={["1","2","3","4","5","6","7"]} 
            />
        </Box>
    </Box>
}