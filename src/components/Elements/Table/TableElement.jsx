import React from 'react'
import { Table } from 'antd';



const TableElement = (props) => {
    const {type} = props

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
            columns.push(
                { title: 'Supir', dataIndex: 'driver_name', key: 'driver_name'},
                { title: 'Plat', dataIndex: 'vehicle_no', key: 'vehicle_no'},
                { title: 'Tgl Selesai', dataIndex: 'receive_date', key: 'receive_date'},
            )
            break;
    
        default:
            break;
    }
    
    const data = [
        {
            no: '1',
            pickup_location: 'John Brown',
            do_date: 32,
            send_type: 'New York No. 1 Lake Park',
        },
        {
            no: '2',
            pickup_location: 'Jim Green',
            do_date: 42,
            send_type: 'London No. 1 Lake Park',
        },
        {
            no: '3',
            pickup_location: 'Joe Black',
            do_date: 32,
            send_type: 'Sydney No. 1 Lake Park',
        },
    ];

    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default TableElement