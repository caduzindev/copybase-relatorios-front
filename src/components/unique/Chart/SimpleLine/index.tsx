import { Line } from "react-chartjs-2"

type Props = {
    data: number[],
    labels: string[]
}

export const SimpleLineChart = ({data,labels}: Props) => {
    return <Line 
        options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Churn Rate por mês'
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
                    fill: true
                }
            ]
        }}
    />
}