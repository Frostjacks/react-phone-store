import React, { Component } from "react";
import "./styles.css";
import Output from "./Output";
import Button from "./Button";

class App extends Component {
  state = {
    output: ""
  };

  onClick = button => {
    if (button === "=") this.calculate();
    else if (button === "CE") this.reset();
    else if (button === "C") this.backspace();
    else this.setState({ output: this.state.output + button });
  };

  calculate = () => {
    try {
      this.setState({
        output: eval(this.state.output)
      });
    } catch (e) {
      this.setState({
        output: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      output: ""
    });
  };

  backspace = () => {
    this.setState({
      output: this.state.output.slice(0, -1)
    });
  };

  render() {
    return (
      <div className="app">
        Simple Calculator
        <Output output={this.state.output} />
        <Button onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
