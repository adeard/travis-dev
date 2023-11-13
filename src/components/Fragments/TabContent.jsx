import React, { useState } from 'react'
import { Space, Table } from 'antd';
import { Link } from "react-router-dom";
import FormAssignDriver from './FormAssignDriver';
import FormRejectTask from './FormRejectTask';

const TabContent = (props) => {
    const {tab_type, posts} = props
    console.log(posts)
    const [isUpdate, setIsUpdate] = useState(false)
    let columns = [
        { title: 'No', align:'center', dataIndex: 'no', key: 'no', fixed: 'left', width: 40},
        { title: 'Status Task', align:'center', dataIndex: 'task_status', key: 'task_status', fixed: 'left'},
        { title: 'Task ID', align:'center', dataIndex: 'task_id', key: 'task_id', fixed: 'left'},
        { title: 'Lokasi Pickup', align:'center', dataIndex: 'pickup_location', key: 'pickup_location'},        
        { title: 'Tanggal DO', align:'center', dataIndex: 'do_date', key: 'do_date'},
        { title: 'Jenis Kirim', align:'center', dataIndex: 'send_type', key: 'send_type'},        
        { title: 'DO No', align:'center', dataIndex: 'do_no', key: 'do_no'},
        { title: 'ShipTo', align:'center', dataIndex: 'ship_to', key: 'ship_to'},
        { title: 'Alamat Tujuan', align:'center', dataIndex: 'alamat_tujuan', key: 'alamat_tujuan', ellipsis: true},
    ];

    switch (tab_type) {
        case "pending":
            columns.push(
                { title: 'Muatan',
                    children : [
                        { title: 'Tonnase', align:'center', dataIndex: 'tonnase', key: 'tonnase'},
                        { title: 'Volume', align:'center', dataIndex: 'volume', key: 'volume'},
                    ]
                },
                { title: 'Req Kendaraan', align:'center', dataIndex: 'req_vehicle', key: 'req_vehicle', width:180},
                { title: 'Action', align:'center', dataIndex: 'action', key: 'action', fixed: 'right', width:170},
            )
            break;
        case "process":
            columns.push(
                { title: 'Supir', align:'center', dataIndex: 'driver_name', key: 'driver_name'},
                { title: 'Plat', align:'center', dataIndex: 'vehicle_no', key: 'vehicle_no'},
                { title: 'Tgl Notif ke Supir', align:'center', dataIndex: 'erdat', key: 'erdat'},
            )
            break;
        case "done":
            columns.push(
                { title: 'Supir', align:'center', dataIndex: 'driver_name', key: 'driver_name'},
                { title: 'Plat', align:'center', dataIndex: 'vehicle_no', key: 'vehicle_no'},
                { title: 'Tgl Selesai', align:'center', dataIndex: 'receive_date', key: 'receive_date'},
            )
            break;
    
        default:
            break;
    }

    if (isUpdate) {
        setIsUpdate(false)
        props.updateData(true)
    }

    const dataset = posts.map((obj, index) =>  {
        
        let bldat = obj.bldat.split("T")
        let erdat = obj.erdat.split("T")
        let receive_date = obj.bldat.split("T")

        let datas = {
            "no" : index + 1,
            "key" : index + 1,
            "pickup_location" : obj.pick_location, 
            "do_date" : bldat[0],
            "send_type" : obj.jenis_kirim,
            "task_id" : <Link to={`/information-delivery/${obj.taskid}`}>{obj.taskid}</Link>,
            "do_no" : obj.vbeln,
            "ship_to" : obj.shipto,
            "alamat_tujuan" : obj.shipto_street,
            "tonnase" : obj.brgew,
            "volume" : obj.volum,
            "req_vehicle" : obj.vehicle_type,
            "driver_name" : obj.driver_name,
            "vehicle_no" : obj.vehicle_no,
            "erdat" : erdat[0],
            "task_status" : obj.task_status,
            "receive_date" : receive_date[0],
        }

        if (tab_type === "pending") {
            datas.action = <Space wrap>
                {obj.task_status === "ASSIGNED" ? 
                    <>  
                        <FormAssignDriver task_id={obj.taskid} isUpdate={setIsUpdate}></FormAssignDriver>
                        <FormRejectTask task_id={obj.taskid}></FormRejectTask> 
                    </> : null}
            </Space>
        }

        return datas
    });

    return (
        <Table size="small" columns={columns} dataSource={dataset} scroll={{x: 1800}} />
    )
}

export default TabContent