import React, { PureComponent } from "react";
// import PropTypes from 'prop-types';
// import { Test } from './Searchbar.styles';

export class Searchbar extends PureComponent {
  state = { query: "" };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: "" });
  };
  render() {
    const { query } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className="SearchForm-input"
            value={query}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  // bla: PropTypes.string,
};

Searchbar.defaultProps = {
  // bla: 'test',
};
