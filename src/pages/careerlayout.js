import { Link, Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <>
      <nav>
        <ul
          className="d-flex justify-content-between"
          style={{ background: "gainsboro" }}
        >
          <li style={{ padding: "1em" }}>
            <Link to="/careers/it">IT</Link>
          </li>
          <li style={{ padding: "1em" }}>
            <Link to="/careers/cse">CSE</Link>
          </li>
          <li style={{ padding: "1em" }}>
            <Link to="/careers/all">All</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default CareersLayout;
