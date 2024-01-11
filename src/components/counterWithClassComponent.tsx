import React from "react";

class CounterWithClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    console.log(this);

    return (
      <button
        className="py-1 px-3 rounded bg-gray-300 "
        onClick={() => this.setState({ count: count + 1 })}
      >
        {count}
      </button>
    );
  }
}

export default CounterWithClass;
