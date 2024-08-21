import { useState } from 'react';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css'; // Importa el archivo CSS para los estilos predeterminados

const ActivityForm = ({ onSubmit }) => {
  const today = new Date();
  const [dateTime, setDateTime] = useState(today);
  const [id, setId] = useState(Date.now());

  const handleSubmit = (e) => {
    e.preventDefault();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const date = dateTime.toISOString().split('T')[0];

    onSubmit({
      id,
      hours,
      minutes,
      date
    });
    setDateTime(today);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded-lg shadow-lg bg-white">
      <div className="mb-4">
        <label className="block text-gray-700">Date and Time:</label>
        <DateTime
          value={dateTime}
          onChange={setDateTime}
          dateFormat="YYYY-MM-DD"
          timeFormat="HH:mm"
          className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-150 ease-in-out"
      >
        Add
      </button>
    </form>
  );
};

export default ActivityForm;
