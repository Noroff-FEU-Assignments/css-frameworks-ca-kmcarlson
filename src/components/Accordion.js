import Accordion from "react-bootstrap/Accordion";

function AccordionComp() {
  return (
    <Accordion defaultActiveKey="0"  flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="accordionHeader">First</Accordion.Header>
        <Accordion.Body className="accordionBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <img className="accordionImg" src={require("../images/tab/tab-1.jpg")}></img>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="accordionHeader">Second</Accordion.Header>
        <Accordion.Body className="accordionBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <img className="accordionImg" src={require("../images/tab/tab-2.jpg")}></img>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header className="accordionHeader">Third</Accordion.Header>
        <Accordion.Body className="accordionBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <img className="accordionImg" src={require("../images/tab/tab-3.jpg")}></img>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionComp;
