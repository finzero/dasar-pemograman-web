import Section from '../Section';

const Introduction = () => {
  return (
    <Section id="react-introduction" title="Introduction">
      <div className="card-content bg-white b-1">
        <div className="flex gap-1">
          <img
            className="spinning-image"
            style={{ height: '100px' }}
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png"
            alt=""
          />
          <p>
            <b>ReactJS</b> atau React adalah library JavaScript populer buatan
            Facebook yang digunakan dalam proses pengembangan aplikasi mobile
            dan web. React berisi kumpulan snippet kode JavaScript (disebut
            ‘komponen’) yang bisa digunakan berulang kali untuk mendesain
            antarmuka pengguna
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Introduction;
