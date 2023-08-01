import React from 'react';
import HighlightSyntax from '../HighlightSyntax';
import Section from '../Section';

const HTMLCaraBuat = () => {
  return (
    <Section id="cara-buat-html" title="Cara membuat HTML">
      <div className="card-content bg-white b-1">
        <HighlightSyntax>
          {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ini adalah halaman contact
</body>
</html>
`}
        </HighlightSyntax>

        <p>
          Kalian bisa copy code di atas, kemudian save dengan nama
          <b> [nama_file].html</b>, misal <b> contact.html</b>
        </p>
        <div className="h3">Beberapa hal yang perlu diperhatikan</div>
        <hr />
        <div>
          <b>1. Gunakan Huruf Kecil untuk tag</b>
          <HighlightSyntax>
            {`<p>text <b>bold</b>, text <i>italic</i>, text <u>underscore</u></p>`}
          </HighlightSyntax>
          hasil:{' '}
          <p>
            text <b>bold</b>, text <i>italic</i>, text <u>underscore</u>
          </p>
        </div>
        <div>
          <b>2. Pastikan Tag ditutup dengan benar</b>
          <HighlightSyntax>
            {`<p>text <b><i><u>bold</u></i></b></p>`}
          </HighlightSyntax>
          hasil:{' '}
          <p>
            text{' '}
            <b>
              <i>
                <u>bold, italic & underscore</u>
              </i>
            </b>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default HTMLCaraBuat;
