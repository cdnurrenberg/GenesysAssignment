import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { StoryFeed } from './components/StoryFeed';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/components.css'

const App = () => {

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <NavBar? */}
      <StoryFeed />
    </div>
  );
}

export default App;
