import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import StartPage from './pages/StartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
