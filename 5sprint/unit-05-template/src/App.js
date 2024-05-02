import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [st1, setOutput] = useState();
  const [st2, setState] = useState(0);
  const [st3, setValue] = useState('');
  const [st4, setState2] = useState(0);
  const [st5, setCheck] = useState('');
  const [st6, setOption] = useState();
  const [st7, setColor] = useState();
  const [st8, setInputs] = useState(0);
  const [st9, setRange] = useState(0);
  const [st10, setArr] = useState('');

  function task1() {
    let out = document.querySelector('input').value;
    setOutput(out)

  }
  function task2() {
    let currentState = st2;
    currentState++
    setState(currentState)
  }
  function task3(event) {
    let out = event.target.value;
    setValue(out);

  }
  function task4() {
    let num = st4;
    num++;
    setState2(num)
  }
  function task5(event) {
    let data = event.target.checked;
    if (data == true) {
      setCheck(event.target.getAttribute('currentValue'))
    } else {
      setCheck(0)
    }

  }
  function task6() {
    let value = document.querySelector('.task-6').value;
    setOption(value);
  }
  function task7(event) {
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let color = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
    setColor(color);

  }

  function task8(event) {
    const char = event.nativeEvent.data;
    console.log(!isNaN(char))
    const isDigit = !isNaN(char) && char !== ' ';

    setInputs(prevOutput => prevOutput + (isDigit ? '1' : '0'))
  }
  function task9() {
    let outRange = document.querySelector('.task-9').value;
    setRange(outRange)
  }
  let ar10 = [5, 6, 7];
  function task10() {
    let out = document.querySelector('.i-10').value;
    ar10.push(out);
    setArr(ar10)


  }

  return (
    <>
      {/* <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" />
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section> */}
      {/* <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section> */}
      {/* <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section> */}
      {/* <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section> */}
      {/* <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} />
        <div>{st5}</div>
      </section> */}
      {/* <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section> */}
      {/* <section>
        <h2>Task 7</h2>
        <div className="block-7" style={{ backgroundColor: st7 }} ></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section > */}
      {/* <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onInput={task8}></input>
        <div>{st8}</div>
      </section> */}
      {/* <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onChange={task9}></input>
        <div>{st9}</div>
      </section> */}
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
