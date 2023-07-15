import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Careers from "./pages/careers";
import NotFound from "./notfound";
import CareersLayout from "./pages/careerlayout";
import Report from "./pages/report";
import ByUsingUseState from "./pages/hooks/useStatehook";
import ByUsingUseReducer from "./pages/hooks/useReducerhook";
import ByUsingUseEffect from "./pages/hooks/useEffecthook";
import ByUsingUseRef from "./pages/hooks/useRefhook";
import ByUsingUseContext from "./pages/hooks/useContexthook";
import { createContext, useState } from "react";
import ByUsingUseMemo from "./pages/hooks/useMemohook";
// import { useState } from "react";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Careers",
    path: "/careers",
  },
  {
    name: "Report Problem",
    path: "/report",
  },
  {
    name: "Use State Hook",
    path: "/usestate",
  },
  {
    name: "Use Reducer Hook",
    path: "/usereducer",
  },
  {
    name: "Use Effect Hook",
    path: "/useeffect",
  },
  {
    name: "Use Ref Hook",
    path: "/useref",
  },
  {
    name: "Use Context Hook",
    path: "/usecontext",
  },
  {
    name: "Use layoutEffect Hook ",
    path: "/useLayoutEffect",
  },
  {
    name: "Use Memo Hook ",
    path: "/usememo",
  },
];
const sideItems = ["one", "two", "three", "four"];

// const dummyText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, blanditiis
// ut enim explicabo, distinctio quo expedita omnis fuga velit voluptatibus
// sunt! Asperiores vero doloribus fugiat debitis exercitationem quo
// dolorem minima`;

// const obj = {
//   name: "samara",
//   coOrdinations: {
//     lat: "8383",
//     long: "8383",
//     subSub: {
//       lat: "8383",
//       long: "8383",
//     },
//   },
// };

export const navItemValueContext = createContext(null);

const App = () => {
  const [navItemValue, setNavItemValue] = useState();

  return (
    <>
      <header>
        <navItemValueContext.Provider value={navItemValue}>
          <Header items={navItems} />
        </navItemValueContext.Provider>
      </header>
      <section className="d-flex justify-content-between main-container">
        <aside className="sidebar">
          <Sidebar items={sideItems} />
        </aside>
        <main className="main-content">
          {/* <button
            onClick={() => setNavItemValue("some value altered with useContext")}
          >Update</button> */}
          <Routes>
            <Route path="/" element={<>Welcome to React Begineer</>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/Report" element={<Report />}></Route>
            <Route path="/careers" element={<CareersLayout />}>
              <Route path=":stream" element={<Careers />}></Route>
            </Route>
            <Route path="/usestate" element={<ByUsingUseState />}></Route>
            <Route path="/usereducer" element={<ByUsingUseReducer />}></Route>
            <Route path="/useeffect" element={<ByUsingUseEffect />}></Route>
            <Route path="/useref" element={<ByUsingUseRef />}></Route>
            <Route
              path="/useLayoutEffect"
              element={<ByUsingUseEffect />}
            ></Route>
            <Route path="/usecontext" element={<ByUsingUseContext />}></Route>
            <Route path="/usememo" element={<ByUsingUseMemo />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;

// react hooks
// usestate

// componnent

// birth (initialization)
// death (destroy)

// counter  0

// operartions:
// 1. increment
// 2. decrement
// 3. reset to initial state

// parent and child relationship

// 1 Way - APP > Header > NavItem > actual UI code that renders the navigation bar (data transfers from parent to child)

// 1 Way NavItem > Header > APP (data transfers from child to parent)

// {/* <button
//   onClick={() =>
//     setNavItemValue("some value altered with useState hook")
//   }
// >
//   Click me
// </button> */}

// const something = () => {
//   console.log("something executed");
// };
