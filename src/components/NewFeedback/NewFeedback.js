import React from "react";
import "./NewFeedback.css";

class NewFeedback extends React.Component {
  constructor(props) {
    super(props);

    this.handleNewFeedbackSubmit = this.handleNewFeedbackSubmit.bind(this);
  }

  handleNewFeedbackSubmit(e) {
    //extract value from inputs, call helper.addMessageToProject

    this.props.onNewFeedbackSubmit();
    e.preventDefault();
  }

  render() {
    return (
      <div className="newFeedbackContainer">
        <form onSubmit={this.handleNewFeedbackSubmit}>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewFeedback;
