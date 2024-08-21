import { useState } from 'react';

const ActivityForm = ({ onSubmit }) => {
  const today = new Date().toISOString().split('T')[0];
  const [time, setTime] = useState('00:00');
  const [date, setDate] = useState(today);
  const [id, setId] = useState(Date.now());

  const handleSubmit = (e) => {
    e.preventDefault();
    const [hours, minutes] = time.split(':').map(Number);
    onSubmit({
      id,
      hours,
      minutes,
      date
    });
    setTime('00:00');
    setDate(today);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded-lg shadow-lg bg-white">
      <div className="mb-4">
        <label className="block text-gray-700">Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
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
