import React from "react";
import styled from "styled-components";
import Clock from "./Clock.jsx";
import AddClock from "./AddClock.jsx";

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
  // handleChange(e) {
  //   this.setState({ timerName: e.target.value });
  // }

  render() {
    var childs = [];
    for (var i = 0; i < this.state.fieldCount; i++) {
      childs.push(<Clock timers={this.state.timers} key={i} />);
    }
    return (
      <div className="navigator">
        {childs}
        {/* <form onSubmit={this.add}>
          <input onChange={this.handleChange.bind(this)} />
          <input type="submit" value="Add a Timer" />
        </form>

        <button onClick={this.removeHandler}>Remove</button> */}
        <AddClock add={this.add.bind(this)} addHandler={this.addHandler} />
      </div>
    );
  }
}

export default Clocks;

const ClockWrapper = styled.div``;
