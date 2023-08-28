import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import AssignmentPage from './pages/AssignmentPage';
import InformationDeliveryPage from './pages/InformationDeliveryPage';
import HomePage from './pages/HomePage';
import MasterPage from './pages/MasterPage';

function App() {
  return (
    <div>
        <BrowserRouter basename='/Travis'>      
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/auth/login' Component={LoginPage} />
            <Route path='/assignment' Component={AssignmentPage} />
            <Route path='/information-delivery' Component={InformationDeliveryPage} />
            <Route path='/master' Component={MasterPage} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
