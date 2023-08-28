import React from 'react'
import { Form, Space, Table } from 'antd';
import StatusTask from '../Fragments/StatusTask';
import ModalFrag from '../Fragments/ModalFrag';
import FormAssignDriver from '../Fragments/FormAssignDriver';
import Index from '../Elements/Input/Index';

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

const InformationDeliveryLayout = () => {
    return (
        <>
            <Space wrap style={{float:'left', marginBottom:'16px'}}>
                <h2>Informasi Pengiriman</h2>
            </Space>
            <Space wrap style={{float:'right', marginBottom:'16px'}}>
                <ModalFrag button_title="Assign Supir" modal_title="Assign Supir">
                    <FormAssignDriver></FormAssignDriver>
                </ModalFrag>
                <StatusTask />
            </Space>
            <Table columns={columns} dataSource={data} />
            <Form>
                <Index label="Remark Dari SIMP" name="remark_fr_simp" type="textarea" style={{width: 400, maxWidth: 400 }}></Index>
            </Form>
        </>
    )
}

export default InformationDeliveryLayout