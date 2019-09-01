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
    // console.log("asd");
  };

  // static getDerivedStateFromProps(props, state) {
  //   if (props.albumData !== state.filteredAlbumList) {
  //     return {
  //       filteredAlbumList: props.albumData
  //     };
  //   }
  // }

  componentDidUpdate(prevProps) {
    // let newarray = this.props.albumData;
    // if (this.state.filteredAlbumList !== this.props.albumData) {
    //   this.setState({ filteredAlbumList: newarray });
    // }
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

// state = {
//   filteredAlbumList: this.props.albumData,
//   searchText: ""
// };

// onSearchBarChange = value => {
//   this.setState({ searchText: value });
// };

// onSearchFilter = () => {
//   //const searchText = event.target.value;
//   //console.log(event.target.value);
//   const filteredAlbumList = this.state.filteredAlbumList.filter(album =>
//     album.albumName.toLowerCase().includes(searchText.toLowerCase())
//   );
//   console.log(filteredAlbumList);

//   console.log("asd");
// };

// componentDidMount() {
//   this.setState({
//     filteredAlbumList: this.onSearchFilter()
//   });
// }
