import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  return (
    <>
      <nav className="position-fixed bg-dark "style={{ top:"250px",zIndex:"99",padding:"2px",width:"100%"}}>
        <ul class="d-inline-flex gap-1 text-decoration-none">
          <li class="btn text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 ">
            <Link to="/" className="text-decoraton-none">Home</Link>
          </li>
          <li class="btn text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3, text-decoration-none">
            <Link to="/Forms">Forms</Link>
          </li>
          <li class="btn text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3, text-decoration-none">
            <Link to="/contact">Contact</Link>
          </li>
          <li class="btn text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3, text-decoration-none">
            <Link to="/UserProfile">Profile</Link>
          </li>
          <li class="btn text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3, text-decoration-none">
            <Link to="/UsersList">Users</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Menu;
