import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="Healthy Teeth" className="logo" />
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/promos">Promos</Link></li>
      </ul>

      <input type="text" placeholder="Search..." className="search-bar" />

      <ul className="nav-links">

        <li><Link to="/business">Business</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>

      <button className="login-btn">Log In</button>
    </nav>
  );
};

export default Navbar;
