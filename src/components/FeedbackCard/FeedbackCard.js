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
          <p className="feedbackCardUpvoteLabel">Votes</p>
          <h1 className="feedbackCardUpvoteValue">
            {this.props.feedback.upvote}
          </h1>
        </div>
        <div className="middleFeedbackCardContainer">
          <h2 className="feedbackCardSubject">{this.props.feedback.subject}</h2>
          <h4 className="feedbackCardProject">{this.props.feedback.project}</h4>
          <div className="feedbackCardButtonContainer">
            <button className="feedbackCardButton">Upvote</button>
            <button className="feedbackCardButton">Show More</button>
          </div>
        </div>
        <div className="rightFeedbackCardContainer">
          <div className="feedbackCardStatusContainer">
            <div className="feedbackCardStatusElementContainer">
              <p className="feedbackCardStatus">{this.props.feedback.status}</p>
            </div>
            <div className="feedbackCardStatusBadgeElementContainer">
              <span className="feedbackCardStatusBadge" />
            </div>
          </div>
          <p className="feedbackCardDate">{formattedDate}</p>
        </div>
      </div>
    );
  }
}

export default FeedbackCard;
