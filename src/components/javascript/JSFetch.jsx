import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const JSFetch = () => {
  return (
    <Section id="js-fetch" title="Fetch Data">
      <div className="card-content bg-white b-1">
        Sebuah website seringkali menampilkan data-data yang senantiasa berubah
        setiap waktu. Dengan javascript kita bisa mengambail data ke sebuah
        database dengan perantara API.
        <div className="h4">
          Mengambil data dengan <i>fetch</i>
        </div>
        <HighlightSyntax
          lang={'javascript'}
        >{`fetch('https://dummyjson.com/products/1')
  .then(res => res.json())
  .then(json => console.log(json));`}</HighlightSyntax>
        <HighlightSyntax lang={'javascript'}>{`fetch('json/siswa.json')
  .then((res) => res.json())
  .then((json) => console.log(json));`}</HighlightSyntax>
        <div className="h4">Mengambil data dengan menggunakan Axios</div>
        <HighlightSyntax
          lang={'javascript'}
        >{`axios.get('https://dummyjson.com/products/1')
  .then((res) => console.log(res))`}</HighlightSyntax>
      </div>
    </Section>
  );
};

export default JSFetch;
