import React from "react";
import School from "./School";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      schoolList: ["", ""],
    };
  }

  addAnotherSchool = (e) => {
    <School />;
  };

  render() {
    const schoolNumber = this.state.schoolList.length;

    return (
      <div className="section-education">
        <h2>{schoolNumber}</h2>

        <School />

        <button type="button" onClick={this.addAnotherSchool}>
          Add Another School
        </button>
      </div>
    );
  }
}

export default Education;
