// App.tsx
import React from 'react';
import CharacterPage from './pages/CharacterPage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
import { Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div className="h-100 bg-cyan-950">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterPage />} />
        </Routes>
      </div>
      <Home />
    </div>
  );
}

export default App;
