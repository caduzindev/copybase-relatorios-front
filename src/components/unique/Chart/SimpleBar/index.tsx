import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2"
import { colors } from '../../../../themes/Chakra/chakra';

ChartJS.register(...registerables);

type Props = {
    data: number[],
    labels: string[]
}

export const SimpleBarChart = ({data,labels}: Props) => {
    return <Bar 
        options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'MRR por mês'
                },
                legend: {
                    position: 'top'
                }
            }
        }}
        data={{
            labels,
            datasets: [
                {
                    data,
                    borderColor: colors.general.whiteGrayClean,
                    backgroundColor: colors.general.purple,
                    borderWidth: 1,
                    borderSkipped: false,
                }
            ]
        }}
    />
}