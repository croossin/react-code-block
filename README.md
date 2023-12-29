# React Code Block

[![npm version](https://badge.fury.io/js/@roo-app%2Freact-code-block.svg)](https://badge.fury.io/js/@roo-app%2Freact-code-block)

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Demo](#demo)

#### Installation

Install with your favorite package manager

```bash
yarn add @roo-app/react-code-block
-- or --
pnpm i @roo-app/react-code-block
-- or --
npm i @roo-app/react-code-block
```

#### Usage

In order to use CodeBlock, simply import and use in a component:

```typescript
import CodeBlock from "@roo-app/react-code-block";
import { themes } from "prism-react-renderer";

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
function ReactCodeBlockExample() {
  return (
    <CodeBlock
      code={codeBlock}
      theme={themes.vsDark}
      language="tsx"
      onCopy={(value) => {
        console.log(value);
      }}
    />
  );
}

export default ReactCodeBlockExample;
```

#### Props

`CodeBlock` properties extends [HighlightProps](https://github.com/FormidableLabs/prism-react-renderer/blob/f27b612fe71865bde05f66faa3902b4daadce210/packages/prism-react-renderer/src/types.ts#L54-L60) from `prism-react-renderer`. Outside of the existing properties we expose:

| Prop name         | Type                      | Description                                       | Example    | Required |
| ----------------- | ------------------------- | ------------------------------------------------- | ---------- | -------- |
| `highlightLines`  | `Array<number>`           | The line numbers you want to highlight            | [1,5,7]    | No       |
| `filename`        | `string`                  | The filename to show at the top of the code block | MyFile.tsx | No       |
| `showLineNumbers` | `boolean`                 | To show line number or not                        | `false`    | No       |
| `onCopy`          | `(value: string) => void` | Callback if user taps on the copy logo            |            | No       |

#### Demo

You can find a demo on [my website](https://roo.app/code-block)
