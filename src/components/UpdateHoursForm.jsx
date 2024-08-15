// src/components/UpdateHoursForm.jsx
import React, { useState } from "react";

const UpdateHoursForm = ({ onSave, currentHours }) => {
  const [hours, setHours] = useState(currentHours || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(hours);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Total de Horas:
        <input
          type="text"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
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

export default UpdateHoursForm;
