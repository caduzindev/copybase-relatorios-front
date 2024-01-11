import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2"
import { colors } from '../../../../themes/Chakra/chakra';

ChartJS.register(...registerables);

type Props = {
    data: number[],
    labels: string[],
    title: string;
}

export const SimpleBarChart = ({data, labels, title}: Props) => {
    return <Bar 
        options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: title
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: (value) => {
                            return 'R$ '+value 
                        }
                    }
                }
            }
        }}
        data={{
            labels,
            datasets: [
                {
                    label: 'Metricas',
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