// src/components/DailyHoursRequirement.jsx
import React from 'react';

const DailyHoursRequirement = ({ totalHours, goalHours }) => {
  // Fecha actual
  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const currentDay = today.getDate();
  const daysRemaining = daysInMonth - currentDay;

  // Cálculo de horas diarias necesarias
  const hoursRemaining = Math.max(goalHours - totalHours, 0);
  const hoursPerDay = daysRemaining > 0 ? (hoursRemaining / daysRemaining).toFixed(2) : 0;

  return (
    <p className="text-center text-md text-gray-700 mt-2">
      Horas diarias necesarias para alcanzar la meta: {hoursPerDay} hs
    </p>
  );
};

export default DailyHoursRequirement;
