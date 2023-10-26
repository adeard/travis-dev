import React, { useState, useEffect } from 'react'
import FormAddDriver from '../Fragments/FormAddDriver';
import MasterTab from '../Fragments/MasterTabFrag';
import { getDrivers } from '../../api/driver.service';
import FormUpdateDriver from '../Fragments/FormUpdateDriver';
import UpdateDriverStatus from '../Elements/Button/UpdateDriverStatus';

const DriverTabLayout = () => {
    const [drivers, setDrivers] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const serializedData = localStorage.getItem("logged_user");
    const columns = [
        { title: 'No', align:'center', dataIndex: 'no',key: 'no', },
        { title: 'ID Supir', align:'center', dataIndex: 'driver_id', key: 'driver_id', },
        { title: 'Nama Supir', align:'center', dataIndex: 'driver_name', key: 'driver_name', },
        { title: 'Username', align:'center', dataIndex: 'username', key: 'username', },
        { title: 'KTP', align:'center', dataIndex: 'ktp', key: 'ktp', },
        { title: 'No HP', align:'center', dataIndex: 'no_hp', key: 'no_hp', },
        { title: 'ID Kendaraan', align:'center', dataIndex: 'vehicle_id', key: 'vehicle_id', },
        { title: 'Status Supir', align:'center', dataIndex: 'driver_status', key: 'driver_status', },
        { title: 'Action', align:'center', dataIndex: 'action', key: 'action', },
    ];

    let loggedUser = JSON.parse(serializedData);

    let request_params = {
        page : 1,
        vendor_id : loggedUser.code,
    }

    if (isUpdate) {
        getDrivers(request_params, (result) => {
            setDrivers(result);
            setIsUpdate(false)
        })
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
            "driver_status" : <>
                                {obj.driver_status} &nbsp; 
                                <UpdateDriverStatus 
                                driver_id={obj.driver_id} 
                                status={obj.driver_status} 
                                isUpdate={setIsUpdate} />                            
                            </>,
            "action": <><FormUpdateDriver 
                        driver_id={obj.driver_id} 
                        vehicle_id={obj.vehicle_id} 
                        username={obj.username} 
                        driver_name={obj.driver_name}
                        ktp={obj.ktp}
                        no_hp={obj.no_hp}
                        isUpdate={setIsUpdate}
                    /> </>
        }

        return datas
    });

    return (
        <MasterTab>
            <MasterTab.Header>List Supir</MasterTab.Header>
            <MasterTab.Body>
                <FormAddDriver isUpdate={setIsUpdate}></FormAddDriver>
            </MasterTab.Body>
            <MasterTab.Footer datacolumns={columns} data={dataset}></MasterTab.Footer>
        </MasterTab>
    )
}

export default DriverTabLayout