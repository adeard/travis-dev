import React from 'react'
import ModalFrag from '../Fragments/ModalFrag';
import FormAddDriver from '../Fragments/FormAddDriver';
import MasterTab from '../Fragments/MasterTabFrag';


const columns = [
    { title: 'No',dataIndex: 'no',key: 'no', },
    { title: 'ID Supir', dataIndex: 'driver_id', key: 'driver_id', },
    { title: 'Nama Supir', dataIndex: 'driver_name', key: 'driver_name', },
    { title: 'Username', dataIndex: 'username', key: 'username', },
    { title: 'KTP', dataIndex: 'ktp', key: 'ktp', },
    { title: 'No HP', dataIndex: 'no_hp', key: 'no_hp', },
    { title: 'Default Kendaraan', dataIndex: 'vehicle_id', key: 'vehicle_id', },
    { title: 'Status Supir', dataIndex: 'driver_status', key: 'driver_status', },
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
        <MasterTab>
            <MasterTab.Header>List Supir</MasterTab.Header>
            <MasterTab.Body>
                <ModalFrag button_title="Add Supir" modal_title="Add Supir" button_type="primary">
                    <FormAddDriver></FormAddDriver>
                </ModalFrag>
            </MasterTab.Body>
            <MasterTab.Footer datacolumns={columns} data={data}></MasterTab.Footer>
        </MasterTab>
    )
}

export default DriverTabLayout