const Sidebar = (props) => {
  return (
    <ul className="d-flex flex-column">
      {props.items.map((item, i) => (
        <li key={i + 1}>{item} in sidebar</li>
      ))}
    </ul>
  );
};

export default Sidebar;

// const props = {
//   items: ["one", "two", "three", "four"],
// };
// Sidebar(props);
