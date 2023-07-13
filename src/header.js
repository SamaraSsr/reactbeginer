import { useContext } from "react";
import Navitem from "./navitem";
import { navItemValueContext } from "./App";

const Header = ({ items }) => {
  const value = useContext(navItemValueContext);

  return (
    <>
      From Header: {value}
      <Navitem navItems={items} />;
    </>
  );
};

export default Header;

// Header({
//   items: ["Home", "About", "Contact", "Careers"],
// });

// const props = {
//   items: [
//     {
//       name: "Home",
//       path: "/",
//     },
//     {
//       name: "About",
//       path: "/about",
//     },
//   ],
// };
