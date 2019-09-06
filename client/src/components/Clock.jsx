import React from "react";
import styled from "styled-components";

class Clock extends React.Component {
  state = {
    status: false,
    runningTime: 0,
    display: "flex",
    timers: this.props.timers,
    timerName: this.props.timers[this.props.timers.length - 1].timer
  };
  
  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime });
        });
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
    const { timerName } = this.state;

    const { status, runningTime } = this.state;
    let centiseconds = ("0" + (Math.floor(runningTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(runningTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(runningTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(runningTime / 3600000)).slice(-2);
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
