import React,{ useState } from 'react'
import { Layout } from 'antd';
import ContentFrag from '../Fragments/ContentFrag';
import Foot from '../Elements/Footer/Foot';
import SidebarFrag from '../Fragments/SidebarFrag';
import HeaderFrag from '../Fragments/HeaderFrag';

const ContentLayout = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {children, current_page} = props
    
    const handleCollapseTrigger = (dataFromChild) => {
        setCollapsed(dataFromChild);
    };

    return (
        <Layout hasSider={true} style={{ minHeight: '100vh' }}>
            <SidebarFrag collapsed = {collapsed}></SidebarFrag>
            <Layout>
                <HeaderFrag current_page={current_page} collapseTrigger ={handleCollapseTrigger}></HeaderFrag>                
                <ContentFrag path={current_page}>{children}</ContentFrag>
                <Foot></Foot>
            </Layout>
        </Layout>
    )
}

export default ContentLayout