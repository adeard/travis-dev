import React from 'react'
import { Button } from 'antd';

const ButtonElement = (props) => {

    const {children, type = "primary", htmlType = "submit"} = props
    return (
        <Button type={type} htmlType={htmlType}>
            {children}
        </Button>
    )
}

export default ButtonElement