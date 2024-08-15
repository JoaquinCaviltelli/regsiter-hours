import React, { useState } from "react";

const HoursForm = ({ onSave, currentHours }) => {
  const [hours, setHours] = useState(currentHours || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(hours);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Horas:
        <input
          type="text"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="ml-2 border rounded p-1"
          min="0"
          step=".01"
          autoFocus
        />
      </label>
      <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
        Guardar
      </button>
    </form>
  );
};

export default HoursForm;
