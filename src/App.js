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
];
const sideItems = ["one", "two", "three", "four"];

// const dummyText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, blanditiis
// ut enim explicabo, distinctio quo expedita omnis fuga velit voluptatibus
// sunt! Asperiores vero doloribus fugiat debitis exercitationem quo
// dolorem minima`;

const obj = {
  name: "samara",
  coOrdinations: {
    lat: "8383",
    long: "8383",
    subSub: {
      lat: "8383",
      long: "8383",
    },
  },
};

const App = () => {
  return (
    <>
      <header>
        <Header items={navItems} />
      </header>
      <section className="d-flex justify-content-between main-container">
        <aside className="sidebar">
          <Sidebar items={sideItems} />
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<>Hello world everyone!</>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/Report" element={<Report />}></Route>
            <Route path="/careers" element={<CareersLayout />}>
              <Route path=":stream" element={<Careers />}></Route>
            </Route>
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
