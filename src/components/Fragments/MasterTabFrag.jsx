import React from 'react'
import { Space, Table } from 'antd';

const MasterTabLayout = (props) => {
    const {children} = props
    return (
        <>
            {children}
        </>
    )
}

const Header = (props) => {
    const {children} = props
    return (
        <Space wrap style={{float:'left', marginBottom:'16px'}}>
            <h2>{children}</h2>
        </Space>
    )
}

const Body = (props) => {
    const {children} = props
    return (
        <Space wrap style={{float:'right', marginBottom:'16px'}}>
            {children}
        </Space>
    )
}

const Footer = (props) => {
    const {datacolumns, data} = props
    return (
        <Table columns={datacolumns} dataSource={data} size='small' />
    )
}

MasterTabLayout.Header = Header
MasterTabLayout.Body = Body
MasterTabLayout.Footer = Footer

export default MasterTabLayout