import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import css from "./Button.module.css"

export class Button extends PureComponent {
  state = {
    hasError: false,
  };

  render() {
    return (
      <button className={css.Button} onClick={this.props.onClick}>
        Load more...
      </button>
    );
  }
}

Button.propTypes = {
  hasError: PropTypes.bool,
};