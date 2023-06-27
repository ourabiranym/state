import React from "react";
import "./App.css";
import Counter from "./components/profile/Counter.jsx";

class App extends React.Component {
  state = {
    show: true,
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <button
          onClick={this.handleShowPerson}
         
        >
          Toggle
        </button>

        {this.state.show ? <Counter /> : null}
      </>
    );
  }
}

export default App;
