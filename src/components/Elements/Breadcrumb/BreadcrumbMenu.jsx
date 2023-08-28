import React from 'react'
import { Breadcrumb } from 'antd';

export default function BreadcrumbMenu(props) {
    const { path } = props
    let item = []
    switch (path) {
        case "home":
        case "assignment":
        case "master":
        case "information delivery":
            item = [
                { title : path.replace(/(?<= )[^\s]|^./g, a=>a.toUpperCase())}
            ]
            break;        
        default:
            break;
    }
  return (
    <Breadcrumb style={{ margin: '16px 0' }} items={item}></Breadcrumb>
  )
}
