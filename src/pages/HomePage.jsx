import React, { useEffect, useState } from 'react'
import { Bar } from "react-chartjs-2";
import { 
    DatabaseFilled, 
    SoundFilled, 
    RocketFilled, 
    HomeFilled, 
    CheckCircleFilled ,
    MessageFilled
} from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import ContentLayout from '../components/Layouts/ContentLayout'
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
import { getTaskStatistic, getTaskStatisticByDate } from '../api/task.service';

export default function HomePage() {     
    const [startedTotal, setStartedTotal] = useState(0)
    const [arrivedTotal, setArrivedTotal] = useState(0)
    const [assignedTotal, setAssignedTotal] = useState(0)
    const [completedTotal, setCompletedTotal] = useState(0)    
    const [unassignedTotal, setUnassignedTotal] = useState(0)
    const [notifyDriverTotal, setNotifyDriverTotal] = useState(0)
    const [statisticTaskDate, setStatisticTaskDate] = useState([])
    const serializedData = localStorage.getItem("logged_user");
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
    let requestParams = {}
    let unassignedVal = []    
    let notifyDriverVal = []

    if (serializedData) {
        let loggedUser = JSON.parse(serializedData);

        requestParams.vendor_id = loggedUser.code
    }

    useEffect(() => {
        getTaskStatistic(requestParams, (status, result) => {
            if (status) {
                result.forEach(element => {                    
                    switch (element.task_status) {
                        case "UNASSIGNED":
                            setUnassignedTotal(element.total_task)
                            break;
                        case "ASSIGNED":
                            setAssignedTotal(element.total_task)
                            break;
                        case "NOTIFY DRIVER":
                            setNotifyDriverTotal(element.total_task) 
                            break;
                        case "STARTED":
                            setStartedTotal(element.total_task) 
                            break;
                        case "ARRIVED":
                            setArrivedTotal(element.total_task) 
                            break;
                        case "COMPLETED":
                            setCompletedTotal(element.total_task) 
                            break;
                        default:
                            break;
                    }
                });
            } else {
                console.log(result)
            }
        })

        getTaskStatisticByDate(requestParams, (status, result) => {
            if (status) {
                setStatisticTaskDate(result)
            } else {
                console.log(result)
            }
        })
        // eslint-disable-next-line
    }, [])

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
        <ContentLayout current_page="home">
            <Row gutter={16}>
                <Col span={4}>
                    <Card bordered={false} style={{ backgroundColor:"rgba(255, 99, 132, 0.2)" }}>
                        <Statistic 
                        title={<p style={{margin:"0px", color:"black", fontSize:"14px"}}>Unassigned</p>}
                        value={unassignedTotal}
                        valueStyle={{
                            color: 'black',
                        }}
                        prefix={<MessageFilled />}
                        suffix="Task"
                        />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card bordered={false} style={{ backgroundColor:"rgba(255, 159, 64, 0.2)" }}>
                        <Statistic 
                        title={<p style={{margin:"0px", color:"black", fontSize:"14px"}}>Assigned</p>}
                        value={assignedTotal}
                        valueStyle={{
                            color: 'black',
                        }}
                        prefix={<DatabaseFilled />}
                        suffix="Task"
                        />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card bordered={false} style={{ backgroundColor:"rgba(255, 205, 86, 0.2)" }}>
                        <Statistic
                        title={<p style={{margin:"0px", color:"black", fontSize:"14px"}}>Notify Driver</p>}
                        value={notifyDriverTotal}
                        valueStyle={{
                            color: 'black',
                        }}
                        prefix={<SoundFilled />}
                        suffix="Task"
                        />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card bordered={false} style={{ backgroundColor:"rgba(75, 192, 192, 0.2)" }}>
                        <Statistic
                        title={<p style={{margin:"0px", color:"black", fontSize:"14px"}}>Started</p>}
                        value={startedTotal}
                        valueStyle={{
                            color: 'black',
                        }}
                        prefix={<RocketFilled />}
                        suffix="Task"
                        />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card bordered={false} style={{ backgroundColor:"rgba(153, 102, 255, 0.2)" }}>
                        <Statistic
                        title={<p style={{margin:"0px", color:"black", fontSize:"14px"}}>Arrived</p>}
                        value={arrivedTotal}
                        valueStyle={{
                            color: 'black',
                        }}
                        prefix={<HomeFilled />}
                        suffix="Task"
                        />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card bordered={false} style={{ backgroundColor:"rgba(54, 162, 235, 0.2)" }}>
                        <Statistic
                        title={<p style={{margin:"0px", color:"black", fontSize:"14px"}}>Completed</p>}
                        value={completedTotal}
                        valueStyle={{
                            color: 'black',
                        }}
                        prefix={<CheckCircleFilled />}
                        suffix="Task"
                        />
                    </Card>
                </Col>
            </Row>
            <br />
            <Row gutter={16}>                
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
            </Row>
        </ContentLayout>
    )
}
