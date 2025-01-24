
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">App Menu</h2>
      <ul className="sidebar-list">
        <li>
          <Link to="/Student" className="sidebar-link">
            Student Management
          </Link>
        </li>
        <li>
          <Link to="/login" className="sidebar-link">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
