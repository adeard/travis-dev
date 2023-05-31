import React from 'react'
import { Space, Table } from 'antd';
import AssignDriver from './AssignDriver';
import StatusTask from './StatusTask';

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
        title: 'Muatan',
        children : [
            {
            title: 'Tonnase',
            dataIndex: 'tonnase',
            key: 'tonnase',
            },
            {
            title: 'Volume',
            dataIndex: 'volume',
            key: 'volume',
            },
        ]
    },
    {
        title: 'Req Kendaraan',
        dataIndex: 'req_vehicle',
        key: 'req_vehicle',
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

export default function InformationDeliveryTab() {
    return (
        <div>
            <Space wrap style={{float:'right', marginBottom:'16px'}}>
                <AssignDriver />
                <StatusTask />
            </Space>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
