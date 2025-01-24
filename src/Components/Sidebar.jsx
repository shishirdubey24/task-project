import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show a toast with custom buttons for Login and Logout
    toast.info(
      <>
        <div>
          <p>Are you sure you want to logout?</p>
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: "10px" }}>
            <button
              style={{
                padding: "5px 10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => {
                toast.dismiss(); // Dismiss the current toast
                navigate("/login"); // Redirect to login
                toast.success("Successfully logged out!", { position: "top-center" });
              }}
            >
              Logout
            </button>
            <button
              style={{
                padding: "5px 10px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => toast.dismiss()} // Close the toast without doing anything
            >
              Stay Logged In
            </button>
          </div>
        </div>
      </>,
      { position: "top-center", autoClose: false, closeOnClick: false, draggable: false }
    );
  };


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
          <button className="sidebar-link" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
