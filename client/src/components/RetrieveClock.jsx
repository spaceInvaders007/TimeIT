import React from "react";
//import styled from "styled-components";

class RetrieveClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: []
    };
    this.retrieveTimer = this.retrieveTimer.bind(this);
  }

  async retrieveTimer() {
    try {
      await fetch("/timers/:id");
      let response = await fetch("/timers/:id");
      console.log(response);
    } catch (err) {
      console.lerror("Couldn't fetch one timer");
    }
  }

  render() {
    return <div>hello this is retrieveClocks</div>;
  }
}

export default RetrieveClock;
