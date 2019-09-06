import React from "react";

import "./App.css";
import Nav from "./components/Nav.jsx";
import Clocks from "./components/Clocks.jsx";

class App extends React.Component {
  //from here added
  // state = {
  //   response: "",
  //   post: "",
  //   responseToPost: ""
  // };

  // componentDidMount() {
  //    this.callApi()
  //      .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch("/api/hello");
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await fetch("/api/world", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ post: this.state.post })
  //   });
  //   const body = await response.text();

  //   this.setState({ responseToPost: body });
  // };

  state = {
    customers: []
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    // this.callBackendAPI()
    //   .then(res => this.setState({ data: res.express }))
    //   .catch(err => console.log(err));
    // fetch("/api/customers")
    //   .then(res => res.json())
    //   .then(customers => this.setState({ customers}, () => console.log('Customers fetched,,,', customers)));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch("/express_backend");
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };

  //until here added
  render() {
    return (
      <div className="App">
        <p>Time IT</p>

        <div>
          <Nav name="SARA" />
        </div>
        <div>
          <Clocks />
        </div>

        {/* // added  */}

        {/* <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
         */}
        {/* <div className="App-intro">
        <ul>
        {this.state.customers.map(customer => <li key={customer.id}>{customer.firstName} {customer.lastName}</li>)}
        </ul>
        </div> */}

        {/* // until here added */}
      </div>
    );
  }
}

export default App;
