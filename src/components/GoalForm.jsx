import { useState } from 'react';

<<<<<<< HEAD
const GoalForm = ({ goal, onSubmit }) => {
  const [newGoal, setNewGoal] = useState(goal);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newGoal);
=======
const GoalForm = ({ onSave, currentGoal }) => {
  const [goal, setGoal] = useState(currentGoal || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(goal);
>>>>>>> parent of e6b08b2 (n)
  };

  return (
    <form onSubmit={handleSubmit}>
<<<<<<< HEAD
      <input
        type="number"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
        className="border p-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 ml-2">Save</button>
=======
      <label>
        Meta de Horas:
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(Number(e.target.value))}
          className="ml-2 border rounded p-1"
          step=".01"
          autoFocus
          min="0"
        />
      </label>
      <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
        Guardar
      </button>
>>>>>>> parent of e6b08b2 (n)
    </form>
  );
};

export default GoalForm;
