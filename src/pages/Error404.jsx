import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Button, Result } from 'antd';

const Error404 = () => {
    const error = useRouteError()

    return (
        <Result
            status="404"
            title="404"
            subTitle={error.statusText || error.message}
            extra={<Button type="primary">Back Home</Button>}
        />
    )
}

export default Error404