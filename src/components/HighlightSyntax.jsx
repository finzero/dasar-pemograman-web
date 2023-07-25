import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import buttons from '../assets/mac-buttons.png';

const HighlightSyntax = ({ title, children }) => (
  <div className="syntax-container">
    <div className="syntax-head">
      <span>
        <img src={buttons} alt="" srcSet="" />
      </span>
      <span className="syntax-title">{title}</span>
    </div>
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
