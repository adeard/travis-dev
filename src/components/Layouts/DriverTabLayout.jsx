import React, { useState, useEffect } from 'react'
import FormAddDriver from '../Fragments/FormAddDriver';
import MasterTab from '../Fragments/MasterTabFrag';
import { getDrivers } from '../../api/driver.service';

const DriverTabLayout = () => {
    const [drivers, setDrivers] = useState([]);
    const columns = [
        { title: 'No',dataIndex: 'no',key: 'no', },
        { title: 'ID Supir', dataIndex: 'driver_id', key: 'driver_id', },
        { title: 'Nama Supir', dataIndex: 'driver_name', key: 'driver_name', },
        { title: 'Username', dataIndex: 'username', key: 'username', },
        { title: 'KTP', dataIndex: 'ktp', key: 'ktp', },
        { title: 'No HP', dataIndex: 'no_hp', key: 'no_hp', },
        { title: 'ID Kendaraan', dataIndex: 'vehicle_id', key: 'vehicle_id', },
        { title: 'Status Supir', dataIndex: 'driver_status', key: 'driver_status', },
    ];

    let request_params = {
        page : 1,
    }

    useEffect(() => {         
        getDrivers(request_params, (result) => {
            setDrivers(result);
        })
        // eslint-disable-next-line
    }, []);

    const dataset = drivers.map((obj, index) =>  {
        let datas = {
            "no" : index + 1,
            "key" : index + 1,
            "driver_id" : obj.driver_id,
            "driver_name" : obj.driver_name, 
            "username" : obj.username,
            "ktp" : obj.ktp,
            "no_hp" : obj.no_hp,
            "vehicle_id" : obj.vehicle_id,
            "driver_status" : obj.driver_status,
        }

        return datas
    });

    return (
        <MasterTab>
            <MasterTab.Header>List Supir</MasterTab.Header>
            <MasterTab.Body>
                <FormAddDriver></FormAddDriver>
            </MasterTab.Body>
            <MasterTab.Footer datacolumns={columns} data={dataset}></MasterTab.Footer>
        </MasterTab>
    )
}

export default DriverTabLayout