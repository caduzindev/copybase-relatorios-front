import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2"

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
                }
            }
        }}
        data={{
            labels,
            datasets: [
                {
                    data,
                    borderColor: '#ff0000',
                    backgroundColor: '#f8aabf',
                    borderWidth: 2,
                    borderSkipped: false,
                }
            ]
        }}
    />
}