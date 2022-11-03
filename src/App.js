import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Meny from './components/Meny';
import Slider  from './components/Carousel';



function App() {
  return (

    <div className="App">
      <Meny></Meny>
      <main>
      <Slider></Slider>
      <h3>HALLO </h3>
      <p>noe info her</p>
      </main>
      <header className="App-header">






        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

        </p>
        <Alert variant="danger">
          This is a  alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
 
   

    </div>
  );
}

export default App;

