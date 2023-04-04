import React, { useState } from 'react';
import ListForm from './components/ListForm';
import Navbar from './components/Navbar';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className='col text-center'>
        <ListForm />
      </div>
    </div>
  );
}

export default App;
