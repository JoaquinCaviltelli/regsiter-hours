import { useState } from 'react';

const GoalForm = ({ goal, onSubmit }) => {
  const [newGoal, setNewGoal] = useState(goal);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newGoal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
        className="border p-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 ml-2">Save</button>
    </form>
  );
};

export default GoalForm;
