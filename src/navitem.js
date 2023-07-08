import { NavLink } from "react-router-dom";

const Navitem = ({ navItems }) => {
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
      </div>
    </div>
  );
};

export default Navitem;
