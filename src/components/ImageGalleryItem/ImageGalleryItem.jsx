import React, { PureComponent } from "react";
// import PropTypes from "prop-types";

export class ImageGalleryItem extends PureComponent {
  handleClick = (e) => {
    if (e.target.nodeName === "IMG") {
      this.setState({ largeImageURL: e.target.dataset.large });
      this.props.handleLargeURLImage(e.target.dataset.large);
    }
  };
  render() {
    const { webformatURL, largeImageURL, tags } = this.props;

    return (
      <li
        className="ImageGalleryItem"
        key={webformatURL}
        onClick={this.handleClick}
      >
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={this.handleClick}
          data-large={largeImageURL}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  // bla: PropTypes.string,
};

ImageGalleryItem.defaultProps = {
  // bla: 'test',
};
