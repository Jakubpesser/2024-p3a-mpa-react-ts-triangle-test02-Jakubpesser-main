import './App.css';
import Triangle from './components/Triangle';
import {useState} from 'react';
import TriangleForm from './components/TriangleForm';
import TriangleInfo from './components/TriangleInfo';
import TriangleInput from './components/TriangleInput';


function App() {


  return (
    <>
      {/* todo */}

      <div className="triangle">
        <Triangle a={20} b={30} c={35} fillColor={"#A06496"} />
      </div>
    </>
  )
}

export default App;

