import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.props.onSearchChange(e.target.value.substr(0, 20));
  }

  render() {
    return (
      <div className="searchContainer">
        <form className="searchForm">
          <input
            type="text"
            className="searchInput"
            placeholder="Search feedback..."
            onChange={this.handleSearchChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
