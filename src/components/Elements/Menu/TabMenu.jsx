import React, {useState} from 'react'
import { Tabs, Space, Table } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { filterAssignmentDate, updateTaskList } from '../../../redux/slices/dateSlice';
import { BookTwoTone, CarTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import FormAssignDriver from '../../Fragments/FormAssignDriver';
import FormRejectTask from '../../Fragments/FormRejectTask';


const TabMenu = (props) => {
    const dispatch = useDispatch()
    const { posts } = props
    const [taskStatus, setTaskStatus] = useState("PENDING");
    const dateStatistic = useSelector((state) => state.date_statistic)
    const vendorId = localStorage.getItem('vendor_id')

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    let columns = [
        { title: 'No', align:'center', dataIndex: 'no', key: 'no', fixed: 'left', width: 40},
        { 
            title: 'Status Task', 
            align:'center', 
            dataIndex: 'task_status', 
            key: 'task_status', 
            fixed: 'left',
            sorter: (a, b) => a.task_status - b.task_status
        },
        { title: 'Task ID', align:'center', dataIndex: 'task_id', key: 'task_id', fixed: 'left', sorter: (a, b) => a.task_id - b.task_id},
        { title: 'DO No', align:'center', dataIndex: 'do_no', key: 'do_no', fixed: 'left', sorter: (a, b) => a.do_no - b.do_no},
        { title: 'Lokasi Pickup', align:'center', dataIndex: 'pickup_location', key: 'pickup_location', sorter: (a, b) => a.pickup_location - b.pickup_location},        
        { title: 'Tanggal Task', align:'center', dataIndex: 'erdat', key: 'erdat', sorter: (a, b) => a.erdat - b.erdat},        
        { title: 'Tanggal DO', align:'center', dataIndex: 'do_date', key: 'do_date', sorter: (a, b) => a.do_date - b.do_date},
        { title: 'Jenis Kirim', align:'center', dataIndex: 'send_type', key: 'send_type', sorter: (a, b) => a.send_type - b.send_type},                
        { title: 'ShipTo', align:'center', dataIndex: 'ship_to', key: 'ship_to', sorter: (a, b) => a.ship_to - b.ship_to},
        { title: 'Alamat Tujuan', align:'center', dataIndex: 'alamat_tujuan', key: 'alamat_tujuan', sorter: (a, b) => a.alamat_tujuan - b.alamat_tujuan},
    ];

    switch (taskStatus) {
        case "PROCESS":
            columns.push(
                { title: 'Supir', align:'center', dataIndex: 'driver_name', key: 'driver_name', sorter: (a, b) => a.driver_name - b.driver_name},
                { title: 'Plat', align:'center', dataIndex: 'vehicle_no', key: 'vehicle_no', sorter: (a, b) => a.vehicle_no - b.vehicle_no},
                { title: 'Tgl Notif ke Supir', align:'center', dataIndex: 'erdat', key: 'erdat', sorter: (a, b) => a.erdat - b.erdat},
            )
            break;
        case "COMPLETE":
            columns.push(
                { title: 'Supir', align:'center', dataIndex: 'driver_name', key: 'driver_name', sorter: (a, b) => a.driver_name - b.driver_name},
                { title: 'Plat', align:'center', dataIndex: 'vehicle_no', key: 'vehicle_no', sorter: (a, b) => a.vehicle_no - b.vehicle_no},
                { title: 'Tgl Selesai', align:'center', dataIndex: 'receive_date', key: 'receive_date', sorter: (a, b) => a.receive_date - b.receive_date},
            )
            break;        
        default:
            columns.push(
                { title: 'Muatan',
                    children : [
                        { title: 'Tonnase', align:'center', dataIndex: 'tonnase', key: 'tonnase', sorter: (a, b) => a.tonnase - b.tonnase},
                        { title: 'Volume', align:'center', dataIndex: 'volume', key: 'volume', sorter: (a, b) => a.volume - b.volume},
                    ]
                },
                { title: 'Req Kendaraan', align:'center', dataIndex: 'req_vehicle', key: 'req_vehicle', width:180, sorter: (a, b) => a.req_vehicle - b.req_vehicle},                
            )

            if (vendorId !== '') {
                columns.push(
                    { title: 'Action', align:'center', dataIndex: 'action', key: 'action', fixed: 'right', width:170},
                )
            }

            break;
    }

    const handleClick = (values) => {
        let filter = {
            start_date : dateStatistic.start_date,
            end_date : dateStatistic.end_date,
            vendor_id : dateStatistic.vendor_id,
        }

        switch (values) {
            case 2:
                filter.task_status = "PROCESS"                
                setTaskStatus("PROCESS")

                break;
            case 3:
                filter.task_status = "COMPLETE"
                setTaskStatus("COMPLETE")

                break;        
            default:
                filter.task_status = "PENDING"
                setTaskStatus("PENDING")

                break;
        }

        dispatch(filterAssignmentDate(filter))
        dispatch(updateTaskList({is_update:1}))
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

        if (taskStatus === "PENDING") {
            datas.action = <Space wrap>
                {obj.task_status === "ASSIGNED" ? 
                    <>  
                        <FormAssignDriver task_id={obj.taskid}></FormAssignDriver>
                        <FormRejectTask task_id={obj.taskid}></FormRejectTask> 
                    </> : null}
            </Space>
        }

        return datas
    });

    return (
        <Tabs
            onTabClick={handleClick}
            defaultActiveKey="1"
            items={[
                {
                    label: ( <span><BookTwoTone /> Pending</span> ),
                    key: 1,
                    children : <Table onChange={onChange} size="small" columns={columns} dataSource={dataset} scroll={{x: 1800}} />
                },
                {
                    label: ( <span><CarTwoTone /> Process</span>),
                    key: 2,
                    children : <Table size="small" columns={columns} dataSource={dataset} scroll={{x: 1800}} />
                },
                {
                    label: ( <span><CheckCircleTwoTone /> Complete</span>),
                    key: 3,
                    children : <Table size="small" columns={columns} dataSource={dataset} scroll={{x: 1800}} />
                },
            ]}
        />
    )
}

export default TabMenu