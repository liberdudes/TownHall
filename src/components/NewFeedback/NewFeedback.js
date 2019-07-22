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
        <form onSubmit={this.handleNewFeedbackSubmit}>
          <label>
            Subject
            <input
              type="text"
              placeholder="Provide a subject"
              value={this.state.subject}
              onChange={this.handleSubjectChange}
              required
            />
          </label>
          <label>
            Description
            <textarea
              placeholder="Provide a description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              required
            />
          </label>
          <label>
            Project
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
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewFeedback;
