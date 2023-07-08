const Footer = () => {
  return (
    <div className="d-flex justify-content-between footerSection">
      <div className="about" style={{ flex: 1 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, blanditiis
        ut enim explicabo, distinctio quo expedita omnis fuga velit voluptatibus
        sunt! Asperiores vero doloribus fugiat debitis exercitationem quo
        dolorem minima.
      </div>
      <div className="Contact" style={{ flex: 1 }}>
        <blockquote>Samarasimhareddy NRT</blockquote>
      </div>
      <div className="follow" style={{ flex: 1 }}>
        <ul className="d-flex flex-column">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="complaints d-flex flex-column" style={{ flex: 1 }}>
        <input type="text" placeholder="Enter your email" />
        <input type="textarea" placeholder="Enter your complaint" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Footer;
