import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import AssignmentPage from './pages/AssignmentPage';
import InformationDeliveryPage from './pages/InformationDeliveryPage';
import Master from './components/MasterPage/Master';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
        <BrowserRouter>      
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/auth/login' Component={LoginPage} />
            <Route path='/assignment' Component={AssignmentPage} />
            <Route path='/information-delivery' Component={InformationDeliveryPage} />
            <Route path='/master' Component={Master} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
