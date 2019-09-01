import React, { Component } from "react";
import Album from "../album";
import SearchBar from "../searchBar";
import styles from "./albumContainer.module.scss";

class AlbumContainer extends Component {
  state = {
    filteredAlbumList: this.props.albumData,
    searchText: ""
  };

  onSearchBarChange = event => {
    const searchText = event.target.value;
    console.log(searchText);
    const filteredAlbumList = this.props.albumData.filter(album =>
      album.albumName.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredAlbumList);

    this.setState({
      filteredAlbumList,
      searchText
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        filteredAlbumList: this.props.albumData
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <SearchBar
          setSearchText={this.onSearchBarChange}
          type="text"
          className="input"
          placeholder="Search..."
        />
        <section className={styles.albumContainer}>
          {this.state.filteredAlbumList.map((album, index) => (
            <Album albumData={album} key={index} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default AlbumContainer;
