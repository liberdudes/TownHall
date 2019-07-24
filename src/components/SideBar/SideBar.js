import React from "react";
import "./SideBar.css";
import logo from "../../logo.svg";

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
      <div className="sideBarLayout">
        <div id="townhallSideBarBranding">
          <img alt="townhallLogo" src={logo} />
          <h4 id="townhallName">townhall</h4>
          <span id="townhallAlpha">α</span>
        </div>
        <button
          className={this.buttonStylesheet("Feedback")}
          id="Feedback"
          onClick={this.handleContainerChange}
        >
          Feedback
        </button>
        <button
          className={this.buttonStylesheet("Projects")}
          id="Projects"
          onClick={this.handleContainerChange}
        >
          Projects
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
        <hr className="lineBreakSideBar" />
        <button
          className={this.buttonStylesheet("Settings")}
          id="Settings"
          onClick={this.handleContainerChange}
        >
          Settings
        </button>
      </div>
    );
  }
}

export default SideBar;
