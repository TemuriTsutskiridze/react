import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <img src = {logo} style = {{width: "100px", height: "100px"}}></img>
    </div>
  );
}

export function Paragraph() {
  return (
    <p className='paragraph' style = {styles.paragraph}>Paragraph</p>
  )
}

const styles = {
  paragraph: {
    color: "red",
    backgroundColor: "blue"
  }
}



export default App;
