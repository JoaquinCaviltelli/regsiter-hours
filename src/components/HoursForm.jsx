import React, { useState } from "react";

const HoursForm = ({ onSave, currentHours }) => {
  // Convertir las horas actuales (decimal) al formato de tiempo HH:MM
  const hours = Math.floor(currentHours);
  const minutes = Math.round((currentHours - hours) * 60);
  const initialTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  const [time, setTime] = useState(initialTime);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convertir el tiempo (HH:MM) a horas decimales
    const [hours, minutes] = time.split(":").map(Number);
    const totalHours = hours + minutes / 60;

    onSave(totalHours);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Horas:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="ml-2 border rounded p-1"
          step="300" // Incremento de 5 minutos
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
