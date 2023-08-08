import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="nav-brand">
          QuadB
        </NavLink>
        <ul>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/shows"
            >
              Shows
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
