import React from "react";
import "./tailwind.css";
import { Highlight, HighlightProps, themes } from "prism-react-renderer";
import clsx from "clsx";

interface Props extends Omit<HighlightProps, "children"> {
  highlightLines?: Array<number>;
  filename?: string;
  showLineNumbers?: boolean;
  onCopy?: (value: string) => void;
}

function Codeblock({
  filename,
  highlightLines,
  showLineNumbers = true,
  onCopy,
  ...props
}: Props) {
  return (
    <div>
      {filename && (
        <div className="flex h-12 justify-between rounded-t-lg border bg-[#fafafa] dark:border-zinc-600 dark:bg-[#1e1e1e]">
          <div className="my-auto pl-4 text-base text-zinc-600 dark:text-zinc-400">
            <span>{filename}</span>
          </div>
          <div className="my-auto pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-copy my-auto mt-1 h-5 w-5 text-zinc-500 transition-colors duration-300 hover:cursor-pointer hover:text-zinc-800 dark:hover:text-white"
              onClick={() => {
                if (onCopy) {
                  navigator.clipboard.writeText(props.code);
                  onCopy(props.code);
                }
              }}
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </div>
        </div>
      )}
      <div
        className={clsx(
          "bg-card text-card-foreground rounded-b-lg border-b border-l border-r shadow-sm dark:border-zinc-600",
          filename === undefined && "rounded-t-lg border-t"
        )}
      >
        <Highlight
          {...props}
          code={props.code.replace(/^\n+/, "").replace(/\n+$/, "")}
          theme={props.theme ?? themes.vsLight}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <div className="group/editor relative">
              {filename === undefined && (
                <div className=" opacity-0 transition-opacity duration-300 group-hover/editor:opacity-80">
                  <button className="group/editorcopybutton absolute right-3 top-3  hidden rounded-lg border bg-white  px-2 py-2 transition-all duration-300 hover:cursor-pointer hover:border-zinc-600 hover:text-zinc-800 group-hover/editor:block dark:border-zinc-600 dark:bg-zinc-600 dark:hover:border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-copy h-4 w-4 text-zinc-500 transition-colors duration-300 group-hover/editorcopybutton:text-zinc-800 dark:text-zinc-300 dark:group-hover/editorcopybutton:text-white"
                      onClick={() => {
                        if (onCopy) {
                          navigator.clipboard.writeText(props.code);
                          onCopy(props.code);
                        }
                      }}
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  </button>
                </div>
              )}
              <pre
                style={style}
                className={clsx(
                  "overflow-x-scroll py-4 rounded-b-lg",
                  filename === undefined && "rounded-t-lg"
                )}
              >
                {tokens.map((line, i) => {
                  const shouldHighlight = highlightLines
                    ? highlightLines.includes(i + 1)
                    : false;
                  return (
                    <div
                      key={i}
                      className={clsx(
                        shouldHighlight && "bg-[#e0f0ff] dark:bg-[#0f2f57]"
                      )}
                    >
                      <div className="flex flex-row">
                        <div
                          {...getLineProps({ line })}
                          className="flex flex-row"
                        >
                          {shouldHighlight && (
                            <div className="h-full w-1 bg-[#0068d6] dark:bg-[#52a8ff]" />
                          )}
                          <div className="px-4">
                            {showLineNumbers && (
                              <span className="mr-4 select-none">{i + 1}</span>
                            )}
                            {line.map((token, key) => (
                              <span key={key} {...getTokenProps({ token })} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </pre>
            </div>
          )}
        </Highlight>
      </div>
    </div>
  );
}

export default Codeblock;
