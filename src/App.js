import logo from './logo.svg';
import './App.css';
import Meny from './components/Meny';
import Slider  from './components/Carousel';
import TabComp  from './components/Tabs';
import AccordionComp  from './components/Accordion';
import InfoBox  from './components/InfoBox';






function App() {
  return (

    <div className="App">
      <Meny></Meny>
      <main>
      <Slider></Slider>
      <InfoBox></InfoBox>

      </main>
      <TabComp></TabComp>
      <AccordionComp></AccordionComp>


      <header className="App-header">






        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

        </p>

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

