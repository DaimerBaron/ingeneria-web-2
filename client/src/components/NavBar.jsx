import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-900 p-4  w-full text-white select-none">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-green-300">
            Media
          </Link>
        </li>
        <li>
          <Link to="/createMedia" className="hover:text-green-300">
            Create Media
          </Link>
        </li>
        
        <li>
          <Link to="/director" className="hover:text-green-300">
            Director
          </Link>
        </li>
        <li>
          <Link to="/genre" className="hover:text-green-300">
            Genre
          </Link>
        </li>
        <li>
          <Link to="/producer" className="hover:text-green-300">
            Producer
          </Link>
        </li>
        <li>
          <Link to="/type" className="hover:text-green-300">
            Type
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;