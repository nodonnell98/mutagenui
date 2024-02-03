// App.tsx
import React from 'react';
import CharacterPage from './pages/CharacterPage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Rules from './pages/Rules';
import Strikey from './pages/Strikey';
import { Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div className="h-100" style={{backgroundColor: '#233039'}}>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/strikey" element={<Strikey />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
