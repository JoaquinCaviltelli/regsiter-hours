import { useState } from 'react';

const Modal = ({ type, activity, onClose, onSubmit }) => {
  const [hours, setHours] = useState(activity ? activity.hours : '');
  const [date, setDate] = useState(activity ? activity.date : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...activity, hours, date });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <h2 className="text-lg font-bold">{type === 'edit' ? 'Edit Activity' : 'Add Activity'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="border p-2 mb-2"
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 mb-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 mr-2">Save</button>
          <button type="button" onClick={onClose} className="bg-gray-500 text-white p-2">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
