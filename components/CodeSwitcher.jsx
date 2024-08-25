import React, { useState } from "react";

const CodeSwitcher = ({ typescriptCode, javascriptCode }) => {
  const [language, setLanguage] = useState("typescript");

  return (
    <div>
      <div>
        <button
          onClick={() => setLanguage("typescript")}
          className={language === "typescript" ? "active" : ""}
        >
          TypeScript
        </button>
        <button
          onClick={() => setLanguage("javascript")}
          className={language === "javascript" ? "active" : ""}
        >
          JavaScript
        </button>
      </div>
      <pre>
        <code>
          {language === "typescript" ? typescriptCode : javascriptCode}
        </code>
      </pre>
    </div>
  );
};

export default CodeSwitcher;
