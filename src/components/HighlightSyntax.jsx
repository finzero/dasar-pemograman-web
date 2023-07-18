import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const HighlightSyntax = ({ children }) => (
  <div className="syntax-container">
    <SyntaxHighlighter
      language="html"
      style={atomOneDarkReasonable}
      showInlineLineNumbers
      wrapLongLines
    >
      {children}
    </SyntaxHighlighter>
  </div>
);

export default HighlightSyntax;
