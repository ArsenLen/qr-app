import './App.css';
import { Routes, Route } from 'react-router-dom'
import VisitPage from './pages/VisitPage/VisitPage';
import Checkin from './pages/QRCodePage/QRCode'
import Header from './components/Header/Header';
import SuccessPage from './pages/CheckinPage/CheckinPage';
import QRCode from './pages/QRCodePage/QRCode';
import Register from './pages/Register/Register';
import CheckinPage from './pages/CheckinPage/CheckinPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/visitpage" element={<VisitPage />} />
        <Route path="/qrcode" element={<QRCode />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkin" element={<CheckinPage />} />
      </Routes>
    </div>
  );
}

export default App;
