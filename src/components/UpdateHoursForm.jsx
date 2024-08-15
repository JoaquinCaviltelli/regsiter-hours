import React, { useState } from "react";

const UpdateHoursForm = ({ onSave, currentHours }) => {
  // Convertir las horas actuales (decimal) a horas y minutos
  const totalMinutes = Math.round(currentHours * 60);
  const initialHours = Math.floor(totalMinutes / 60);
  const initialMinutes = totalMinutes % 60;

  const [inputHours, setInputHours] = useState(initialHours);
  const [inputMinutes, setInputMinutes] = useState(initialMinutes);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Asegurarse de que los minutos estén entre 0 y 59
    const validMinutes = Math.min(59, Math.max(0, inputMinutes));

    // Convertir horas y minutos a horas decimales
    const totalMinutes = (inputHours * 60) + validMinutes;
    const totalHours = totalMinutes / 60;

    onSave(totalHours); // Guardar en formato de horas decimales
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-center">
      <p className="text-gray-600">Total de Horas y Minutos:</p>
      <div className="flex justify-center items-center mb-4">
        <input
          type="number"
          value={inputHours}
          onChange={(e) => setInputHours(Number(e.target.value))}
          className="outline-none text-4xl w-24 rounded p-1 text-right text-gray-600 font-bold"
          min="0"
          step="1" // Incrementos de 1 hora
        />
        <span className="text-4xl mx-2">:</span>
        <input
          type="number"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(Math.min(59, Math.max(0, Number(e.target.value))))}
          className="outline-none text-4xl w-24 rounded p-1 text-center text-gray-600 font-bold"
          min="0"
          max="59" // Limitar los minutos a 59
          step="1" // Incrementos de 1 minuto
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Guardar
      </button>
    </form>
  );
};

export default UpdateHoursForm;
