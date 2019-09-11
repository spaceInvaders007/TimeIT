import React from "react";
import styled from "styled-components";

class RetrievedClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      retrievedTimers: this.props.retrievedTimers,
      title: this.props.retrievedTimers[this.props.retrievedTimers.length - 1]
        .title,
      hours: Number(
        this.props.retrievedTimers[this.props.retrievedTimers.length - 1].hours
      ),
      minutes: Number(
        this.props.retrievedTimers[this.props.retrievedTimers.length - 1]
          .minutes
      ),
      seconds: Number(
        this.props.retrievedTimers[this.props.retrievedTimers.length - 1]
          .seconds
      ),
      id: Number(
        this.props.retrievedTimers[this.props.retrievedTimers.length - 1].id
      )
    };
    this.handleRemove = this.handleRemove.bind(this);
    //this.retrieveTimer = this.retrieveTimer.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // async handleDelete(id) {
  //   try {
  //     await fetch("/timers/" + id, {
  //       method: "DELETE",
  //       body: JSON.stringify({ id })
  //     });
  //   } catch (err) {
  //     console.log(err, "Couldn't delete one timer");
  //   }
  // }

  async handleUpdate(id) {
    try {
      console.log("handleupdate is being clicked");
      await fetch("/timers/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: this.state.timerName,
          hours: ("0" + this.state.hours).slice(-2),
          minutes: ("0" + this.state.minutes).slice(-2),
          seconds: ("0" + this.state.seconds).slice(-2),
          id
        })
      });
    } catch (err) {
      console.log(err, "Couldn't update one timer");
    }

    // e.preventDefault();

    // const body = await response.text();
    // console.log(body);
  }

  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        //React really doesn't like this
        // this.setState({ seconds: this.state.seconds + 1 });
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
  handleRemove = () => {
    this.setState({
      display: "none"
    });
    this.props.removeRetrievedClock(this.state.title);
  };
  //this functions works perfectly for retrieving one timer by id
  // async retrieveTimer() {
  //   try {
  //     await fetch("/timers/:id");
  //     let response = await fetch("/timers/:id");
  //     console.log(response);
  //   } catch (err) {
  //     console.lerror("Couldn't fetch one timer");
  //   }
  // }

  render() {
    const { title, hours, minutes, seconds } = this.state;
    const { status } = this.state;
    return (
      <div className="retrieved-clock">
        <StopWatch style={{ display: this.state.display }}>
          <TimerName>{`${title}`}</TimerName>
          <Hours>{`${hours} :`}</Hours>
          <Minutes>{`${minutes} :`}</Minutes>
          <Seconds>{`${seconds}`}</Seconds>
          <button
            onClick={() => {
              this.handleClick();
            }}
          >
            {status ? "Pause" : "Start"}
          </button>
          <button
            onClick={() => {
              this.handleRemove();
            }}
          >
            Remove
          </button>
          <button
            onClick={() => {
              this.handleUpdate(this.state.id);
            }}
          >
            Update
          </button>
        </StopWatch>
      </div>
    );
  }
}

export default RetrievedClock;

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

const StopWatch = styled.div`
  display: flex;
`;
