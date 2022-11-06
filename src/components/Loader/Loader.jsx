import React, { PureComponent } from "react";
// import PropTypes from 'prop-types';
import {ThreeDots} from "react-loader-spinner";

export class Loader extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="LoaderWrapper">
        <ThreeDots type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}

Loader.propTypes = {
  // bla: PropTypes.string,
};

Loader.defaultProps = {
  // bla: 'test',
};
