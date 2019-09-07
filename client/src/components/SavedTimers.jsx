import React from "react";
//import styled from "styled-components";

class SavedTimers extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     timer: []
  //   };
  // }

  render() {
    const { title } = this.props.timer;
    const { handleSavedTimersClick } = this.props;
    return (
      <div className="retrievedTimer" onClick={handleSavedTimersClick}>
        {title}
      </div>
    );
  }
}

export default SavedTimers;
