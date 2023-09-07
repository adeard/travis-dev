import React, { useState, useEffect } from 'react'
import { Space, Button } from 'antd';
import TableElement from '../Elements/Table/TableElement';
import ModalFrag from './ModalFrag';
import FormAssignDriver from './FormAssignDriver';
import FormRejectTask from './FormRejectTask';
import { getZtsTravis } from '../../api/ztstravis.service';

const TabContent = (props) => {

    const [posts, setPosts] = useState([]);
    const {tab_type, start = "", end = ""} = props
    
    let opt_button =""
    let task_status=""
    let columns = [
        { title: 'No', dataIndex: 'no', key: 'no'},
        { title: 'Lokasi Pickup', dataIndex: 'pickup_location', key: 'pickup_location'},
        { title: 'Tanggal DO', dataIndex: 'do_date', key: 'do_date'},
        { title: 'Jenis Kirim', dataIndex: 'send_type', key: 'send_type'},
        { title: 'Task ID', dataIndex: 'task_id', key: 'task_id'},
        { title: 'DO No', dataIndex: 'do_no', key: 'do_no'},
        { title: 'ShipTo', dataIndex: 'ship_to', key: 'ship_to'},
        { title: 'Alamat Tujuan', dataIndex: 'alamat_tujuan', key: 'alamat_tujuan'},
    ];

    if (tab_type === "pending") {
        opt_button = <>
            <ModalFrag button_type="primary" button_title="Assign Supir" modal_title="Assign Supir">
                <FormAssignDriver></FormAssignDriver>
            </ModalFrag>
            <ModalFrag button_type="default" button_title="Reject Task" modal_title="Reject Task">
                <FormRejectTask></FormRejectTask>
            </ModalFrag>
        </>
    }

    switch (tab_type) {
        case "pending":
            task_status = "STARTED"
            columns.push(
                { title: 'Muatan',
                    children : [
                        { title: 'Tonnase', dataIndex: 'tonnase', key: 'tonnase'},
                        { title: 'Volume', dataIndex: 'volume', key: 'volume'},
                    ]
                },
                { title: 'Req Kendaraan', dataIndex: 'req_vehicle', key: 'req_vehicle'},
            )
            break;
        case "process":
            columns.push(
                { title: 'Supir', dataIndex: 'driver_name', key: 'driver_name'},
                { title: 'Plat', dataIndex: 'vehicle_no', key: 'vehicle_no'},
                { title: 'Tgl Notif ke Supir', dataIndex: 'erdat', key: 'erdat'},
                { title: 'Status Task', dataIndex: 'task_status', key: 'task_status'},
            )
            break;
        case "done":
            task_status = "COMPLETED"
            columns.push(
                { title: 'Supir', dataIndex: 'driver_name', key: 'driver_name'},
                { title: 'Plat', dataIndex: 'vehicle_no', key: 'vehicle_no'},
                { title: 'Tgl Selesai', dataIndex: 'receive_date', key: 'receive_date'},
            )
            break;
    
        default:
            break;
    }

    let request_params = {
        task_status,
        start_date : start,
        end_date : end,
    }

    useEffect(() => {
         // eslint-disable-next-line
        getZtsTravis(request_params, (status, result) => {
            if (status) {
                setPosts(result);
            } else {
                console.log(result)
            }
        })
    }, []);

    const dataset = posts.map((obj, index) =>  {
        let datas = {
            "no" : index + 1,
            "key" : index + 1,
            "pickup_location" : obj.pick_location, 
            "do_date" : obj.bldat,
            "send_type" : obj.jenis_kirim,
            "task_id" : obj.taskid,
            "do_no" : obj.vbeln,
            "ship_to" : obj.shipto,
            "alamat_tujuan" : obj.alamat_tujuan,
            "tonnase" : obj.brgew,
            "volume" : obj.volum,
            "req_vehicle" : obj.vehicle_type,
            "driver_name" : obj.driver_name,
            "vehicle_no" : obj.vehicle_no,
            "erdat" : obj.erdat,
            "task_status" : obj.task_status,
            "receive_date" : obj.receive_date
        }

        return datas
    });

    return (
        <div>
            <Space wrap style={{float:'right', marginBottom:'16px'}}>
                {opt_button}
                <Button type="default">Status Task</Button>
            </Space>
            <TableElement columns={columns} dataSource={dataset}></TableElement>
        </div>
    )
}

export default TabContent