import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import StartPage from './pages/StartPage';

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<StartPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/settings" element={<SettingsPage />} />
  </Routes>
);

export default RoutesConfig;
