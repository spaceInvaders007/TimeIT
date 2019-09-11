import React from "react";
//import RetrievedClock from "./RetrievedClock.jsx";
import styled from "styled-components";

class SavedTimers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "inline"
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  // componentDidUpdate() {

  // this.setState({ retrievedTimers: this.props.retrievedTimers });
  // //   } catch (err) {
  // //     console.error("error updating saved Timers", err);
  // //   }
  // }

  toggleDisplay() {
    this.setState({
      display: "none"
    });
    this.props.handleDelete(this.props.timer.id);
  }
  render() {
    const { timer } = this.props;
    const { title, hours, minutes, seconds } = this.props.timer;
    const { handleSavedTimersClick } = this.props;

    return (
      <Wrapper style={{ display: this.state.display }}>
        <div className="displayedRetrievedTimer">
          <div className="saved-watch-title">{title}</div>
          <div className="saved-watch-time">
            {hours} : {minutes} : {seconds}
          </div>
          <div className="saved-timers-buttons">
            <button
              className="retrievedTimer"
              onClick={() => {
                handleSavedTimersClick(timer);
              }}
            >
              Retrieve
            </button>
            <button
              onClick={() => {
                this.toggleDisplay();
              }}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default SavedTimers;

const Wrapper = styled.div``;
