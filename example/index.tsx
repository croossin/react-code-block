import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Codeblock from "../.";
import "./tailwind.css";

const codeBlock = `
const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}
`;

const App = () => {
  return (
    <div className="h-full w-full p-8 ">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col space-y-8">
          <div className="space-y-2">
            <h1>Regular</h1>
            <Codeblock
              code={codeBlock}
              language="tsx"
              onCopy={(value) => {
                console.log(value);
              }}
            />
          </div>
          <div className="space-y-2">
            <h1>With filename</h1>
            <Codeblock
              code={codeBlock}
              language="tsx"
              filename="MyComponent.tsx"
              onCopy={(value) => {
                console.log(value);
              }}
            />
          </div>
          <div className="space-y-2">
            <h1>With highlighted lines</h1>
            <Codeblock
              code={codeBlock}
              language="tsx"
              filename="MyComponent.tsx"
              highlightLines={[1, 7]}
              onCopy={(value) => {
                console.log(value);
              }}
            />
          </div>
          <div className="space-y-2">
            <h1>With no line numbers</h1>
            <Codeblock
              code={codeBlock}
              language="tsx"
              filename="MyComponent.tsx"
              showLineNumbers={false}
              onCopy={(value) => {
                console.log(value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
