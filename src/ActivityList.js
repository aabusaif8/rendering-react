import React from 'react';
import Activity from './Activity'; // Import the Activity component
import './ActivityList.css'
function ActivityList({ activities }) {
  return (
    <div className="activity-list">
      <h2>Daily Schedule</h2>
      {activities.map((activity, index) => (
        <Activity
          key={index}
          time={activity.time}
          description={activity.description}
        />
      ))}
    </div>
  );
}

export default ActivityList;