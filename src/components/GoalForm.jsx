import React, { useState } from "react";

const GoalForm = ({ onSave, currentGoal }) => {
  const [goal, setGoal] = useState(currentGoal || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(goal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Meta de Horas:
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(Number(e.target.value))}
          className="ml-2 border rounded p-1"
          step=".01"
          autoFocus
          min="0"
        />
      </label>
      <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
        Guardar
      </button>
    </form>
  );
};

export default GoalForm;
