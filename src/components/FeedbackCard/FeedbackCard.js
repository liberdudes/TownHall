import React from "react";
import moment from "moment";
import "./FeedbackCard.css";

class FeedbackCard extends React.Component {
  render() {
    const formattedDate = moment(this.props.feedback.timestamp).format(
      "MMMM Do YYYY, h:mm a"
    );

    return (
      <div className="feedbackCardContainer">
        <div className="leftFeedbackCardContainer">
          <p className="feedbackCardUpvoteLabel">VOTES</p>
          <h1 className="feedbackCardUpvoteValue">
            {this.props.feedback.upvote}
          </h1>
        </div>
        <div className="middleFeedbackCardContainer">
          <h2 className="feedbackCardSubject">{this.props.feedback.subject}</h2>
          <h4 className="feedbackCardProject">{this.props.feedback.project}</h4>
          <button>Upvote</button>
          <button>Show More</button>
        </div>
        <div className="rightFeedbackCardContainer">
          <p className="feedbackCardStatus">{this.props.feedback.status}</p>
          <p className="feedbackCardDate">{formattedDate}</p>
        </div>
      </div>
    );
  }
}

export default FeedbackCard;
