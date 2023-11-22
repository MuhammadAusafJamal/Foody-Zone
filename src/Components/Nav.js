import Nav from 'react-bootstrap/Nav';
import Navbtn from './NavBtn';

function AlignmentExample() {
  return (
      <Nav className="justify-content-center nav" >
        <Nav.Item>
          <Nav.Link href="/home"><Navbtn v="All" /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"><Navbtn v="BreakFast" /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2"><Navbtn v="Lunch" /></Nav.Link>
        </Nav.Item> 
        <Nav.Item>
          <Nav.Link eventKey="link-2"><Navbtn v="Dinner" /></Nav.Link>
        </Nav.Item>
      </Nav>
  );
}

export default AlignmentExample;