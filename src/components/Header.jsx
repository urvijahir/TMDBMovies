import { Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-5">
      <Navbar.Brand href="#home" className="app-header-brand">
        The Movie Log
      </Navbar.Brand>
    </Navbar>
    /*<header className="app-header">
      <img
        src="https://placehold.co/1200x200/333/fff?text=CineVault"
        alt="CineVault Banner"
        className="banner-image"
      />
    </header>*/
  );
};

export default Header;
