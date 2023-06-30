import React from 'react'
import { Space, Table } from 'antd';
import ModalFrag from '../Fragments/ModalFrag';
import FormAddVehicle from '../Fragments/FormAddVehicle';

const columns = [
    {
        title: 'No',
        dataIndex: 'no',
        key: 'no',
    },
    {
        title: 'Nomor Plat',
        dataIndex: 'vehicle_no',
        key: 'vehicle_no',
    },
    {
        title: 'Model',
        dataIndex: 'vehicle_type_name',
        key: 'vehicle_type_name',
    },
    {
        title: 'Category',
        dataIndex: 'vehicle_type_category',
        key: 'vehicle_type_category',
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

const VehicleTabLayout = () => {
    return (
        <>
            <Space wrap style={{float:'left', marginBottom:'16px'}}>
                <h2>List Kendaraan</h2>
            </Space>
            <Space wrap style={{float:'right', marginBottom:'16px'}}>
                <ModalFrag button_title="Add Kendaraan" modal_title="Add Kendaraan" button_type="primary">
                    <FormAddVehicle></FormAddVehicle>
                </ModalFrag>
            </Space>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default VehicleTabLayout