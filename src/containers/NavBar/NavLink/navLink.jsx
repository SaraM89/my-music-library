import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import styles from "./navLink.module.scss";

class SingleLink extends Component {
  render() {
    return (
      <li className={styles.lstyle}>
        <Link to={this.props.route}>{this.props.name}</Link>
      </li>
    );
  }
}

SingleLink.propTypes = {
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default SingleLink;
