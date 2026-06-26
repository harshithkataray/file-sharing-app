import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow-md">
      <h1 className="text-2xl font-bold">📁 FileShare</h1>

      <div className="flex items-center gap-8">
        <Link to="/home" className="hover:text-gray-200">
          Home
        </Link>

        <span>Welcome, {localStorage.getItem("username")}</span>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
