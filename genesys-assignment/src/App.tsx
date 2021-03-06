import React from 'react';
import { StoryFeed } from './components/StoryFeed';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/components.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <StoryFeed />
      <Footer />
    </div>
  );
}

export default App;
