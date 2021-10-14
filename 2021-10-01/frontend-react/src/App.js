import { useState } from "react"
import './App.css';
import Fun from './components/Fun';
import Greeting from './components/Greeting';
import TestComponent from "./components/TestComponent";

function App() {
  const [magicNumber,setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)
  const [show2,setShow2] = useState(false)
  

  return (
    <>
      { show && <h1>{ magicNumber }</h1> }
      {show2 && <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber}
        show={show}
        setShow={setShow}
      />}
      {show2 &&
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={5}
        show={show}
        setShow={setShow}
      />}
      {show2 && <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={25}
        show={show}
        setShow={setShow}
      />}
      {show2 &&
      <Greeting name="Johan" age="??"/>
    }
    <TestComponent
      number={5}
      show2={show2}
      setShow2={setShow2}
    />
    </>
  );
}

export default App;
