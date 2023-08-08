import React from 'react';
import HighlightSyntax from '../HighlightSyntax';
import Section from '../Section';
import '../../assets/css/flex.css';

const CSSFlex = () => {
  return (
    <Section id="css-flex" title="CSS Flex">
      <div className="flex flex-col card-content bg-white">
        <div className="h3">Content Alignment</div>
        <HighlightSyntax lang={'html'}>{`<div class='flex-container'>
  <div class='flex-item'></div>
</div>`}</HighlightSyntax>

        <HighlightSyntax lang={'css'}>
          {`.flex-container {
  display: flex;
  width: 400px;
  height: 400px;
  background: yellow;
  /* set element di dalam container ke tengah secara horizontal */
  justify-content: center;
  /* set element di dalam container ke tengah secara vertical */
  align-items: center;
}

.flex-item {
  width: 100px;
  height: 100px;
  background: black;
}`}
        </HighlightSyntax>
        <div class="flex-container">
          <span
            style={{ color: '#000', position: 'absolute', top: 10, left: 10 }}
          >
            flex-container
          </span>
          <div class="flex-item">
            <span
              style={{ color: '#fff', position: 'absolute', top: 40, left: 15 }}
            >
              flex-item
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CSSFlex;
