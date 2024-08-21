import { useState, useEffect } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../localStorageUtils';
import ActivityForm from '../components/ActivityForm';
import ActivityList from '../components/ActivityList';
import Modal from '../components/Modal';

const HomePage = () => {
  const [activities, setActivities] = useState([]);
  const [goal, setGoal] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [currentActivity, setCurrentActivity] = useState(null);

  useEffect(() => {
    // Load stored activities and goal
    const storedActivities = getFromLocalStorage('activities') || [];
    setActivities(storedActivities);

    const storedGoal = getFromLocalStorage('monthlyGoal');
    setGoal(storedGoal || 0);
  }, []);

  const addActivity = (activity) => {
    const updatedActivities = [...activities, activity];
    setToLocalStorage('activities', updatedActivities);
    setActivities(updatedActivities);
  };

  const editActivity = (updatedActivity) => {
    const updatedActivities = activities.map(activity =>
      activity.id === updatedActivity.id ? updatedActivity : activity
    );
    setToLocalStorage('activities', updatedActivities);
    setActivities(updatedActivities);
  };

  const deleteActivity = (id) => {
    const updatedActivities = activities.filter(activity => activity.id !== id);
    setToLocalStorage('activities', updatedActivities);
    setActivities(updatedActivities);
  };

  const handleOpenModal = (type, activity = null) => {
    setModalType(type);
    setCurrentActivity(activity);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Convert hours and minutes to total minutes
  const timeToMinutes = (hours, minutes) => {
    return hours * 60 + minutes;
  };

  // Calculate total hours from activities
  const calculateTotalHours = (activities) => {
    const totalMinutes = activities.reduce((sum, activity) => {
      return sum + timeToMinutes(activity.hours, activity.minutes);
    }, 0);
    const totalHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;
    return { hours: totalHours, minutes: remainingMinutes };
  };

  // Calculate the total time and remaining goal
  const totalTime = calculateTotalHours(activities);
  const goalMinutes = goal * 60;
  const totalMinutes = totalTime.hours * 60 + totalTime.minutes;
  const remainingGoalMinutes = goalMinutes - totalMinutes;
  const remainingGoalHours = Math.floor(remainingGoalMinutes / 60);
  const remainingGoalMinutesDisplay = remainingGoalMinutes % 60;

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-xl font-bold">Monthly Goal</h1>
        <p className="text-lg">Goal: {goal} hours</p>
        <p className="text-lg">Hours Completed: {totalTime.hours} hours {totalTime.minutes} minutes</p>
        <p className="text-lg">Remaining Goal: {remainingGoalHours} hours {remainingGoalMinutesDisplay} minutes</p>
      </div>
      <ActivityForm onSubmit={addActivity} />
      <ActivityList
        activities={activities}
        onEdit={handleOpenModal}
        onDelete={deleteActivity}
      />
      {modalOpen && (
        <Modal
          type={modalType}
          activity={currentActivity}
          onClose={handleCloseModal}
          onSubmit={modalType === 'edit' ? editActivity : addActivity}
        />
      )}
    </div>
  );
};

export default HomePage;
