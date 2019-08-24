import React from 'react';
import styled from 'styled-components';
import Clock from './Clock.jsx';

class Clocks extends React.Component {

  render () {
    return (
      <div className="navigator">
        <a>
          Add Clock
        </a>
        <ClockWrapper>
          <Clock />
        </ClockWrapper>

      </div>
    )
  }

}

export default Clocks;

const ClockWrapper = styled.div `

`