import React from 'react'
import { Space, Table, Button } from 'antd';

const columns = [
    {
        title: 'No',
        dataIndex: 'no',
        key: 'no',
    },
    {
        title: 'Lokasi Pickup',
        dataIndex: 'pickup_location',
        key: 'pickup_location',
    },
    {
        title: 'Tanggal DO',
        dataIndex: 'do_date',
        key: 'do_date',
    },
    {
        title: 'Jenis Kirim',
        dataIndex: 'send_type',
        key: 'send_type',
    },
    {
        title: 'Task ID',
        dataIndex: 'task_id',
        key: 'task_id',
    },
    {
        title: 'DO No',
        dataIndex: 'do_no',
        key: 'do_no',
    },
    {
        title: 'ShipTo',
        dataIndex: 'ship_to',
        key: 'ship_to',
    },
    {
        title: 'Alamat Tujuan',
        dataIndex: 'alamat_tujuan',
        key: 'alamat_tujuan',
    },
    {
        title: 'Supir',
        dataIndex: 'driver',
        key: 'driver',
    },
    {
      title: 'Plat',
      dataIndex: 'plate',
      key: 'plate',
    },
    {
        title: 'Tgl Notif Ke Supir',
        dataIndex: 'notiication_driver_date',
        key: 'notiication_driver_date',
    },
    {
        title: 'Task Status',
        dataIndex: 'status_task',
        key: 'status_task',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
];

export default function ProcessTab() {
  return (
    <div>
        <Space wrap style={{float:'right', marginBottom:'16px'}}>
            <Button type="default">Status Task</Button>
        </Space>
        <Table columns={columns} dataSource={data} />
    </div>
    
)
}
