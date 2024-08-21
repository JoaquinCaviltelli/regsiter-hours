import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setToLocalStorage } from '../localStorageUtils';

const StartPage = () => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    setToLocalStorage('userName', name);
    setToLocalStorage('monthlyGoal', goal);
    navigate('/home');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome! Please set your name and monthly goal</h1>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mt-2 block w-full"
      />
      <input
        type="number"
        placeholder="Monthly Goal (hours)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="border p-2 mt-2 block w-full"
      />
      <button onClick={handleStart} className="bg-blue-500 text-white p-2 mt-4">Start</button>
    </div>
  );
};

export default StartPage;
