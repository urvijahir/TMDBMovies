import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// Import icons from react-icons
import { AiFillHome, AiOutlineSearch, AiFillHeart } from "react-icons/ai";

const BottomNav = () => {
  // The useLocation hook gives us the current URL path
  const location = useLocation();
  // Define navigation items in an array for scalability
  const navItems = [
    { to: "/", label: "Home", icon: <AiFillHome size="24" /> },
    { to: "/search", label: "Search", icon: <AiOutlineSearch size="24" /> },
    { to: "/favorites", label: "Favorites", icon: <AiFillHeart size="24" /> },
  ];
  return (
    <div className="fixed-bottom bg-dark border-top border-secondary p-2">
      <Nav
        as="ul"
        className="d-flex justify-content-around align-items-center"
        activeKey={location.pathname}
      >
        {navItems.map(({ to, label, icon }) => (
          <Nav.Item as="li" key={to}>
            <Nav.Link
              as={Link}
              to={to}
              eventKey={to}
              className="text-light d-flex flex-column align-items-center nav-link-custom"
            >
              {icon}
              <span className="nav-label">{label}</span>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default BottomNav;
