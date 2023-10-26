import React from 'react'
import { Space, Table } from 'antd';
import StatusTask from '../Fragments/StatusTask';

const InformationDeliveryLayout = (props) => {
    const {task_id, columns, dataset, tasklogs} = props
    return (
        <>
            <Space wrap style={{float:'left', marginBottom:'16px'}}>
                <h2>{task_id}</h2>
            </Space>
            <Space wrap style={{float:'right', marginBottom:'16px'}}>
                <StatusTask task_id={task_id} tasklogs={tasklogs} />
            </Space>
            <Table columns={columns} dataSource={dataset} size='small' />
        </>
    )
}

export default InformationDeliveryLayout