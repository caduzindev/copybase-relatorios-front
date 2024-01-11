import { Line } from "react-chartjs-2"
import { colors } from "../../../../themes/Chakra/chakra"

type Props = {
    data: number[],
    labels: string[],
    title: string,
}

export const SimpleLineChart = ({data, labels, title}: Props) => {
    return <Line 
        options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: title
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: (value) => {
                            return value+'%' 
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
                    borderColor: colors.general.purpleClean,
                    backgroundColor: colors.general.whiteGray,
                    pointStyle: 'circle',
                    pointRadius: 8,
                    pointHoverRadius: 13,
                    borderWidth: 1,
                    fill: true
                }
            ]
        }}
    />
}