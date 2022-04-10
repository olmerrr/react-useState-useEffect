import React, { useState } from 'react';
import {Clicker} from './Clicker'
import  './App.css';

export default function App() {
  const [isCliker, setClicker] = useState(false);

  return (
    <div className='container'>
        <button 
        className='btn btn-big'
        onClick={() => setClicker(!isCliker)}
        >Toggle Clicker
        </button> 
        
        {isCliker && <Clicker/>}
        
    </div>
  );
}
