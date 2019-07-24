import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleContainerChange = this.handleContainerChange.bind(this);
  }

  handleSearchChange(e) {
    this.props.onSearchChange(e.target.value.substr(0, 20));
  }

  handleContainerChange(e) {
    this.props.onNewFeedbackClick(e.target.value);
  }

  buttonStylesheet(isSelectedContainer) {
    if (isSelectedContainer === this.props.container) {
      return "provideFeedbackButton";
    } else {
      return "inactiveProvideFeedbackButton";
    }
  }

  render() {
    console.log(this.props.container);
    console.log(this.buttonStylesheet(this.props.container));

    return (
      <div className="searchContainer">
        <div className="searchBar">
          <form className="searchForm">
            <input
              type="text"
              className="searchInput"
              placeholder="Search feedback..."
              onChange={this.handleSearchChange}
            />
          </form>
        </div>
        <div className="feedbackButton">
          <button
            id={this.buttonStylesheet("Provide Feedback")}
            onClick={this.handleContainerChange}
            value="Provide Feedback"
          >
            Provide Feedback
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
