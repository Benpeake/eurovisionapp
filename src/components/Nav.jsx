import { NavLink } from "react-router-dom";

function Nav({}) {
  return (
    <nav className="flex flex-wrap items-center gap-2 py-4 px-4 bg-white">
      <NavLink to="/" end>
        {({ isActive }) => <li className={`tag ${isActive ? "active" : ""}`}>Score</li>}
      </NavLink>
      <NavLink to="/table" end>
        {({ isActive }) => <li className={`tag${isActive ? " active" : ""}`}>Table</li>}
      </NavLink>
      <NavLink to="/bingo" end>
        {({ isActive }) => <li className={`tag${isActive ? " active" : ""}`}>Bingo</li>}
      </NavLink>
    </nav>
  );
}
export default Nav;
