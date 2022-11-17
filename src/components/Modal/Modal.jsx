import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import css from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");

export class Modal extends PureComponent {

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL } = this.props;
    return createPortal(
      <div className={css.Overlay} onClick={this.handleBackdropClick}>
        <div className={css.Modal}>
          {this.props.children}
          <img src={largeImageURL} alt="No available" width="640" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};