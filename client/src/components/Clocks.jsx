import React from "react";
//import styled from "styled-components";
import Clock from "./Clock.jsx";
import AddClock from "./AddClock.jsx";
import SavedTimers from "./SavedTimers.jsx";
import RetrievedClock from "./RetrievedClock.jsx";

class Clocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldCount: 0,
      timers: [],
      savedTimers: [],
      retrievedTimers: []
    };
    this.addHandler = this.addHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    try {
      await fetch("/timers");
      let response = await fetch("/timers");
      let timers = await response.json();
      this.setState({ savedTimers: timers });
    } catch (err) {
      console.error("Encountered error fetching timers", err);
    }
  }

  async componentDidUpdate() {
    try {
      await fetch("/timers");
      let response = await fetch("/timers");
      let timers = await response.json();
      this.setState({ savedTimers: timers });
    } catch (err) {
      console.error("error updating saved Timers", err);
    }
  }

  // async handleDelete(id) {
  //   console.log("this is delete");
  //   await fetch("/timers/:id");
  //   const response = await fetch("/timers/:id", {
  //     method: "DELETE",
  //     body: JSON.stringify({ id })
  //   });
  // }
  async handleDelete(id) {
    try {
      await fetch("/timers/" + id, {
        method: "DELETE",
        body: JSON.stringify({ id })
      });
    } catch (err) {
      console.log(err, "Couldn't delete one timer");
    }
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

  handleSavedTimersClick(retrievedTimer) {
    console.log(retrievedTimer)
    //alert("this shit has been clicked");
    // this.setState({
    //   retrievedTimers: this.state.retrievedTimers.concat({ retrievedTimer })
    // });
    this.setState({
      retrievedTimers: [...this.state.retrievedTimers, retrievedTimer ]
    });
  }

  render() {
    var childs = [];
    for (var i = 0; i < this.state.fieldCount; i++) {
      childs.push(
        <Clock
          timers={this.state.timers}
          savedTimers={this.state.savedTimers}
          key={i}
        />
      );
    }
    var retrievedClocks = [];
      for (var i = 0; i < this.state.retrievedTimers.length; i++) {
      retrievedClocks.push(
        <RetrievedClock 
          key={i}
          retrievedTimers={this.state.retrievedTimers}
        />
      );}

    return (
      <div className="navigator">
        {childs}
        {retrievedClocks}
        <div className="App-intro">
          <ul>
            {this.state.savedTimers.map(timer => (
              <SavedTimers
                key={timer.id}
                timer={timer}
                handleSavedTimersClick={this.handleSavedTimersClick.bind(this)}
                retrievedTimers={this.state.retrievedTimers}
                handleDelete={this.handleDelete}
              />
            ))}
          </ul>
        </div>
        <AddClock add={this.add.bind(this)} addHandler={this.addHandler} />
        {/* <RetrieveClock retrievedTimers={this.state.retrievedTimers} /> */}
      </div>
    );
  }
}

export default Clocks;
