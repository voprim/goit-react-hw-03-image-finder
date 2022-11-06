import React, { Component } from "react";
import css from "./ImageGallery.module.css";
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
  handleClick = (e) => {
    // console.log(e.currentTarget);
    // console.log(e.target);
    console.log("gallery click");
  };
  handleLargeURLImage = (data) => {
    this.props.handleLargeURLImage(data);
  };
  render() {
    const { images } = this.props;
    return (
      <ul className={css.ImageGallery} id="imagesList">
        {images.map(({ id, webformatURL, largeImageURL, tags, user }) => (
          <ImageGalleryItem
            onClick={this.handleClick}
            key={`${id}${user}`}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tag={tags}
            handleLargeURLImage={this.handleLargeURLImage}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  // bla: PropTypes.string,
};

ImageGallery.defaultProps = {
  // bla: 'test',
};
