import React from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const JSCaraLoad = () => {
  return (
    <Section id="js-cara-load" title="Cara Load Javascript">
      <div className="card-content bg-white b-1 mt-1">
        <p>Ada 2 cara untuk memasukan javascript ke dalam HTML:</p>
        <b>1. Internal Javascript</b>
        <HighlightSyntax>
          {`...
<body>
    <script>
      // code javascript
    </script>
</body>
...`}
        </HighlightSyntax>
        <b>2. External Javascript</b>
        <HighlightSyntax>
          {`...
<body>
    <script src="path/to/script.js"></script>
</body>
...`}
        </HighlightSyntax>
      </div>
    </Section>
  );
};

export default JSCaraLoad;
