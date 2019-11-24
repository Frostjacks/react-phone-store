import React from "react";

class Button extends React.Component {
  state = {
    buttons: [
      "(",
      "CE",
      ")",
      "C",
      "1",
      "2",
      "3",
      "+",
      "4",
      "5",
      "6",
      "-",
      "7",
      "8",
      "9",
      "*",
      ".",
      "0",
      "=",
      "/"
    ]
  };

  render() {
    return (
      <div className="button">
        {this.state.buttons.map(button => {
          return (
            <button
              onClick={e => this.props.onClick(e.target.name)}
              name={button}
              key={button}
            >
              {button}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Button;
