import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import buttons from '../assets/mac-buttons.png';
import copyIcon from '../assets/copy.png';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

function copy(data) {
  navigator.clipboard.writeText(data);
  toast.success('Copied to clipboard');
}

const HighlightSyntax = ({ title, lang, children }) => (
  <div className="syntax-container">
    <div className="syntax-head">
      <span>
        <img className="left" src={buttons} alt="" srcSet="" />
      </span>
      <span className="syntax-title">{title}</span>
      <img
        className="right"
        role="button"
        src={copyIcon}
        onClick={() => copy(children)}
      />
    </div>
    <SyntaxHighlighter
      language={lang || 'html'}
      style={atomOneDarkReasonable}
      showInlineLineNumbers
      wrapLongLines
    >
      {children}
    </SyntaxHighlighter>
  </div>
);

HighlightSyntax.propTypes = {
  title: PropTypes.string,
  lang: PropTypes.string,
  children: PropTypes.children,
};

export default HighlightSyntax;
