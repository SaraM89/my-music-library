import React, { Component } from "react";
import styles from "./album.module.scss";
import PropTypes from "prop-types";

class Album extends Component {
  state = {
    visible: false
  };

  handleClick = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const showDescription = this.state.visible ? "" : styles.hiddenStyle;

    return (
      <article onClick={this.handleClick} className={`${styles.card}`}>
        <div className={styles.front}>
          <img
            src={this.props.albumData.image}
            className={styles.picture}
            alt=""
          />
        </div>
        <div className={`${styles.back}  ${showDescription}`}>
          <h3>{this.props.albumData.artist}</h3>
          <table className={styles.infos}>
            <tbody>
              <tr>
                <th>Album Name:</th>
                <td>{this.props.albumData.albumName}</td>
              </tr>
              <tr>
                <th>Genre:</th>
                <td>{this.props.albumData.genre}</td>
              </tr>
              <tr>
                <th>Released:</th>
                <td>{this.props.albumData.released}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    );
  }
}

Album.propTypes = {
  albumData: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default Album;
