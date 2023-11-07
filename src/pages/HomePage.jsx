import React from 'react'
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



export default function HomePage() {
    
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

    const state = {
        labels: ['2023-10-16', '2023-10-17', '2023-10-18'],
        datasets: [
          {
            label: 'Unassigned',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132)',
            borderWidth: 1,
            data: [65, 59, 80]
          },
          {
            label: 'Assigned',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64)',
            borderWidth: 1,
            data: [12, 32, 15]
          },
          {
            label: 'Notify Driver',
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgba(255, 205, 86)',
            borderWidth: 1,
            data: [15, 23, 64]
          },
          {
            label: 'Started',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192)',
            borderWidth: 1,
            data: [12, 16, 87]
          },
          {
            label: 'Arrived',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255)',
            borderWidth: 1,
            data: [53, 76, 34]
          },
          {
            label: 'Completed',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235)',
            borderWidth: 1,
            data: [12, 87, 54]
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
                        value={9}
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
                        value={9}
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
                        value={2}
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
                        value={23}
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
                        value={14}
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
                        value={11}
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
                    }
                }}
                />                
            </Row>
        </ContentLayout>
    )
}
