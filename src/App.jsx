<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import StartPage from './pages/StartPage';
=======
import React, { useState, useEffect } from "react";
import HoursChart from "./components/HoursChart";
import HoursForm from "./components/HoursForm";
import GoalForm from "./components/GoalForm";
import UpdateHoursForm from "./components/UpdateHoursForm";
import Modal from "./components/Modal";
import DailyHoursRequirement from "./components/DailyHoursRequirement"; // Importar el nuevo componente
import { saveToLocalStorage, getFromLocalStorage } from "./utils/localStorage";

// Función para formatear la fecha
const formatDate = (date) => {
  const options = { month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

const App = () => {
  const [totalHours, setTotalHours] = useState(
    getFromLocalStorage("totalHours", 0)
  );
  const [goalHours, setGoalHours] = useState(
    getFromLocalStorage("goalHours", 100)
  );
  const [isHoursModalOpen, setIsHoursModalOpen] = useState(false);
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
  const [isUpdateHoursModalOpen, setIsUpdateHoursModalOpen] = useState(false);

  useEffect(() => {
    saveToLocalStorage("totalHours", totalHours);
  }, [totalHours]);

  useEffect(() => {
    saveToLocalStorage("goalHours", goalHours);
  }, [goalHours]);

  const handleAddHours = (hours) => {
    setTotalHours(totalHours + hours);
    setIsHoursModalOpen(false);
  };

  const handleSetGoal = (goal) => {
    setGoalHours(goal);
    setIsGoalModalOpen(false);
  };

  const handleUpdateTotalHours = (hours) => {
    setTotalHours(hours);
    setIsUpdateHoursModalOpen(false);
  };

  // Fecha actual
  const today = new Date();
  const formattedDate = formatDate(today);
>>>>>>> parent of e6b08b2 (n)

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
