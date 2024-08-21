import { useState, useEffect } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../localStorageUtils';
import GoalForm from '../components/GoalForm';

const SettingsPage = () => {
  const [goal, setGoal] = useState('');

  useEffect(() => {
    const storedGoal = getFromLocalStorage('monthlyGoal');
    setGoal(storedGoal || '');
  }, []);

  const handleGoalChange = (newGoal) => {
    setToLocalStorage('monthlyGoal', newGoal);
    setGoal(newGoal);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Settings</h1>
      <GoalForm goal={goal} onSubmit={handleGoalChange} />
    </div>
  );
};

export default SettingsPage;
