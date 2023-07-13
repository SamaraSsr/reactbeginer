import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { navItemValueContext } from "./App";
const Navitem = ({ navItems }) => {
  const value = useContext(navItemValueContext);

  return (
    <div className="d-flex justify-content-between navbar">
      <img
        className="logo"
        src="http://amentotech.com/htmls/amentojourn/images/logo.png"
        alt="menu"
      />
      <div className="menu">
        <ul className="d-flex nav-item-parent flex-end">
          {navItems.map((navItem, i) => (
            <li className="nav-item-child" key={i}>
              <NavLink to={navItem.path}>{navItem.name}</NavLink>
            </li>
          ))}
        </ul>
        {/* <button onClick={something}>Update</button> */}
      </div>
      From NavBar: {value}
    </div>
  );
};

export default Navitem;

// const something = () => {
//   console.log('something executed')
// }
