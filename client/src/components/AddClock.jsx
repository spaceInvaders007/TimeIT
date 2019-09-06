import React from "react";
import styled from "styled-components";

class AddClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerName: ""
    };
  }
  handleChange(e) {
    this.setState({ timerName: e.target.value });
  }
  addClock(e) {
    e.preventDefault();
    this.props.add(this.state.timerName);
    this.props.addHandler(e);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addClock.bind(this)}>
          <input onChange={this.handleChange.bind(this)} />
          <input type="submit" value="Add a Timer" />
        </form>

        {/* <button onClick={this.removeHandler}>Remove</button> */}
      </div>
    );
  }
}

export default AddClock;
