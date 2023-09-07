import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error404 = () => {
    const error = useRouteError()

    return (
        <div>
            <h1>Oops!</h1>
            <p>
                Sorry, an unexpected error occur !
            </p>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    )
}

export default Error404