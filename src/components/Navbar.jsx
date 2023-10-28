import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


export const Navbar = () => {
  const { username, login, logout } = useAuth();
  return (
    <>
      <div className={"nav-container"}>
        <div>React Hooks</div>
        <nav id="sidebar" className={"nav-item-container"}>
          <NavLink to="/" className={"nav-item"}>
            Home
          </NavLink>
          <NavLink to="/game">Game</NavLink>
          <div>{username}</div>
          {username ? (
            <button onClick={logout}>logout</button>
          ) : (
            <button onClick={login}>login</button>
          )}
        </nav>
      </div>
      <hr />
    </>
  );
};
