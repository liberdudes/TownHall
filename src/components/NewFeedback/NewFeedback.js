import React from "react";
import "./NewFeedback.css";

class NewFeedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: "",
      description: "",
      project: "",
      projects: this.props.projects,
      isErrorPresent: false
    };

    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.handleNewFeedbackSubmit = this.handleNewFeedbackSubmit.bind(this);
  }

  handleSubjectChange(e) {
    this.setState({ subject: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleProjectChange(e) {
    this.setState({ project: e.target.value });
  }

  toggleError() {
    this.setState({ isErrorPresent: !this.state.isErrorPresent });
  }

  resetFormState() {
    this.setState({
      subject: "",
      description: "",
      project: "",
      isErrorPresent: false
    });
  }

  handleNewFeedbackSubmit(e) {
    const MIN_SUBJECT_LENGTH = 5;
    const MAX_SUBJECT_LENGTH = 40;

    const MIN_DESC_LENGTH = 10;
    const MAX_DESC_LENGTH = 200;

    let subjectLength = this.state.subject.length;
    let descriptionLength = this.state.description.length;
    let projectLength = this.state.project.length;

    if (
      !(subjectLength >= MIN_SUBJECT_LENGTH) ||
      !(subjectLength <= MAX_SUBJECT_LENGTH) ||
      (!(descriptionLength >= MIN_DESC_LENGTH) ||
        !(descriptionLength <= MAX_DESC_LENGTH)) ||
      projectLength === 0
    ) {
      console.log("input error");

      if (this.state.isErrorPresent === false) {
        this.toggleError();
      }
    } else {
      const formContent = {
        subject: this.state.subject,
        description: this.state.description,
        project: this.state.project
      };
      this.props.onNewFeedbackSubmit(formContent);
      this.resetFormState();
    }
    e.preventDefault();
  }

  render() {
    let userError;
    if (this.state.isErrorPresent) {
      userError = <p>USER ERROR</p>;
    } else {
      userError = null;
    }
    return (
      <div className="newFeedbackContainer">
        {userError}
        <div className="newFeedbackTitleContainer">
          <h2 className="newFeedbackTitle">Provide Feedback</h2>
        </div>
        <form
          className="formFeedbackContainer"
          onSubmit={this.handleNewFeedbackSubmit}
        >
          <div className="newFeedbackSubjectLabelContainer">
            <p className="newFeedbackPrimaryLabel">Subject</p>
            <p className="newFeedbackSecondaryLabel">
              Secondary feeback form label
            </p>
          </div>
          <div className="newFeedbackSubjectContainer">
            <input
              type="text"
              placeholder="Provide a subject"
              value={this.state.subject}
              onChange={this.handleSubjectChange}
              required
            />
          </div>
          <div className="newFeedbackDescriptionLabelContainer">
            <p className="newFeedbackPrimaryLabel">Description</p>
            <p className="newFeedbackSecondaryLabel">
              Secondary feeback form label
            </p>
          </div>
          <div className="newFeedbackDescriptionContainer">
            <textarea
              placeholder="Provide a description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              required
            />
          </div>
          <div className="newFeedbackProjectLabelContainer">
            <p className="newFeedbackPrimaryLabel">Project</p>
            <p className="newFeedbackSecondaryLabel">
              Secondary feeback form label
            </p>
          </div>
          <div className="newFeedbackProjectContainer">
            <select
              value={this.state.project}
              onChange={this.handleProjectChange}
            >
              <option value="" key="none">
                Select project
              </option>
              {this.props.projects.map(project => {
                return (
                  <option value={project} key={project}>
                    {project}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="newFeedbackSubmitContainer">
            <input
              className="newFeedbackSubmitButton"
              type="submit"
              value="+ Create Feedback"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default NewFeedback;
