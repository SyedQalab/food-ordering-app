import React from "react";

import coverImage from "../../assets/heroimage.jpg";
import classes from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <div style={{ paddingRight: "50px" }}>
        <header className={classes.header}>
          <h1>QalabMeals</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
      </div>
      <div className={classes["main-image"]}>
        <img src={coverImage} alt="Delicios cuisines!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
