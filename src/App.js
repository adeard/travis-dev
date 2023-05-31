import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import Home from './components/Home';
import Assignment from './components/AssignmentPage/Assignment';
import Foot from './components/Footer';
import Head from './components/Header';
import { Layout, theme } from 'antd';
import BreadcrumbMenu from './components/BreadcrumbMenu';
import InformationDelivery from './components/AssignmentPage/InformationDelivery';
import Master from './components/MasterPage/Master';

const { Content } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    <div>
      <Head />
      <Layout className="layout">
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <BreadcrumbMenu />
        <div
            className="site-layout-content"
            style={{
              padding: 24,
              minHeight: 500,
              background: colorBgContainer,
            }}
          >
        <BrowserRouter>      
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/auth/login' Component={LoginPage} />
            <Route path='/assignment' Component={Assignment} />
            <Route path='/information-delivery' Component={InformationDelivery} />
            <Route path='/master' Component={Master} />
          </Routes>
        </BrowserRouter>
        </div>
      </Content>
      </Layout>
      <Foot />
    </div>
  );
}

export default App;
