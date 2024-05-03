import './App.css';
import React from 'react';

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


  const valueItem = React.createRef();


  function handler() {
    let out = valueItem.current.value;
    console.log(out)

    if (out !== '') {
      console.log('work')

      let li = React.createElement('li', {}, out);
      let listItem = document.querySelector('.list');
      listItem.append(li.props.children)
    }
  }
  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      <input type="text" className='i-7' ref={valueItem} />
      <button onClick={handler}></button>
      <ul className='list'>

      </ul>
    </>);

}

export default App;
