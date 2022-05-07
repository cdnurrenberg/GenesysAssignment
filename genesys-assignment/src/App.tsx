import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { StoryFeed } from './components/StoryFeed';

function App() {

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <NavBar? */}
      <StoryFeed />
    </div>
  );
}

export default App;
