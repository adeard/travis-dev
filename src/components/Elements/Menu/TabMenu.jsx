import React, {useState, useRef} from 'react'
import { Tabs, Space, Table, Button, Input } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { filterAssignmentDate, updateTaskList } from '../../../redux/slices/dateSlice';
import { BookTwoTone, CarTwoTone, CheckCircleTwoTone, SearchOutlined } from '@ant-design/icons';
import FormAssignDriver from '../../Fragments/FormAssignDriver';
import FormRejectTask from '../../Fragments/FormRejectTask';


const TabMenu = (props) => {
    const dispatch = useDispatch()
    const { posts } = props
    const [taskStatus, setTaskStatus] = useState("PENDING");
    const dateStatistic = useSelector((state) => state.date_statistic)
    const vendorId = localStorage.getItem('vendor_id')
    const searchInput = useRef(null);

    let filter = {
        start_date : dateStatistic.start_date,
        end_date : dateStatistic.end_date,
        vendor_id : dateStatistic.vendor_id,
        order_by : dateStatistic.order_by,
    }

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
            <Input
                ref={searchInput}
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys[0]}
                onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => confirm()}
                style={{
                    marginBottom: 8,
                    display: 'block',
                }}
            />
            <Space>
                <Button
                    type="primary"
                    onClick={() => confirm()}
                    icon={<SearchOutlined />}
                    size="small"
                    style={{
                    width: 90,
                    }}
                >
                    Search
                </Button>
                <Button
                    onClick={() => {
                            clearFilters && clearFilters()
                            confirm()
                        }}
                    size="small"
                    style={{
                        width: 90,
                    }}
                >
                    Reset
                </Button>
            </Space>
            </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? '#1677ff' : undefined,
            }}
          />
        ),
      });

    

    const onChange = (pagination, filters, sorter, extra) => {
        filter.vbeln = (filters.vbeln)? filters.vbeln[0] : ""
        filter.erdat = (filters.erdat)? filters.erdat[0] : ""
        filter.bldat = (filters.bldat)? filters.bldat[0] : ""
        filter.taskid = (filters.taskid)? filters.taskid[0] : ""        
        filter.sort_by = (sorter.order)? ((sorter.order === "descend")? 'desc' : 'asc') : "asc"
        filter.order_by = (sorter.column)? sorter.columnKey : ""
        filter.jenis_kirim = (filters.jenis_kirim)? filters.jenis_kirim[0] : ""
        filter.pick_location = (filters.pick_location)? filters.pick_location[0] : ""

        dispatch(filterAssignmentDate(filter))
        dispatch(updateTaskList({is_update:1}))
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
        { 
            title: 'Task ID', 
            align:'center', 
            dataIndex: 'taskid', 
            key: 'taskid', 
            fixed: 'left', 
            ...getColumnSearchProps('taskid'),
            sorter: (a, b) => a.taskid - b.taskid
        },
        { 
            title: 'DO No', 
            align:'center',
            dataIndex: 'vbeln', 
            key: 'vbeln', 
            fixed: 'left', 
            ...getColumnSearchProps('vbeln'),
            sorter: (a, b) => a.vbeln - b.vbeln
        },
        { 
            title: 'Lokasi Pickup', 
            align:'center', 
            dataIndex: 'pick_location', 
            key: 'pick_location', 
            ...getColumnSearchProps('pick_location'),
            sorter: (a, b) => a.pick_location - b.pick_location
        },        
        { 
            title: 'Tanggal Task', 
            align:'center', 
            dataIndex: 'erdat', 
            key: 'erdat', 
            ...getColumnSearchProps('erdat'),
            sorter: (a, b) => a.erdat - b.erdat},        
        { 
            title: 'Tanggal DO', 
            align:'center', 
            dataIndex: 'bldat', 
            key: 'bldat', 
            ...getColumnSearchProps('bldat'),
            sorter: (a, b) => a.bldat - b.bldat
        },
        { 
            title: 'Jenis Kirim', 
            align:'center', 
            dataIndex: 'jenis_kirim', 
            key: 'jenis_kirim', 
            ...getColumnSearchProps('jenis_kirim'),
            sorter: (a, b) => a.jenis_kirim - b.jenis_kirim
        },                
        { title: 'Ship To Name', align:'center', dataIndex: 'shipto', key: 'shipto', sorter: (a, b) => a.shipto - b.shipto},
        { title: 'Alamat Tujuan', align:'center', dataIndex: 'shipto_street', key: 'shipto_street', sorter: (a, b) => a.shipto_street - b.shipto_street},
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
                        { title: 'Tonnase', align:'center', dataIndex: 'brgew', key: 'brgew', sorter: (a, b) => a.brgew - b.brgew},
                        { title: 'Volume', align:'center', dataIndex: 'volum', key: 'volum', sorter: (a, b) => a.volum - b.volum},
                    ]
                },
                { title: 'Req Kendaraan', align:'center', dataIndex: 'vehicle_type', key: 'vehicle_type', width:180, sorter: (a, b) => a.vehicle_type - b.vehicle_type},                
            )

            if (vendorId !== '') {
                columns.push(
                    { title: 'Action', align:'center', dataIndex: 'action', key: 'action', fixed: 'right', width:170},
                )
            }

            break;
    }

    const handleClick = (values) => {        
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
            "pick_location" : obj.pick_location, 
            "bldat" : bldat[0],
            "jenis_kirim" : obj.jenis_kirim,
            "taskid" : <Link to={`/information-delivery/${obj.taskid}`}>{obj.taskid}</Link>,
            "vbeln" : obj.vbeln,
            "shipto" : obj.shipto_name,
            "shipto_street" : obj.shipto_street,
            "brgew" : obj.brgew,
            "volum" : obj.volum,
            "vehicle_type" : obj.vehicle_type,
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
                    children : <Table onChange={onChange} size="small" columns={columns} dataSource={dataset} scroll={{x: 1800}} />
                },
                {
                    label: ( <span><CheckCircleTwoTone /> Complete</span>),
                    key: 3,
                    children : <Table onChange={onChange} size="small" columns={columns} dataSource={dataset} scroll={{x: 1800}} />
                },
            ]}
        />
    )
}

export default TabMenu