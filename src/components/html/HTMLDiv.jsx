import React from 'react';
import Section from '../Section';
import igDobah from '../../assets/layout-post-ig.png';

const HTMLDiv = () => {
  return (
    <Section id="div" title="Mengenal &lt;div&gt;">
      <div className="card-content bg-white b-1 mt-1">
        <p>
          <b>div</b> merupakan singkatan dari <i>division</i> atau
          pengelompokan, di dalam element div kita bisa membungkus beberapa
          element lain. Tujuan dari pengelompokan ini adalah agar
          element-element tersebut dapat di atur secara UI (User Interface)
          sehingga dapat menghasilkan tampilan yang nyaman untuk di lihat
        </p>
        <h3>Beberapa kegunaan tag &lt;div&gt;:</h3>
        <ol>
          <li id="layout">
            <b>Membuat Layout Website</b>
            <p>
              Karena fungsinya yang bisa mengelompokan element, div biasa
              digunakan untuk membuat layout dari sebuah halaman web
            </p>
          </li>
          <li id="shape">
            <b>Membuat sebuah Bentuk</b>
            <p>
              Secara default element html berbentuk kotak, div dengan bantuan
              style bisa dibuat menjadi beberapa bentuk, contohnya frame bulat
              avatar
            </p>
            <div className="flex">
              <div
                style={{
                  borderRadius: '50%',
                  border: '1px solid',
                  width: 100,
                  height: 100,
                  overflow: 'hidden',
                }}
              >
                <img
                  src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg"
                  alt=""
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </li>
          <li>
            <b>Membuat sebuah komponen</b>
            <p>
              karena sifatnya yang bisa mengelompokan element, div sering
              digunakan untuk membuat sebuah komponen dari aplikasi web. berikut
              meupakan contoh post pada instagram:
            </p>
            <img src={igDobah} alt="" />
          </li>
        </ol>
      </div>
    </Section>
  );
};

export default HTMLDiv;
