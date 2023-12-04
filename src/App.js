import React from 'react';
import Header from './Header';
import HobbyList from './HobbyList';
import ActivityList from './ActivityList';

function App() {
  // Define your data here (name, imageSrc, birthday, hobbies, and activities)
  const name = 'Kitten Name';
  const imageSrc = './';
  const birthday = 'January 1, 2023';
  const hobbies = ['Watching birds', 'Napping', 'Playing with yarn'];
  const activities = [
    { time: '8:00 am', description: 'Wake up' },
    { time: '9:00 am', description: 'Playtime' },
    // Add more activity objects as needed
  ];

  return (
    <div className="app">
      <Header name={name} imageSrc={imageSrc} birthday={birthday} />
      <HobbyList hobbies={hobbies} />
      <ActivityList activities={activities} />
    </div>
  );
}

export default App;