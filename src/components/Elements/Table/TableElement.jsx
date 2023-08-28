import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import api from '../../../api';



const TableElement = (props) => {
    const {type , start_date = "", end_date = ""} = props

    let task_status=""

    const [posts, setPosts] = useState([]);

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

    switch (type) {
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

    const fetchDataPosts = async () => {
        await api.get('/api/v1/zts_travis?task_status=' + task_status + '&start_date=' + start_date + '&end_date=' + end_date)
            .then(response => {
                setPosts(response.data.data);
            })        
    }

    useEffect(() => {
        fetchDataPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Table columns={columns} dataSource={dataset} />
    )
}

export default TableElement