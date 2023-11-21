import React,{ useEffect, useState } from 'react'
import { useParams } from "react-router"
import ContentLayout from '../components/Layouts/ContentLayout'
import InformationDeliveryLayout from '../components/Layouts/InformationDeliveryLayout'
import { getTask } from '../api/task.service'
import { getTaskLog } from '../api/tasklog.service'


const InformationDeliveryPage = () => {
    const {id} = useParams()
    const [tasks, setTasks] = useState([])
    const [tasklogs, setTaskLogs] = useState([])

    const columns = [
        { title: 'No', align:'center', dataIndex: 'no', key: 'no', width: 40},
        { title: 'Lokasi Pickup', align:'center', dataIndex: 'pickup_location', key: 'pickup_location'},
        { title: 'Tanggal DO', align:'center', dataIndex: 'do_date', key: 'do_date'},
        { title: 'Jenis Kirim', align:'center', dataIndex: 'send_type', key: 'send_type'},
        { title: 'Task ID', align:'center', dataIndex: 'task_id', key: 'task_id'},
        { title: 'DO No', align:'center', dataIndex: 'do_no', key: 'do_no'},
        { title: 'ShipTo', align:'center', dataIndex: 'ship_to', key: 'ship_to'},
        { title: 'Alamat Tujuan', align:'center', dataIndex: 'alamat_tujuan', key: 'alamat_tujuan'},
        { title: 'Muatan',
            children : [
                { title: 'Tonnase', align:'center', dataIndex: 'tonnase', key: 'tonnase'},
                { title: 'Volume', align:'center', dataIndex: 'volume', key: 'volume'},
            ]
        },
        { title: 'Req Kendaraan', align:'center', dataIndex: 'req_vehicle', key: 'req_vehicle'},
    ];

    useEffect(() => {
        getTask({"taskid" : id}, (status, result) => {
           if (status) {
               setTasks(result)
           } else {
               console.log(result)
           }
       })

        getTaskLog({"taskid" : id}, (status, result) => {
            if (status) {
                setTaskLogs(result)
            } else {
                console.log(result)
            }
        })
        
        // eslint-disable-next-line
   }, []);

    const dataset = tasks.map((obj, index) =>  {
        let bldat = obj.bldat.split("T")
        let datas = {
            "no" : index + 1,
            "key" : index + 1,
            "pickup_location" : obj.pick_location, 
            "do_date" : bldat[0],
            "send_type" : obj.jenis_kirim,
            "task_id" : obj.taskid,
            "do_no" : obj.vbeln,
            "ship_to" : obj.shipto,
            "alamat_tujuan" : obj.shipto_street,
            "tonnase" : obj.brgew,
            "volume" : obj.volum,
            "req_vehicle" : obj.vehicle_type,
        }

        return datas
    });

    return (
        <ContentLayout current_page="information delivery">
            <InformationDeliveryLayout task_id={id} columns={columns} dataset={dataset} tasklogs={tasklogs} ></InformationDeliveryLayout>
        </ContentLayout>
    )
}

export default InformationDeliveryPage