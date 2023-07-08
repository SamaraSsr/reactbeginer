import Navitem from "./navitem";

const Header = (props) => {
  return <Navitem navItems={props.items} />;
};

export default Header;

// Header({
//   items: ["Home", "About", "Contact", "Careers"],
// });
