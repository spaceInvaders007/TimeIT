import React from 'react';

import './App.css';
import Nav from './components/Nav.jsx';
import Clocks from './components/Clocks.jsx';




class App extends React.Component {
  render() {
    return (
      <div className="App">

          <p>
            Time IT
          </p>

        <div>
            <Nav name="SARA"/>
        </div>
        <div>
          <Clocks/>
        </div>

      </div>
    );
  }
}

export default App;

