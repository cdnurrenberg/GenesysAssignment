import React, { useEffect, useState } from 'react';
import { StoryFeed } from './components/StoryFeed';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/components.css'
import { Header } from './components/Header';

const App = () => {

  return (
    <div className="App">
      <Header />
      {/* <NavBar? */}
      <StoryFeed />
    </div>
  );
}

export default App;
