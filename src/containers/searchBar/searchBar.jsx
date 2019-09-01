import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./searchBar.module.scss";

class SearchBar extends Component {
  render() {
    return (
      <input
        className={styles.searchBar}
        onChange={this.props.setSearchText}
        placeholder="Search album name..."
        value={this.props.searchText}
        type="text"
      />
    );
  }
}

SearchBar.propTypes = {
  setSearchText: PropTypes.func.isRequired
};

export default SearchBar;
