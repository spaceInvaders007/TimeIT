import React from "react";
import styled from "styled-components";
import Clock from "./Clock.jsx";

class Clocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldCount: 0,
      timers: []
    };
    this.addHandler = this.addHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }

  addHandler(event) {
    event.preventDefault();
    this.setState({
      fieldCount: this.state.fieldCount + 1
    });
  }

  removeHandler(event) {
    this.setState({
      fieldCount: this.state.fieldCount - 1
    });
  }
  add(timer) {
    this.setState({
      timers: this.state.timers.concat({ timer })
    });
  }
  handleChange(e) {
    this.setState({ timerName: e.target.value });
  }

  render() {
    var childs = [];
    for (var i = 0; i < this.state.fieldCount; i++) {
      childs.push(<Clock timerName={this.state.timerName} />);
    }
    return (
      <div className="navigator">
        {childs}
        <form onSubmit={this.addHandler}>
          <input onChange={this.handleChange.bind(this)} />
          <input type="submit" value="Add a Timer" />
        </form>

        <button onClick={this.removeHandler}>Remove</button>
        {/* <a>
          Add Clock
        </a>
        <ClockWrapper>
          <Clock />
        </ClockWrapper> */}
      </div>
    );
  }
}

export default Clocks;

const ClockWrapper = styled.div``;
