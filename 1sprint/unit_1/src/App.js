import './App.css';


const style = {
  fontSize: '24px',
  fontStyle: 'italic',
  color: 'red'
}


let text = 'test variable';

function App() {

  let text2 = '222'

  return (
    <>
      <div className="container">
        <h1 style={style}>Hello
          <img src='./images/reactBanana.jpg' alt='d' />
        </h1>
        <ul>
          <li>Hello</li>
          <li>{text + text2}</li>
        </ul>
      </div>
    </>);
}
export default App;
