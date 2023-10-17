import React from 'react'
import { Table } from 'antd';

const TableElement = (props) => {
    const {columns, dataSource} = props
    return (
        <Table size="small" columns={columns} dataSource={dataSource} scroll={{
            x: 1300,
          }} />
    )
}

export default TableElement