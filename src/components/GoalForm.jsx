import React, { useState } from "react";

const GoalForm = ({ onSave, currentGoal }) => {
  const [hours, setHours] = useState(currentGoal);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(Number(hours));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Meta de Horas:
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="ml-2 border rounded p-1"
          min="0"
          autoFocus
        />
      </label>
      <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
        Guardar
      </button>
    </form>
  );
};

export default GoalForm;
