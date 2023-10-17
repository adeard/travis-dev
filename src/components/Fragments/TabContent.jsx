import React, { useState, useEffect } from 'react'
import { Space } from 'antd';
import TableElement from '../Elements/Table/TableElement';
import FormAssignDriver from './FormAssignDriver';
import FormRejectTask from './FormRejectTask';
import { getTask } from '../../api/task.service';

const TabContent = (props) => {
    console.log(props.is_open)
    const [posts, setPosts] = useState([]);
    const {tab_type, start = "", end = ""} = props
    
    let opt_button =""
    let task_status=""
    let columns = [
        { title: 'No', dataIndex: 'no', key: 'no', fixed: 'left', width: 40},
        { title: 'Lokasi Pickup', dataIndex: 'pickup_location', key: 'pickup_location', fixed: 'left'},
        { title: 'Task ID', dataIndex: 'task_id', key: 'task_id', fixed: 'left'},
        { title: 'Tanggal DO', dataIndex: 'do_date', key: 'do_date'},
        { title: 'Jenis Kirim', dataIndex: 'send_type', key: 'send_type'},        
        { title: 'DO No', dataIndex: 'do_no', key: 'do_no'},
        { title: 'ShipTo', dataIndex: 'ship_to', key: 'ship_to'},
        { title: 'Alamat Tujuan', dataIndex: 'alamat_tujuan', key: 'alamat_tujuan'},
    ];

    if (tab_type === "pending") {
        opt_button = <Space wrap>
            <FormAssignDriver></FormAssignDriver>
            <FormRejectTask></FormRejectTask>
        </Space>
    }

    switch (tab_type) {
        case "pending":
            task_status = "PENDING"
            columns.push(
                { title: 'Muatan',
                    children : [
                        { title: 'Tonnase', dataIndex: 'tonnase', key: 'tonnase'},
                        { title: 'Volume', dataIndex: 'volume', key: 'volume'},
                    ]
                },
                { title: 'Req Kendaraan', dataIndex: 'req_vehicle', key: 'req_vehicle'},
                { title: 'Action', dataIndex: 'action', key: 'action', fixed: 'right', width:170},
            )
            break;
        case "process":
            task_status = "PROCESS"
            columns.push(
                { title: 'Supir', dataIndex: 'driver_name', key: 'driver_name'},
                { title: 'Plat', dataIndex: 'vehicle_no', key: 'vehicle_no'},
                { title: 'Tgl Notif ke Supir', dataIndex: 'erdat', key: 'erdat'},
                { title: 'Status Task', dataIndex: 'task_status', key: 'task_status'},
                { title: 'Action', dataIndex: 'action', key: 'action', fixed: 'right', width:170},
            )
            break;
        case "done":
            task_status = "COMPLETE"
            columns.push(
                { title: 'Supir', dataIndex: 'driver_name', key: 'driver_name'},
                { title: 'Plat', dataIndex: 'vehicle_no', key: 'vehicle_no'},
                { title: 'Tgl Selesai', dataIndex: 'receive_date', key: 'receive_date'},
                { title: 'Action', dataIndex: 'action', key: 'action', fixed: 'right', width:170},
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
         getTask(request_params, (status, result) => {
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
            "receive_date" : obj.receive_date,
        }

        datas.action = <Space wrap>
            <FormAssignDriver></FormAssignDriver>
            {obj.task_status === "ASSIGNED" && <FormRejectTask></FormRejectTask>}
        </Space>

        return datas
    });

    return (
        <div>
            <TableElement columns={columns} dataSource={dataset}></TableElement>
        </div>
    )
}

export default TabContent