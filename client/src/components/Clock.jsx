import React from "react";
import styled from "styled-components";

class Clock extends React.Component {
  state = {
    status: false,
    runningTime: 0,
    display: "flex",
    timers: this.props.timers,
    timerName: this.props.timers[this.props.timers.length - 1].timer,
    seconds: 0,
    minutes: 0,
    hours: 0
  };

  handleSave = async e => {
    e.preventDefault();
    const response = await fetch("/timers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.timerName,
        hours: ("0" + this.state.hours).slice(-2),
        minutes: ("0" + this.state.minutes).slice(-2),
        seconds: ("0" + this.state.seconds).slice(-2)
      })
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  // handleClick = () => {
  //   this.setState(state => {
  //     if (state.status) {
  //       clearInterval(this.timer);
  //     } else {
  //       const startTime = Date.now() - this.state.runningTime;
  //       this.timer = setInterval(() => {
  //         this.setState({ runningTime: Date.now() - startTime });
  //       });
  //     }
  //     return { status: !state.status };
  //   });
  // };
  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        this.timer = setInterval(() => {
          this.setState({ seconds: this.state.seconds + 1 });
          if (this.state.seconds === 60) {
            this.setState({
              seconds: 0,
              minutes: this.state.minutes + 1
            });
          }
          if (this.state.minutes === 60) {
            this.setState({
              minutes: 0,
              hours: this.state.hours + 1
            });
          }
        }, 1000);
      }
      return { status: !state.status };
    });
  };
  handleReset = () => {
    clearInterval(this.timer); // new
    this.setState({ runningTime: 0, status: false });
  };
  handleRemove = () => {
    this.setState({
      display: "none"
    });
  };
  handleChange(e) {
    this.setState({ timerName: e.target.value });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { status, runningTime, timerName } = this.state;
    // let centiseconds = ("0" + (Math.floor(runningTime / 10) % 100)).slice(-2);
    // let seconds = ("0" + (Math.floor(runningTime / 1000) % 60)).slice(-2);
    let seconds = ("0" + `${this.state.seconds}`).slice(-2);
    let minutes = ("0" + `${this.state.minutes}`).slice(-2);
    let hours = ("0" + `${this.state.hours}`).slice(-2);
    return (
      <div>
        <StopWatch style={{ display: this.state.display }}>
          <TimerName>{`${timerName}`}</TimerName>
          <Hours>{`${hours} :`}</Hours>
          <Minutes>{`${minutes} :`}</Minutes>
          <Seconds>{`${seconds}`}</Seconds>

          <button onClick={this.handleClick}>
            {status ? "Pause" : "Start"}
          </button>
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleRemove.bind(this)}>Remove</button>
          <button onClick={this.handleSave.bind(this)}>Save</button>
        </StopWatch>
      </div>
    );
  }
}

export default Clock;

const StopWatch = styled.div`
  display: flex;
  justify-content: center;
`;

const Hours = styled.div`
  width: 30px;
`;

const Minutes = styled.div`
  width: 30px;
`;

const Seconds = styled.div`
  width: 30px;
`;

const TimerName = styled.div``;
