import './App.css';
import React, { createRef } from 'react';
import { useState } from 'react';



function App() {
  let count4 = 0;

  let optionValue = React.createRef();

  const [output, setOutput] = useState('');
  const [output2, setOutput2] = useState('');

  let blockRef = React.createRef();
  const [color, setBackgroundColor] = useState();

  let block8Ref = React.createRef();

  let rangeRef = React.createRef();
  const [output3, setOutput3] = useState('');

  let arRef = React.createRef()




  function task1() {
    console.log('task2')
  }
  function task2() {
    document.querySelector('.task-2').classList.add('active');
  }
  function task3(event) {
    console.log(event.target.value)
  }
  function task4() {
    count4++;
    console.log(count4)
  }
  function task5(event) {
    console.log(event.target.currentValue)
    if (event.target.checked == true) {
      document.querySelector('.out-5').innerHTML = event.target.getAttribute('currentValue');
    } else {
      document.querySelector('.out-5').innerHTML = 0
    }

  }
  function task6() {
    console.log(optionValue.current.value)
    setOutput(optionValue.current.value)

  }
  function task7() {
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let color = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
    setBackgroundColor(color);

    blockRef.current.style.backgroundColor = color;
  }
  let out = ''

  function task8() {
    let value = block8Ref.current.value;
    if (!isNaN(value)) {
      out += '1';
    } else {
      out += '0';
    }
    setOutput2(out)
  }
  function task9() {
    let res = rangeRef.current.value
    setOutput3(res)
  }
  let ar10 = [5, 6, 7];
  function task10() {
    let i = +document.querySelector('.i-10').value;
    ar10.push(i);
    console.log(ar10)
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} />
        <div className="out-5" ></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select ref={optionValue} className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6" >{output}</div>

      </section>
      <section>
        <h2>Task 7</h2>
        <div ref={blockRef} className="block-7"></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section >
      <section>
        <h2>Task 8</h2>
        <input ref={block8Ref} type="text" className="task-8" onKeyPress={task8}></input>
        <div className="out-8">{output2}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input ref={rangeRef} type="range" className="task-9" onInput={task9}></input>
        <div className="out-9">{output3}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input ref={arRef} type="number" className="i-10" onClick={task10}></input>
        <button className="task-10">Push</button>
      </section>
    </>
  );
}

export default App;
