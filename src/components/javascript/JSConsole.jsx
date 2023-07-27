import React from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const JSConsole = () => {
  return (
    <Section id="js-console" title="Output">
      <div className="card-content bg-white b-1 mt-1">
        perintah console digunakan untuk mencetak data pada console browser.
        <HighlightSyntax>{`console.log('cetak log data pada console');
console.info('cetak info pada console');
console.error('cetak error pada console');`}</HighlightSyntax>
      </div>
    </Section>
  );
};

export default JSConsole;
