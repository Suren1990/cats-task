import React from 'react';
import Header from './components/Header/Header';
import './globals.scss';
import Routing from './Routing';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='container'>
        <Routing />
      </main>
    </div>
  );
}

export default App;
