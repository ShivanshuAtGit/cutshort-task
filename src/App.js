import React, { useState } from 'react';
import './App.css';
import Indicator from './components/Indicator';

function App() {
  const [steps, setSteps] = useState(0);
  return (
    <main className="App">
      <section className='app__container'>
        <h2>Eden</h2>
        <Indicator stepsLength={4} completedTill={2} />
      </section>
    </main>
  );
}

export default App;
