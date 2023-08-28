import React from 'react'
import ModalFrag from '../Fragments/ModalFrag';
import FormAddVehicle from '../Fragments/FormAddVehicle';
import MasterTab from '../Fragments/MasterTabFrag';

const columns = [
    { title: 'No', dataIndex: 'no', key: 'no', },
    { title: 'Nomor Plat', dataIndex: 'vehicle_no', key: 'vehicle_no', },
    { title: 'Model', dataIndex: 'vehicle_type_name', key: 'vehicle_type_name', },
    { title: 'Category', dataIndex: 'vehicle_type_category', key: 'vehicle_type_category', },
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
        <MasterTab>
            <MasterTab.Header>List Kendaraan</MasterTab.Header>
            <MasterTab.Body>
            <ModalFrag button_title="Add Kendaraan" modal_title="Add Kendaraan" button_type="primary">
                    <FormAddVehicle></FormAddVehicle>
                </ModalFrag>
            </MasterTab.Body>
            <MasterTab.Footer datacolumns={columns} data={data}></MasterTab.Footer>
        </MasterTab>
    )
}

export default VehicleTabLayout