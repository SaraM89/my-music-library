import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./searchBar.module.scss";

class SearchBar extends Component {
  ////from here
  // state = {
  //   value: ""
  // };

  // setSearchText = event => {
  //   this.setState({
  //     value: event.target.value
  //   });
  //   this.props.handleSearchBarChange(event.target.value);
  // };
  /////to here
  render() {
    return (
      <input
        className={styles.searchBar}
        onChange={this.props.setSearchText}
        placeholder="Search albums..."
        value={this.props.searchText}
        type="text"
      />
    );
  }
}

SearchBar.propTypes = {
  // searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired
};

export default SearchBar;
