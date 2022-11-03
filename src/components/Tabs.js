import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function TabComp() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="First" title="First">
        <h3>test</h3>
      
      </Tab>
      <Tab eventKey="Second" title="Second">
        <h3>test</h3>
   
      </Tab>
      <Tab eventKey="Third" title="Third">
        <h3>test</h3>
       
      </Tab>
    </Tabs>
  );
}

export default TabComp;