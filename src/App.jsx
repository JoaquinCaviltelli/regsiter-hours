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

  return (
    <div className="p-4 max-w-96 m-auto">
      <p className="pt-4 text-lg text-gray-600 font-bold text-center">
        {formattedDate}
      </p>

      
      <HoursChart
        setIsUpdateHoursModalOpen={setIsUpdateHoursModalOpen}
        totalHours={totalHours}
        goalHours={goalHours}
      />
      <div className="text-end px-4 flex flex-row justify-between relative -top-2">
        <span
          onClick={() => setIsGoalModalOpen(true)}
          className="material-symbols-outlined cursor-pointer text-4xl text-gray-600 font-semibold"
        >
          target
        </span>
        <span
          onClick={() => setIsHoursModalOpen(true)}
          className="material-symbols-outlined cursor-pointer text-4xl text-gray-600 font-semibold"
        >
          more_time
        </span>
      </div>
      <DailyHoursRequirement totalHours={totalHours} goalHours={goalHours} /> {/* Usar el nuevo componente */}

      <Modal
        isOpen={isHoursModalOpen}
        onClose={() => setIsHoursModalOpen(false)}
      >
        <HoursForm onSave={handleAddHours} />
      </Modal>
      <Modal isOpen={isGoalModalOpen} onClose={() => setIsGoalModalOpen(false)}>
        <GoalForm onSave={handleSetGoal} currentGoal={goalHours} />
      </Modal>
      <Modal
        isOpen={isUpdateHoursModalOpen}
        onClose={() => setIsUpdateHoursModalOpen(false)}
      >
        <UpdateHoursForm
          onSave={handleUpdateTotalHours}
          currentHours={totalHours}
        />
      </Modal>
    </div>
  );
};

export default App;
