import React, { useState } from 'react';
import './App.css';
import Indicator from './components/Indicator';
import CardWrapper from './components/CardWrapper';

function App() {
  const [steps, setSteps] = useState(0);
  return (
    <main className="App">
      <section className='app__container'>
        <h2 className='app__head-title'>Eden</h2>
        <Indicator stepsLength={4} completedTill={2} />
        <CardWrapper >
          Hi there
        </CardWrapper>
      </section>
    </main>
  );
}

export default App;
