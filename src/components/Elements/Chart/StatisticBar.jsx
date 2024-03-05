import React from 'react'
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    TimeScale,
  } from 'chart.js'

const StatisticBar = (props) => {
    const {state} = props

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        BarElement,
        TimeScale,
    )

    return (
        <Bar
            style={{height:'300px'}}
            data={state}
            options={{
                responsive: true,
                title:{
                    display:true,
                    text:'Task Statistic',
                    fontSize:20
                },
                scales: {
                    x: {
                        title: {
                          display: true,
                          text: 'Date'
                        },
                        stacked: true,
                      },
                    y: {
                        title: {
                          display: true,
                          text: 'Total Task'
                        },
                        min: 0,
                        ticks: {
                          // forces step size to be 50 units
                          stepSize: 5
                        },
                        stacked: true,
                    },
                },
                animations: {
                    y: {
                        easing: 'easeInOutElastic',
                        from: (ctx) => {
                            if (ctx.type === 'data') {
                                if (ctx.mode === 'default' && !ctx.dropped) {
                                    ctx.dropped = true;
                                    return 0;
                                }
                            }
                        }
                    }
                },
            }}
        />  
    )
}

export default StatisticBar