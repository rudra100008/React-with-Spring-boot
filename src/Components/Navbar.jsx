import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="min-h-80 bg-gray-900 p-6 shadow-lg">
      {/* Logo Section */}
      <div className="mb-8">
        <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Courses
        </span>
      </div>

      {/* Navigation List */}
      <ListGroup flush>
        <li>
          <Link 
            to="/" 
            className="text-gray-800 no-underline bg-white hover:bg-gray-700 transition duration-300 rounded-md mb-2 px-4 py-2 block">
              Home
          </Link>
        </li>

        <li>
          <Link
            to="/allCourses" 
            className="text-gray-800 no-underline bg-white hover:bg-gray-700 transition duration-300 rounded-md mb-2 px-4 py-2 block">
              Courses
          </Link>
        </li>

        <li>
          <Link
            to="/addCourse" 
            className="text-gray-800 no-underline bg-white hover:bg-gray-700 transition duration-300 rounded-md mb-2 px-4 py-2 block">
              Add Courses
          </Link>
        </li>

        <li>
          <Link
            to="#" 
            className="text-gray-800 no-underline bg-white hover:bg-gray-700 transition duration-300 rounded-md mb-2 px-4 py-2 block">
              About
          </Link>
        </li>
      </ListGroup>
    </div>
  );
}

export default Navbar;
