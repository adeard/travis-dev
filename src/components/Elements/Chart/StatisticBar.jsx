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
  } from 'chart.js'

const StaticBar = (props) => {
    const {statisticTaskDate} = props

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        BarElement,
    )

    let date = []
    let startedVal = []
    let arrivedVal = []
    let assignedVal = []
    let completedVal = []
    let unassignedVal = []    
    let notifyDriverVal = []

    if (statisticTaskDate.length > 0) {        
        statisticTaskDate.forEach(element => {
            date.push(element.task_date);
            startedVal.push(element.task_statuses.started)
            arrivedVal.push(element.task_statuses.arrived)
            assignedVal.push(element.task_statuses.assigned)
            completedVal.push(element.task_statuses.completed)
            unassignedVal.push(element.task_statuses.unassigned)
            notifyDriverVal.push(element.task_statuses.notify_driver)
        });
    }

    const state = {
        labels: date,
        datasets: [
          {
            label: 'Unassigned',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132)',
            borderWidth: 1,
            data: unassignedVal
          },
          {
            label: 'Assigned',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64)',
            borderWidth: 1,
            data: assignedVal
          },
          {
            label: 'Notify Driver',
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgba(255, 205, 86)',
            borderWidth: 1,
            data: notifyDriverVal
          },
          {
            label: 'Started',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192)',
            borderWidth: 1,
            data: startedVal
          },
          {
            label: 'Arrived',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255)',
            borderWidth: 1,
            data: arrivedVal
          },
          {
            label: 'Completed',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235)',
            borderWidth: 1,
            data: completedVal
          },
        ]
    }

    return (
        <Bar
            data={state}
            options={{
                title:{
                    display:true,
                    text:'Task Statistic',
                    fontSize:20
                },
                legend:{
                    display:true,
                    position:'right'
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

export default StaticBar