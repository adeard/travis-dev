import React, { useState, useEffect } from 'react'
import FormAddVehicle from '../Fragments/FormAddVehicle';
import MasterTab from '../Fragments/MasterTabFrag';
import { getVehicles, updateVehicle, getVehicleType } from '../../api/vehicle.service';
import FormUpdateVehicle from '../Fragments/FormUpdateVehicle';

const VehicleTabLayout = () => {
    const [vehicles, setVehicles] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [vehicleTypes, setVehicleTypes] = useState([]);    
    const [handleUpdateVehicle, setHandleUpdateVehicle] = useState();
    const serializedData = localStorage.getItem("logged_user");
    const columns = [
        { title: 'No', dataIndex: 'no', key: 'no', },
        { title: 'Nomor Plat', dataIndex: 'vehicle_no', key: 'vehicle_no', },
        { title: 'Model', dataIndex: 'vehicle_type_name', key: 'vehicle_type_name', },
        { title: 'Category', dataIndex: 'vehicle_type_category', key: 'vehicle_type_category', },
        { title: 'Action', align:'center', dataIndex: 'action', key: 'action', },
    ];

    let loggedUser = JSON.parse(serializedData);
    let request_params = {
        page : 1,
        vendor_id : loggedUser.code,
    }

    if (isUpdate) {
        getVehicles(request_params, (result) => {
            setVehicles(result);
            setIsUpdate(false)
        })
    }

    useEffect(() => {         
        getVehicles(request_params, (result) => {
            setVehicles(result);
        })

        getVehicleType((result) => {
            setVehicleTypes(result)
        })

        if (handleUpdateVehicle) {
            updateVehicle(handleUpdateVehicle, (result) => {
                getVehicles(request_params, (result) => {
                    setVehicles(result);
                })
            })    
        }
        
        // eslint-disable-next-line
    }, [handleUpdateVehicle]);

    const dataset = vehicles.map((obj, index) =>  {
        let datas = {
            "no" : index + 1,
            "key" : index + 1,
            "vehicle_no" : obj.vehicle_no,
            "vehicle_type_name" : obj.vehicle_type_name, 
            "vehicle_type_category" : obj.vehicle_type_category,
            "action": <><FormUpdateVehicle 
                        vehicle_id={obj.vehicle_id} 
                        vehicle_no={obj.vehicle_no} 
                        vehicle_type={obj.vehicle_type} 
                        vehicle_types={vehicleTypes}
                        handleUpdateVehicle={setHandleUpdateVehicle}
                        isUpdate={setIsUpdate}
                    /> </>
        }

        return datas
    });

    return (
        <MasterTab>
            <MasterTab.Header>List Kendaraan</MasterTab.Header>
            <MasterTab.Body>
                <FormAddVehicle isUpdate={setIsUpdate}></FormAddVehicle>
            </MasterTab.Body>
            <MasterTab.Footer datacolumns={columns} data={dataset}></MasterTab.Footer>
        </MasterTab>
    )
}

export default VehicleTabLayout