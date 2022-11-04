// import logo from "./logo.svg";
import "./App.scss";
import Meny from "./components/Meny";
import Slider from "./components/Carousel";
import TabComp from "./components/Tabs";
import AccordionComp from "./components/Accordion";
import InfoBox from "./components/InfoBox";
import Footer from "./components/Footer";
import Form from "./components/Form";
import {useState,useEffect} from 'react';


function App() {
  const [width,setWidth] = useState(window.innerWidth)

  function handleWindowSizeChange(){
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768
  return (
    <div className="App">
      <Meny></Meny>
      
        <Slider></Slider>
        <main>
        <InfoBox class="float-left"></InfoBox>

        {!isMobile &&<TabComp></TabComp>}
        {isMobile &&<AccordionComp></AccordionComp>}
      </main>

      <Form></Form>

      <Footer></Footer>

    </div>
  );
}

export default App;
