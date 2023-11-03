import React from 'react'
import { 
    DatabaseFilled, 
    SoundFilled, 
    RocketFilled, 
    HomeFilled, 
    CheckCircleFilled 
} from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import ContentLayout from '../components/Layouts/ContentLayout'

export default function HomePage() {
    return (    
        <ContentLayout current_page="home">
            <Row gutter={16}>
                <Col span={8}>
                    <Card bordered={false} style={{ backgroundColor:"#4F6F52" }}>
                        <Statistic 
                        title={<p style={{margin:"0px", color:"white", fontSize:"14px"}}>Assigned</p>}
                        value={9}
                        valueStyle={{
                            color: 'white',
                        }}
                        prefix={<DatabaseFilled />}
                        suffix="Task"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false} style={{ backgroundColor:"#4F6F52" }}>
                        <Statistic
                        title={<p style={{margin:"0px", color:"white", fontSize:"14px"}}>Notify Driver</p>}
                        value={2}
                        valueStyle={{
                            color: 'white',
                        }}
                        prefix={<SoundFilled />}
                        suffix="Task"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false} style={{ backgroundColor:"#4F6F52" }}>
                        <Statistic
                        title={<p style={{margin:"0px", color:"white", fontSize:"14px"}}>Started</p>}
                        value={23}
                        valueStyle={{
                            color: 'white',
                        }}
                        prefix={<RocketFilled />}
                        suffix="Task"
                        />
                    </Card>
                </Col>
            </Row>
            <br />
            <Row gutter={16}>
                <Col span={12}>
                    <Card bordered={false} style={{ backgroundColor:"#4F6F52" }}>
                        <Statistic
                        title={<p style={{margin:"0px", color:"white", fontSize:"14px"}}>Arrived</p>}
                        value={14}
                        valueStyle={{
                            color: 'white',
                        }}
                        prefix={<HomeFilled />}
                        suffix="Task"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card bordered={false} style={{ backgroundColor:"#4F6F52" }}>
                        <Statistic
                        title={<p style={{margin:"0px", color:"white", fontSize:"14px"}}>Completed</p>}
                        value={11}
                        valueStyle={{
                            color: 'white',
                        }}
                        prefix={<CheckCircleFilled />}
                        suffix="Task"
                        />
                    </Card>
                </Col>
            </Row>
        </ContentLayout>
    )
}
