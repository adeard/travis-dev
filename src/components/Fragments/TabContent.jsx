import React, { useState, useEffect } from 'react'
import { Space, Table } from 'antd';
import { Link } from "react-router-dom";
import FormAssignDriver from './FormAssignDriver';
import FormRejectTask from './FormRejectTask';
import { getTask } from '../../api/task.service';

const TabContent = (props) => {
    const [posts, setPosts] = useState([]);
    const {tab_type, start = "", end = ""} = props
    
    let task_status=""
    let columns = [
        { title: 'No', align:'center', dataIndex: 'no', key: 'no', fixed: 'left', width: 40},
        { title: 'Lokasi Pickup', align:'center', dataIndex: 'pickup_location', key: 'pickup_location', fixed: 'left'},
        { title: 'Task ID', align:'center', dataIndex: 'task_id', key: 'task_id', fixed: 'left'},
        { title: 'Tanggal DO', align:'center', dataIndex: 'do_date', key: 'do_date'},
        { title: 'Jenis Kirim', align:'center', dataIndex: 'send_type', key: 'send_type'},        
        { title: 'DO No', align:'center', dataIndex: 'do_no', key: 'do_no'},
        { title: 'ShipTo', align:'center', dataIndex: 'ship_to', key: 'ship_to'},
        { title: 'Alamat Tujuan', align:'center', dataIndex: 'alamat_tujuan', key: 'alamat_tujuan'},
    ];

    switch (tab_type) {
        case "pending":
            task_status = "PENDING"
            columns.push(
                { title: 'Muatan',
                    children : [
                        { title: 'Tonnase', align:'center', dataIndex: 'tonnase', key: 'tonnase'},
                        { title: 'Volume', align:'center', dataIndex: 'volume', key: 'volume'},
                    ]
                },
                { title: 'Status Task', align:'center', dataIndex: 'task_status', key: 'task_status'},
                { title: 'Req Kendaraan', align:'center', dataIndex: 'req_vehicle', key: 'req_vehicle'},
                { title: 'Action', align:'center', dataIndex: 'action', key: 'action', fixed: 'right', width:170},
            )
            break;
        case "process":
            task_status = "PROCESS"
            columns.push(
                { title: 'Supir', align:'center', dataIndex: 'driver_name', key: 'driver_name'},
                { title: 'Plat', align:'center', dataIndex: 'vehicle_no', key: 'vehicle_no'},
                { title: 'Tgl Notif ke Supir', align:'center', dataIndex: 'erdat', key: 'erdat'},
                { title: 'Status Task', align:'center', dataIndex: 'task_status', key: 'task_status'},
                { title: 'Action', align:'center', dataIndex: 'action', key: 'action', fixed: 'right', width:170},
            )
            break;
        case "done":
            task_status = "COMPLETE"
            columns.push(
                { title: 'Supir', align:'center', dataIndex: 'driver_name', key: 'driver_name'},
                { title: 'Plat', align:'center', dataIndex: 'vehicle_no', key: 'vehicle_no'},
                { title: 'Tgl Selesai', align:'center', dataIndex: 'receive_date', key: 'receive_date'},
                { title: 'Action', align:'center', dataIndex: 'action', key: 'action', fixed: 'right', width:170},
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
         getTask(request_params, (status, result) => {
            if (status) {
                setPosts(result);
            } else {
                console.log(result)
            }
        })
        // eslint-disable-next-line
    }, []);

    const dataset = posts.map((obj, index) =>  {
        let datas = {
            "no" : index + 1,
            "key" : index + 1,
            "pickup_location" : obj.pick_location, 
            "do_date" : obj.bldat,
            "send_type" : obj.jenis_kirim,
            "task_id" : <Link to={`/Travis/information-delivery/${obj.taskid}`}>{obj.taskid}</Link>,
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

        if (tab_type === "pending") {
            datas.action = <Space wrap>
                {obj.task_status === "ASSIGNED" && <FormAssignDriver task_id={obj.taskid}></FormAssignDriver>}
                {obj.task_status === "ASSIGNED" && <FormRejectTask task_id={obj.taskid}></FormRejectTask>}
            </Space>
        }

        return datas
    });

    return (
        <Table size="small" columns={columns} dataSource={dataset} scroll={{
            x: 1300,
        }} />
    )
}

export default TabContent