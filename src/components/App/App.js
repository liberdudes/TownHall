import React from "react";
import * as helper from "../../api/helper";
import SearchBar from "../SearchBar/SearchBar";
import SideBar from "../SideBar/SideBar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleContainerChange = this.handleContainerChange.bind(this);

    this.state = {
      searchInput: "",
      container: "Feedback"
    };
  }

  async componentDidMount() {
    let messages = await helper.getMessages();

    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });

    this.setState({ feedbackCollection: messages });
  }

  handleSearchChange(value) {
    this.setState({ searchInput: value });
  }

  handleContainerChange(value) {
    if (this.state !== value) {
      this.setState({ container: value });
    }
  }

  setupFilters(collection) {
    let filteredFeedback;
    filteredFeedback = this.filterFeedbackBySearch(
      collection,
      this.state.search
    );
    return filteredFeedback;
  }

  filterFeedbackBySearch(collection, search) {
    search = search.toLowerCase();
    return collection.filter(feedback => {
      let subject = feedback.subject.toLowerCase();
      return subject.indexOf(search) !== -1;
    });
  }

  render() {
    // let filteredFeedback = this.setupFilters(this.state.feedbackCollection);
    console.log(this.state.searchInput);

    let container;
    if (this.state.container === "Feedback") {
      container = <p>feedback</p>;
    } else if (this.state.container === "Admin Mode") {
      container = <p>admin</p>;
    } else if (this.state.container === "Statistics") {
      container = <p>statistics</p>;
    } else if (this.state.container === "Settings") {
      container = <p>settings</p>;
    }

    return (
      <div className="grid">
        <div className="sidebar">
          <SideBar
            container={this.state.container}
            onContainerChange={this.handleContainerChange}
          />
        </div>
        <div className="header">
          <SearchBar onSearchChange={this.handleSearchChange} />
        </div>
        <div className="main">{container}</div>
      </div>
    );
  }
}

export default App;
