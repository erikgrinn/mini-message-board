// import { useState } from "react";
import { NavLink } from "react-router";

function NavBar() {
  //   const [fakeStoreData, setFakeStoreData] = useState([]);
  //   const [cartData, setCartData] = useState({ number: 0 });

  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home{"  "}
        </NavLink>
        <span>|</span>
        <NavLink to="/new">{"  "}New</NavLink>
      </nav>
    </>
  );
}

export default NavBar;
