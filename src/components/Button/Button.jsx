import React, { PureComponent } from "react";
// import PropTypes from 'prop-types';
// import { Test } from './Button.styles';

export class Button extends PureComponent {
  state = {
    hasError: false,
  };

  render() {
    return (
      <button className="ButtonWrapper" onClick={this.props.onClick}>
        Load more...
      </button>
    );
  }
}

Button.propTypes = {
  // bla: PropTypes.string,
};

Button.defaultProps = {
  // bla: 'test',
};
