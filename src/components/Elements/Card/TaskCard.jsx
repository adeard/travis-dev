import React from 'react'
import { Card, Statistic } from 'antd';

const TaskCard = (props) => {

    const {style, title, value, prefix} = props

    return (
        <Card bordered={false} style={style}>
            <Statistic
                title={<p style={{ margin:"0px", color:"black", fontSize:"14px" }}>{title}</p>}
                value={value}
                valueStyle={{ color: 'black', }}
                prefix={prefix}
                suffix="Task"
            />
        </Card>
    )
}

export default TaskCard