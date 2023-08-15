import React from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const JSTryCatch = () => {
  return (
    <Section id="js-try-catch" title="Handle error pada javascript">
      <div className="card-content bg-white b-1">
        <HighlightSyntax lang={'javascript'}>
          {`try {
    // Blok kode logic
    const result = 10 / 0; // Membuat sebuah pembagian dengan nol
    console.log(result);
} catch (error) {
    // Blok yang dieksekusi jika logic di atas terjadi error
    console.error('Error:', error.message);
} finally {
    // Blok ini selalu dieksekusi, terlepas dari apakah ada error atau tidak
    console.log('saya selalu di eksekusi');
}`}
        </HighlightSyntax>
      </div>
    </Section>
  );
};

export default JSTryCatch;
