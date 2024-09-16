import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AllCourses from "./Components/AllCourses";
import AddCourse from "./Components/AddCourse";
import { Col, Container, Row } from "reactstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen">
      <Router>
        <Container>
          <h1 className="mx-auto p-3 shadow-lg rounded-lg bg-green-300 text-center">
            Welcome to Course Application
          </h1>
          <Row>
            <Col md={2}>
              <Navbar />
            </Col>
            <Col md={10}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/addCourse" element={<AddCourse />} />
                <Route path="/allCourses" element={<AllCourses />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
