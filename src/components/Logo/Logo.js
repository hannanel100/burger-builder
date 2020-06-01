import React from "react";
import burgerLogo from "../../assets/images/original.png";
import classes from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="my-burger" />
    </div>
  );
};

export default Logo;
