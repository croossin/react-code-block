"use client";
import { useTheme } from "next-themes";
import Codeblock from "../../../.";
import { PrismTheme, themes } from "prism-react-renderer";
import { useMemo } from "react";

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
  const { resolvedTheme, setTheme } = useTheme();

  const theme: PrismTheme = useMemo(() => {
    return resolvedTheme === "dark" ? themes.vsDark : themes.vsLight;
  }, [resolvedTheme]);

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-slate-800">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col space-y-8 py-8">
          <button
            type="button"
            className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={() => {
              setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }}
          >
            Toggle theme
          </button>
          <div className="space-y-2">
            <h1>Regular</h1>
            <Codeblock
              code={codeBlock}
              theme={theme}
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
              theme={theme}
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
              theme={theme}
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
              theme={theme}
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
