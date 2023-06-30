import React from 'react'
import { Space, Table } from 'antd';
import ModalFrag from '../Fragments/ModalFrag';
import FormAddDriver from '../Fragments/FormAddDriver';


const columns = [
    {
        title: 'No',
        dataIndex: 'no',
        key: 'no',
    },
    {
        title: 'ID Supir',
        dataIndex: 'driver_id',
        key: 'driver_id',
    },
    {
        title: 'Nama Supir',
        dataIndex: 'driver_name',
        key: 'driver_name',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'KTP',
        dataIndex: 'ktp',
        key: 'ktp',
    },
    {
        title: 'No HP',
        dataIndex: 'no_hp',
        key: 'no_hp',
    },
    {
        title: 'Default Kendaraan',
        dataIndex: 'vehicle_id',
        key: 'vehicle_id',
    },
    {
        title: 'Status Supir',
        dataIndex: 'driver_status',
        key: 'driver_status',
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

const DriverTabLayout = () => {
    return (
        <>
            <Space wrap style={{float:'left', marginBottom:'16px'}}>
                <h2>List Supir</h2>
            </Space>
            <Space wrap style={{float:'right', marginBottom:'16px'}}>
                <ModalFrag button_title="Add Supir" modal_title="Add Supir" button_type="primary">
                    <FormAddDriver></FormAddDriver>
                </ModalFrag>
            </Space>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default DriverTabLayout