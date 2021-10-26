import React from "react";

class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameEntry: "",
      email: "",
      emailEntry: "",
      phone: "",
      phoneEntry: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({
      nameEntry: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      emailEntry: e.target.value,
    });
  };

  handlePhoneChange = (e) => {
    this.setState({
      phoneEntry: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState(
      {
        name: this.state.nameEntry,
        email: this.state.emailEntry,
        phone: this.state.phoneEntry,
      },
      () => {
        console.dir(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <h2>Personal Details</h2>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="nameEntry">Name</label>
          <input
            onChange={this.handleNameChange}
            type="text"
            name="nameEntry"
            placeholder="Enter your name"
          ></input>

          <label htmlFor="emailEntry">Email</label>
          <input
            onChange={this.handleEmailChange}
            type="text"
            name="emailEntry"
            placeholder="Enter your email"
          ></input>

          <label htmlFor="numberEntry">Phone Number</label>
          <input
            onChange={this.handlePhoneChange}
            type="text"
            name="numberEntry"
            placeholder="Enter your number"
          ></input>
          <button type="submit">Add name</button>
        </form>
      </div>
    );
  }
}

export default PersonalDetails;
