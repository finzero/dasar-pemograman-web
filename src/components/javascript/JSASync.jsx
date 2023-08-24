import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';
import syncAsyncImage from '../../assets/async-sync-diagram.png';

const JSASync = () => {
  return (
    <Section id="js-sync-async" title="Sync & Async">
      <div className="card-content bg-white b-1">
        <p>
          <i>
            Javascript adalah bahasa pemrograman yang Synchronous,
            single-threaded. hanya dapat melakukan satu oparasi dalam satu waktu
          </i>
        </p>
        <img src={syncAsyncImage} alt="Javascript flow" srcSet="" />
        <div className="h4 mt-4">Sync (Synchronous)</div>
        <p>
          Kode sinkron berarti kode dieksekusi satu per satu dalam urutan yang
          ditentukan. Jika ada tugas atau operasi yang memakan waktu, kode
          selanjutnya akan ditunda hingga tugas tersebut selesai. Ini dapat
          mengakibatkan aplikasi tidak responsif selama tugas yang memakan waktu
          sedang berjalan.
        </p>
        <HighlightSyntax lang={'javascript'}>{`console.log("Kode 1");
console.log("Kode 2");
console.log("Kode 3");`}</HighlightSyntax>
        <div className="h4 mt-4">Async (Asynchronous)</div>
        <p>
          Kode asynchronous memungkinkan kode untuk berjalan secara bersamaan
          tanpa harus menunggu kode/logic yang sebelumnya selesai sebelum
          menjalankan yang lain. Ini berguna ketika ada kode yang memakan waktu
          seperti request API. Dengan menggunakan{' '}
          <b>callback, Promise, atau async/await</b>, kamu dapat mengatur
          bagaimana tugas tersebut akan ditangani setelah selesai.
        </p>
        <HighlightSyntax lang={'javascript'}>{`console.log("Kode 1");

setTimeout(() => {
    console.log("Kode 2 (setelah delay 1 detik)");
}, 1000);

console.log("Kode 3");`}</HighlightSyntax>
        <div className="h4 mt-4">Promise</div>
        <p>Promise merupakan salah satu fitur untuk operasi Asynchronous</p>
        <p>
          Fitur ini seperti namanya yang berarti “Janji”. dalam contoh kasus
          sederhana nya, Misal kita memesan sebuah kopi pada pelayan coffe shop,
          secara tidak langsung pelayan berjanji mengantarkan pesanan tersebut
          bila pesanan tersedia, akan tetapi janji tersebut bisa tidak terpenuhi
          apabila kondisinya tidak memungkinkan contoh nya, jika kopi habis atau
          mesin kopi tidak bisa di operasikan.
        </p>
        <p>Promise memiliki 3 status, yaitu:</p>
        <ul>
          <li>
            <b>pending</b>: Janji sedang dalam proses
          </li>
          <li>
            <b>fulfilled</b>: Berarti janji telah sukses terpenuhi.
          </li>
          <li>
            <b>rejected</b>: Berarti janji gagal di diselesaikan.
          </li>
        </ul>
        <HighlightSyntax lang={'javascript'}>
          {`// Fungsi promise untuk mengecek ketersediaan kopi
const cekKopi = (jenisKopi) => {
  const kopiTersedia = ['latte','americano','vanilla latte']
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(kopiTersedia.includes(jenisKopi));
    }, 3000);
  })
}

// Fungsi promise pesanan pelanggan
const pesanKopi = (jenisKopi) => {
  return new Promise((resolve, reject) => {
    cekKopi(jenisKopi).then((kopiTesedia)=>{
      if (kopiTesedia){
        resolve('kopi bisa dibuatkan')
      } else {
        reject('kopi tidak tersedia')
      }
    })
  });
}

// memanggil fungsi promise
pesanKopi('vanilla lattes')
.then((response) => { 
  console.log('logic akan di panggil ketika resolve:', response);
})
.catch(error => {
  console.error('logic akan di panggil ketika reject:', error)
})
.finally(()=>{
  console.info('logic yang akan selalu dieksekusi terlelpas resolve atau reject')
})`}
        </HighlightSyntax>
        <div className="h4 mt-4">Async</div>
        <p>
          Async/Await adalah sintaks khusus untuk memudahkan bekerja dengan
          promise. Async akan membuat fungsi mengembalikan sebuah promise.
        </p>
        <HighlightSyntax
          lang={'javascript'}
          title={'async'}
        >{`async function f() {
  return 1;
}

// syntax diatas bisa ditulis juga seperti berikut
async function f() {
  return Promise.resolve(1);
}

f().then((response)=>console.log(response))`}</HighlightSyntax>
        <div className="h4 mt-4">Await</div>
        <HighlightSyntax lang={'javascript'} title={'await'}>
          {`// hanya bisa dijalankan didalam fungsi async
let value = await promise;`}
        </HighlightSyntax>
        <HighlightSyntax lang={'javascript'} title={'await'}>
          {`// Fungsi promise untuk mengecek ketersediaan kopi
async function cekKopi(jenisKopi) {
  const kopiTersedia = ['latte', 'americano', 'vanilla latte'];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(kopiTersedia.includes(jenisKopi));
    }, 3000);
  });
}

// Fungsi promise pesanan pelanggan
async function pesanKopi(jenisKopi) {
  const kopiTersedia = await cekKopi(jenisKopi);
  if (kopiTersedia) {
    return 'kopi bisa dibuatkan';
  }
  throw 'kopi tidak tersedia';
}

// memanggil fungsi promise
pesanKopi('vanilla latte')
  .then((response) => {
    console.log('logic akan di panggil ketika resolve:', response);
  })
  .catch((error) => {
    console.error('logic akan di panggil ketika reject:', error);
  })
  .finally(() => {
    console.info(
      'logic yang akan selalu dieksekusi terlelpas resolve atau reject'
    );
  });`}
        </HighlightSyntax>
      </div>
    </Section>
  );
};

export default JSASync;
