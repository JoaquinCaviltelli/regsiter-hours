const ActivityList = ({ activities, onEdit, onDelete }) => {
    // Ordenar las actividades por fecha (de más reciente a más antiguo)
    const sortedActivities = [...activities].sort((a, b) => new Date(b.date) - new Date(a.date));
  
    return (
      <div>
        <h2 className="text-lg font-bold">Activity List</h2>
        <ul>
          {sortedActivities.map(activity => (
            <li key={activity.id} className="mb-2">
              <span>{activity.date}: {activity.hours} hours</span>
              <button onClick={() => onEdit('edit', activity)} className="bg-yellow-500 text-white p-1 ml-2">Edit</button>
              <button onClick={() => onDelete(activity.id)} className="bg-red-500 text-white p-1 ml-2">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ActivityList;
  