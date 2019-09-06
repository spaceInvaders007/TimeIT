import React from "react";
import styled from "styled-components";

// function Nav (props) {
//   return <div> Hello {props.name}</div>
// }

class Nav extends React.Component {
  render() {
    return (
      <div>
        <NavWrapper>
          <Item1>Item 1</Item1>
          <Item2>Item 2</Item2>
        </NavWrapper>
      </div>
    );
  }
}

// class Nav extends React.Component {
//   render () {
//     return (
//       <div className="navigator">
//         hello
//           <a>
//           Github
//           </a>
//           <a>

//           </a>
//       </div>
//     )
//   }

// }

export default Nav;

const NavWrapper = styled.div`
  color: black;
  display: flex;
  justify-content: space-around;
`;
const Item1 = styled.div``;

const Item2 = styled.div``;
