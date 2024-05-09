import { json } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';



function App() {
  const [T1, setT1] = useState();
  const [T2, setT2] = useState();
  const [T3, setT3] = useState();
  const [T4, setT4] = useState();
  const [T5, setT5] = useState([]);

  function task1() {
    fetch('http://murvat.com/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 1 }),
    })
      .then(response => response.text())
      .then(response => {
        console.log(response);
        setT1(response);
      })

  }

  function task2(event) {
    event.preventDefault();

    // Retrieving values from the form fields
    let num1 = event.target.elements.num1.value;
    let num2 = event.target.elements.num2.value;
    fetch('http://murvat.com/api.php', {
      method: 'POST',
      body: JSON.stringify({
        action: 2,
        num1: num1,
        num2: num2
      })

    })
      .then(response => response.text())
      .then(response => {
        console.log(response);
        setT2(response);
      })

  }

  function task3(event) {
    event.preventDefault();
    let filename = event.target.elements.filename.value;
    let filedata = event.target.elements.filedata.value

    let bodyData = JSON.stringify({
      action: 3,
      filename: filename,
      filedata: filedata
    });

    fetch('http://murvat.com/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: bodyData
    })
      .then(response => response.text())
      .then(response => {
        console.log(response);
        if (response > 0) {
          setT3(response)
        }
      })

  }

  function task4(event) {
    event.preventDefault();

    fetch('http://murvat.com/api.php', {
      method: 'POST',
      body: JSON.stringify({ action: 4 })
    })
      .then(response => response.text())
      .then(response => setT4(response))
  }

  function task5(event) {


    fetch('http://murvat.com/api.php', {
      method: 'POST',
      body: JSON.stringify({ action: 5 })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setT5(response);
      })
  };

  useEffect(() => {
    task5();
  }, []);


  return (
    <div>
      <h1>ItGid.info</h1>
      {/* <p>{text}</p> */}
      <hr />
      <div>
        <h2>Время сервера</h2>
        <button onClick={task1}>GET</button>
        <p>{T1}</p>
      </div>
      <hr />
      <div>
        <h2>Случайное число между</h2>
        <form action="" onSubmit={task2}>
          <div><input type="number" name="num1" defaultValue="30" /></div>
          <div><input type="number" name="num2" defaultValue="44" /></div>
          <button type="sumbit">Push</button>
        </form>
        <p>{T2}</p>
      </div>
      <hr />
      <div>
        <h2>Создание файла</h2>
        <form action="" onSubmit={task3}>
          <div><input type="text" name="filename" /></div>
          <div><input type="text" name="filedata" /></div>
          <button type="sumbit">Push</button>
        </form>
        <p>
          {T3 !== false ? (
            <a href="http://murvat.com/download_file">Download File</a>
          ) : (
            null
          )}</p>
      </div>
      <hr />
      <div>
        <h2>Получение данных компьютера</h2>
        <form action="" onSubmit={task4}>
          <button type="sumbit">Push</button>
        </form>
        <p>{T4}</p>
      </div>
      <hr />
      <div>
        <h2>Получение курса валют</h2>
        <form action="" onSubmit={task5}>
          <button type="sumbit">Push</button>
        </form>
        <ul>
          {T5.map(item => (
            <li key={item.currency}>{item.ccy} - {item.buy}</li>
          ))}        </ul>
      </div>
    </div>
  );
}

export default App;
