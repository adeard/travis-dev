import React from 'react'
import { Table } from 'antd';

const TableElement = (props) => {
    const {columns, dataSource} = props
    return (
        <Table columns={columns} dataSource={dataSource} />
    )
}

export default TableElement