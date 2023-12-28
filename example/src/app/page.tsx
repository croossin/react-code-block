"use client";
import Codeblock from "../../../.";

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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
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
    </main>
  );
}