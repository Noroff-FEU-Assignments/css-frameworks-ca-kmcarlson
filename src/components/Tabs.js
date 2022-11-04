import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function TabComp() {
  return (
    <Tabs
      defaultActiveKey="First"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="First" title="First">
        <img src={require("../images/tab/tab-1.jpg")}></img>
        <p>
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
          venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
          ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
          condimentum mattis rhoncus.{" "}
        </p>
      </Tab>
      <Tab eventKey="Second" title="Second">
        <img src={require("../images/tab/tab-2.jpg")}></img>
        <p>
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
          venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
          ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
          condimentum mattis rhoncus.{" "}
        </p>
      </Tab>
      <Tab eventKey="Third" title="Third">
        <img src={require("../images/tab/tab-3.jpg")}></img>
        <p>
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
          venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
          ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
          condimentum mattis rhoncus.{" "}
        </p>
      </Tab>
    </Tabs>
  );
}

export default TabComp;
