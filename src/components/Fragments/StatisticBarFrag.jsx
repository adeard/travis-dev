import React from 'react'
import StatisticBar from '../Elements/Chart/StatisticBar';

const StatisticBarFrag = (props) => {
    const { statisticTaskDate } = props

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
        <StatisticBar state = {state} />  
    )
}

export default StatisticBarFrag