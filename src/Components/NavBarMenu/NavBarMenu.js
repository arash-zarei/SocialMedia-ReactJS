import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";

//CSS
import "./NavBarMenu.css";

//Icon
import * as Unicons from "@iconscout/react-unicons";

//Images
import profile from "../../images/Profile.png";

const NavBarMenu = ({close}) => {
  
  const lists = useRef(null);

  useEffect(() => {
    const aLink = [...lists.current.querySelectorAll("li a")];
    aLink.forEach((items) => {
      if (
        items.getAttribute("href") ===
        "/" + window.location.href.split("/")[3]
      ) {
        items.classList.add("active");
      } else {
        items.classList.remove("active");
      }
    });

    aLink.forEach((items) => {
      items.addEventListener("click", () => {
        for (let a = 0; a < aLink.length; a++) {
          aLink[a].classList.remove("active");
        }
        items.classList.add("active");
      });
    });
  });

  return (
    <>
      <div className="addresPage">
        <img src={profile} alt="profile" />
        <div>
          <p>ArashZarei</p>
          <p>@arashzarei.js</p>
        </div>
      </div>
      <nav className="NavBarMenu">
        <ul ref={lists}>
          <li onClick={close}>
            <Link to="/" className="active">
              <Unicons.UilHome />
              <p>Home</p>
            </Link>
          </li>
          <li onClick={close}>
            <Link to="/saved">
              <Unicons.UilBookmark />
              <p>Saved</p>
            </Link>
          </li>
          <li onClick={close}>
            <Link to="/videos">
              <Unicons.UilPlay />
              <p>Videos</p>
            </Link>
          </li>
          <li onClick={close}>
            <Link to="/suggestions">
              <Unicons.UilUserPlus />
              <p>Suggestions</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBarMenu;
