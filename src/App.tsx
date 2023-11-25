// App.tsx
import React from 'react';
import CharacterPage from './pages/CharacterPage';
import Navbar from './components/Navbar';

function App(): JSX.Element {
  return (
    <div className="h-100 bg-cyan-950">
      <Navbar />
      <CharacterPage />
    </div>
  );
}

export default App;
