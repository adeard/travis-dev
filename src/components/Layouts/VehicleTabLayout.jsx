import React, { useState, useEffect } from 'react'
import FormAddVehicle from '../Fragments/FormAddVehicle';
import MasterTab from '../Fragments/MasterTabFrag';
import { getVehicles } from '../../api/vehicle.service';

const VehicleTabLayout = () => {
    const [vehicles, setVehicles] = useState([]);
    const columns = [
        { title: 'No', dataIndex: 'no', key: 'no', },
        { title: 'Nomor Plat', dataIndex: 'vehicle_no', key: 'vehicle_no', },
        { title: 'Model', dataIndex: 'vehicle_type_name', key: 'vehicle_type_name', },
        { title: 'Category', dataIndex: 'vehicle_type_category', key: 'vehicle_type_category', },
    ];

    let request_params = {
        page : 1,
    }

    useEffect(() => {
        // eslint-disable-next-line
        getVehicles(request_params, (result) => {
            setVehicles(result);
        })
   }, []);

   const dataset = vehicles.map((obj, index) =>  {
        let datas = {
            "no" : index + 1,
            "key" : index + 1,
            "vehicle_no" : obj.vehicle_no,
            "vehicle_type_name" : obj.vehicle_type_name, 
            "vehicle_type_category" : obj.vehicle_type_category
        }

        return datas
    });

    return (
        <MasterTab>
            <MasterTab.Header>List Kendaraan</MasterTab.Header>
            <MasterTab.Body>
                <FormAddVehicle></FormAddVehicle>
            </MasterTab.Body>
            <MasterTab.Footer datacolumns={columns} data={dataset}></MasterTab.Footer>
        </MasterTab>
    )
}

export default VehicleTabLayout