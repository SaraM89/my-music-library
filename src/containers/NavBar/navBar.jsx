import React, { Component } from "react";
import SingleLink from "./NavLink";
import styles from "./navBar.module.scss";

class NavBar extends Component {
  render() {
    return (
      <ul>
        <SingleLink route="punk" name="Punk" />
        <SingleLink route="reggae" name="Reggae" />
        <SingleLink route="classical" name="Classical" />
      </ul>
    );
  }
}

export default NavBar;
