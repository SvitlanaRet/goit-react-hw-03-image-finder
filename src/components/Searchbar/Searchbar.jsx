import React, { Component } from 'react';
import './Searchbar.css';
import { FiSearch } from 'react-icons/fi';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  myRef = React.createRef();

  handler = () => {
    let value = this.myRef.current.value;
    if (value.length > 1) {
      this.props.onSubmit(this.myRef.current.value);
      this.myRef.current.value = '';
    }
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={e => e.preventDefault()}>
          <button
            type="submit"
            className="SearchForm-button"
            onClick={this.handler}
          >
            <FiSearch size={25} />
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            ref={this.myRef}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
