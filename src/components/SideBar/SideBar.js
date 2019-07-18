import React from "react";
import "./SideBar.css";

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleContainerChange = this.handleContainerChange.bind(this);
  }

  handleContainerChange(e) {
    this.props.onContainerChange(e.target.id);
  }

  buttonStylesheet(isSelectedContainer) {
    if (isSelectedContainer === this.props.container) {
      return "activeSideBarButton";
    } else {
      return "inactiveSideBarButton";
    }
  }

  render() {
    return (
      <div>
        <button
          className={this.buttonStylesheet("Feedback")}
          id="Feedback"
          onClick={this.handleContainerChange}
        >
          Feedback
        </button>
        <button
          className={this.buttonStylesheet("Admin Mode")}
          id="Admin Mode"
          onClick={this.handleContainerChange}
        >
          Admin Mode
        </button>
        <button
          className={this.buttonStylesheet("Statistics")}
          id="Statistics"
          onClick={this.handleContainerChange}
        >
          Statistics
        </button>
      </div>
    );
  }
}

export default SideBar;
