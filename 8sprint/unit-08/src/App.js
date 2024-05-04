import './App.css';
import React, { useState } from 'react';

function App() {
  const h1 = React.createElement('h1', {}, 'unit_08')
  const h2 = React.createElement(
    'h2',
    {
      className: 'text-orange'
    },
    'Header 2'
  )

  const p = React.createElement(
    'p',
    {
      style: {
        'color': 'red'
      }
    },
    'this is p'
  )

  const input = React.createElement('input', { value: 55 });

  const p1 = React.createElement('p', {}, 'Hi');
  const p2 = React.createElement('p', {}, 'World');
  const div = React.createElement('div',
    {
      className: 'text-grey',
    }, p1, p2);


  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      // Создаем новый элемент li и добавляем его к текущему списку элементов
      setListItems(prevListItems => [...prevListItems, inputText]);
      // Очищаем значение инпута
      setInputText('');
    }
  };


  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddItem}>Добавить</button>
      <ul>
        {/* При каждом обновлении списка элементов создаем новый элемент li */}
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>);

}

export default App;

