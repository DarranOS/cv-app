import React from "react";

class School extends React.Component {
  constructor() {
    super();
    this.state = {
      school: "",
      yearGrad: "",
      qual: "",
      schoolEntry: "",
      yearGradEntry: "",
      qualEntry: "",
    };
  }

  handleSchoolChange = (e) => {
    this.setState({
      schoolEntry: e.target.value,
    });
  };
  handleYearChange = (e) => {
    this.setState({
      yearGradEntry: e.target.value,
    });
  };
  handleQualChange = (e) => {
    this.setState({
      qualEntry: e.target.value,
    });
  };

  saveSchool = (e) => {
    this.setState(
      {
        school: this.state.schoolEntry,
        yearGrad: this.state.yearGradEntry,
        qual: this.state.qualEntry,
      },
      () => console.dir(this.state)
    );
  };

  render() {
    return (
      <div>
        <h4>Enter Schools Details</h4>

        <form onSubmit={this.onSubmit}>
          <label htmlFor="schoolEntry">School Name</label>
          <input
            onChange={this.handleSchoolChange}
            type="text"
            name="schoolEntry"
            placeholder="Enter School Name"
          ></input>
          <label htmlFor="yearEntry">Years Graduation</label>
          <input
            onChange={this.handleYearChange}
            type="text"
            name="yearEntry"
            placeholder="Enter Graduation Year"
          ></input>

          <label htmlFor="qualEntry">Qualification Earned</label>
          <input
            onChange={this.handleQualChange}
            type="text"
            name="qualEntry"
            placeholder="Enter Qualification Earned"
          ></input>
        </form>
      </div>
    );
  }
}

export default School;
