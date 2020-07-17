import React from "react";
import { createStore } from "redux";
interface State {
  counter: number;
}
interface Props {}
interface Action {
  type: string;
  payload?: any;
}
function counter(state = 0, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
  return state;
}
const store = createStore(counter);
store.subscribe(() => { console.log(store.getState()) });
export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  _increment = () => {
    console.log(store.dispatch({ type: "INCREMENT" }));
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Baisc Counter App with Redux</h1>
        <div style={{ height: "50px" }}>
          <h2>count: {this.state.counter}</h2>
        </div>
        <button onClick={this._increment}>Increment Counter</button>
      </div>
    );
  }
}

export default App;
