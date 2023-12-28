import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Codeblock from "../.";

const App = () => {
  return (
    <div>
      <Codeblock />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
