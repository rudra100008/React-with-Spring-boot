import { ListGroup} from "reactstrap";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Navbar() {
  return (
    <div className="min-h-80 bg-gray-900 p-6 shadow-lg">
      {/* Logo Section */}
      <div className="mb-8">
        <span className="text-4xl  font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Courses
        </span>
      </div>

      {/* Navigation List */}
      <ListGroup flush>
        <Link 
          tag="a" 
          to="/home" 
          action 
          className="text-gray-800 no-underline bg-white hover:bg-gray-700 transition duration-300 rounded-md mb-2 px-4 py-2 cursor-pointer">
            Home
        </Link>

        <Link
          tag="a" 
          to="/allCourses" 
          action 
          className="text-gray-800 no-underline bg-white hover:bg-gray-700 transition duration-300 rounded-md mb-2 px-4 py-2 cursor-pointer">
            Courses
        </Link>

        <Link
          tag="a" 
          to="/addCourse" 
          action 
          className="text-gray-800 no-underline bg-white hover:bg-gray-700 transition duration-300 rounded-md mb-2 px-4 py-2 cursor-pointer">
            Add Courses
        </Link>

        <Link
          tag="a" 
          to="#" 
          action 
          className="text-gray-800 bg-white no-underline hover:bg-gray-700 transition duration-300 rounded-md mb-2 px-4 py-2 cursor-pointer">
            About
        </Link>
      </ListGroup>
    </div>
  );
}

export default Navbar;
