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
            label: 'Assigned',
            backgroundColor: '#9ee493',
            borderColor: '#9ee493',
            borderWidth: 1,
            data: assignedVal
          },
          {
            label: 'Notify Driver',
            backgroundColor: '#FFC8DD',
            borderColor: '#FFC8DD',
            borderWidth: 1,
            data: notifyDriverVal
          },
          {
            label: 'Started',
            backgroundColor: '#e5b3fe',
            borderColor: '#e5b3fe',
            borderWidth: 1,
            data: startedVal
          },
          {
            label: 'Arrived',
            backgroundColor: '#BDE0FE',
            borderColor: '#BDE0FE',
            borderWidth: 1,
            data: arrivedVal
          },
          {
            label: 'Completed',
            backgroundColor: '#6fffe9',
            borderColor: '#6fffe9',
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