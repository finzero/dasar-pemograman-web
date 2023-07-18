import React from 'react';
import banGoodyear from '../../assets/ban-goodyear.png';
import '../../assets/css/animation.css';
import HighlightSyntax from '../HighlightSyntax';

const CSSAnimation = () => {
  return (
    <section className="section">
      <div role="button" className="title">
        Animasi dengan css
      </div>
      <div className="flex flex-col gap-1">
        <div>
          <p>
            Kita bisa membuat sebuah object bergerak, berubah bentuk dan atau
            berubah warna dengan menggunakan CSS
          </p>
        </div>
        <div className="card-content bg-white b-1">
          <div className="mb-1">
            <b>Properti Animasi Pada CSS</b>
            <ul>
              <li>
                <code className="text-red">transition-duration:</code> Durasi
                transisi dari posisi awal ke posisi akhir
              </li>
              <li>
                <code className="text-red">transition-timing-function:</code>{' '}
                Jenis transisi yang digunakan ketika transisi berjalan
                <code className="text-red">
                  {' '}
                  linear | ease | ease-in | ease-out | ease-in-out
                </code>
              </li>
              <li>
                <code className="text-red">transition-delay:</code> Waktu tunggu
                sebelum animasi berjalan
              </li>
              <li>
                <code className="text-red">transition-property:</code> jenis
                transisi yang akan dijalankan{' '}
                <code className="text-red">
                  {' '}
                  all | color | margin | background
                </code>
              </li>
              <li>
                <code className="text-red">animation-duration:</code>
              </li>
              <li>
                <code className="text-red">animation-direction:</code>
              </li>
              <li>
                <code className="text-red">animation-iteration-count:</code>
              </li>
              <li>
                <code className="text-red">animation-timing-function:</code>
              </li>
              <li>
                <code className="text-red">animation-fill-mode:</code>
              </li>
              <li>
                <code className="text-red">keyframes:</code>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div
          className="card-content bg-white b-1"
          style={{ overflow: 'hidden' }}
        >
          <div className="mb-1">
            <b>Animasi Berputar</b>
          </div>
          <div className="flex gap-1">
            <div>
              <img
                className="spinning-image"
                width={200}
                src={banGoodyear}
                alt=""
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <HighlightSyntax>
                {`.spinning-image {
  animation: spin 4s linear infinite;
}
  
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
`}
              </HighlightSyntax>
              <HighlightSyntax>
                {`<img
  class="spinning-image"
  width=200
  src="ban.jpg"
/>`}
              </HighlightSyntax>
            </div>
          </div>
        </div>
        <div className="card-content bg-white b-1">
          <div className="mb-1">
            <b>Animasi Bergerak</b>
          </div>
          <div className="flex flex-col gap-1">
            <div className="moving-obj-container">
              <div className="moving-obj"></div>
            </div>
            <div className="flex gap-1">
              <HighlightSyntax>
                {`<div className="moving-obj-container">
  <div className="moving-obj"></div>
</div>`}
              </HighlightSyntax>
              <HighlightSyntax>
                {`.moving-obj-container {
  width: 600px;
  height: 100px;
  background: grey;
  position: relative;
  padding: 5px;
}

.moving-obj-container:hover>.moving-obj {
  transform: translateX(500px);
  background-color: orange;
  border-radius: 50%
}

.moving-obj {
  transition-duration: 2s;
  transition-property: all;
  transition-timing-function: ease;
  position: absolute;
  height: 100px;
  width: 100px;
  background: yellow;
}`}
              </HighlightSyntax>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSSAnimation;
