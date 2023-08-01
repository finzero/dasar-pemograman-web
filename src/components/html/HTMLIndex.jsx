import React from 'react';
import Section from '../Section';
import folderHtml from '../../assets/folder-html.png';

const HTMLIndex = () => {
  return (
    <Section id="index-html" title="index.html">
      <div className="card-content bg-white b-1">
        <b>index.html</b> adalah file yang dijadikan default pada sebuah folder.
        jika kalian mempunyai folder dengan isi sebagai berikut:
        <div className="mt-1">
          <img src={folderHtml} alt="" />
        </div>
        <br />
        kemudian kalian jalankan html tersebut dengan webserver seperti nginx
        atau apache maka tanpa harus menuliskan nama file pada url browser
      </div>
    </Section>
  );
};

export default HTMLIndex;
