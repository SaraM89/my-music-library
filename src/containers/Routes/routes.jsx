import React, { Component } from "react";
import { Redirect, Router } from "@reach/router";
import Albums from "../../assets/data/albumData";
import NavBar from "../NavBar";
import AlbumContainer from "../albumContainer";

class Routes extends Component {
  filteredAlbum(genre) {
    return Albums.filter(album => album.genre === genre);
  }

  render() {
    return (
      <>
        <NavBar />
        <Router>
          <Redirect nothrow from="/" to="punk" />
          <AlbumContainer path="punk" albumData={this.filteredAlbum("punk")} />
          <AlbumContainer
            path="reggae"
            albumData={this.filteredAlbum("reggae")}
          />
          <AlbumContainer
            path="classical"
            albumData={this.filteredAlbum("classical")}
          />
        </Router>
      </>
    );
  }
}

export default Routes;
