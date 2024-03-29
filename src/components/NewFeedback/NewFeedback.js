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
      subjectInputError: true,
      descriptionInputError: true,
      projectInputError: true
    };

    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.handleNewFeedbackSubmit = this.handleNewFeedbackSubmit.bind(this);
  }

  handleSubjectChange(e) {
    this.setState({ subject: e.target.value });

    const MIN_SUBJECT_LENGTH = 5;
    const MAX_SUBJECT_LENGTH = 40;

    let subjectLength = e.target.value.length;

    if (
      !(subjectLength >= MIN_SUBJECT_LENGTH) ||
      !(subjectLength <= MAX_SUBJECT_LENGTH)
    ) {
      this.setState({ subjectInputError: true });
    } else {
      this.setState({ subjectInputError: false });
    }
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });

    const MIN_DESC_LENGTH = 10;
    const MAX_DESC_LENGTH = 200;

    let descriptionLength = e.target.value.length;

    if (
      !(descriptionLength >= MIN_DESC_LENGTH) ||
      !(descriptionLength <= MAX_DESC_LENGTH)
    ) {
      this.setState({ descriptionInputError: true });
    } else {
      this.setState({ descriptionInputError: false });
    }
  }

  handleProjectChange(e) {
    this.setState({ project: e.target.value });

    let project = e.target.value;

    if (project === "") {
      this.setState({ projectInputError: true });
    } else {
      this.setState({ projectInputError: false });
    }
  }

  resetFormState() {
    this.setState({
      subject: "",
      description: "",
      project: "",
      subjectInputError: true,
      descriptionInputError: true,
      projectInputError: true
    });
  }

  handleNewFeedbackSubmit(e) {
    if (
      this.state.subjectInputError === false &&
      this.state.descriptionInputError === false &&
      this.state.projectInputError === false
    ) {
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
    console.log(this.state);

    let subjectSecondaryLabelClass;
    let subjectInputId;
    if (this.state.subjectInputError) {
      subjectSecondaryLabelClass = "newFeedbackSubjectSecondaryLabelUserError";
      subjectInputId = "subjectInputUserError";
    } else {
      subjectSecondaryLabelClass = "newFeedbackSecondaryLabel";
      subjectInputId = "subjectInput";
    }

    let descriptionSecondaryLabelClass;
    let descriptionInputId;
    if (this.state.descriptionInputError) {
      descriptionSecondaryLabelClass =
        "newFeedbackDescriptionSecondaryLabelUserError";
      descriptionInputId = "descriptionInputUserError";
    } else {
      descriptionSecondaryLabelClass = "newFeedbackSecondaryLabel";
      descriptionInputId = "descriptionInput";
    }

    let projectSecondaryLabelClass;
    let projectInputId;
    if (this.state.projectInputError) {
      projectSecondaryLabelClass = "newFeedbackProjectSecondaryLabelUserError";
      projectInputId = "projectInputUserError";
    } else {
      projectSecondaryLabelClass = "newFeedbackSecondaryLabel";
      projectInputId = "projectInput";
    }

    return (
      <div className="newFeedbackContainer">
        <div className="newFeedbackTitleContainer">
          <h2 className="newFeedbackTitle">Provide Feedback</h2>
        </div>
        <form
          className="formFeedbackContainer"
          onSubmit={this.handleNewFeedbackSubmit}
        >
          <div className="newFeedbackSubjectLabelContainer">
            <p className="newFeedbackPrimaryLabel">Subject</p>
            <p className={subjectSecondaryLabelClass}>
              Must be betweeen 5-40 characters.
            </p>
          </div>
          <div className="newFeedbackSubjectContainer">
            <input
              id={subjectInputId}
              type="text"
              placeholder="Brief summary"
              value={this.state.subject}
              onChange={this.handleSubjectChange}
              required
            />
          </div>
          <div className="newFeedbackDescriptionLabelContainer">
            <p className="newFeedbackPrimaryLabel">Description</p>
            <p className={descriptionSecondaryLabelClass}>
              Must be between 10-200 characters.
            </p>
          </div>
          <div className="newFeedbackDescriptionContainer">
            <textarea
              id={descriptionInputId}
              placeholder="Details you may want to provide"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              required
            />
          </div>
          <div className="newFeedbackProjectLabelContainer">
            <p className="newFeedbackPrimaryLabel">Project</p>
            <p className={projectSecondaryLabelClass}>
              Specify the project associated with your feedback.
            </p>
          </div>
          <div className="newFeedbackProjectContainer">
            <select
              id={projectInputId}
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
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default NewFeedback;
