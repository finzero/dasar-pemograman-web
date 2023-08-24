import Section from '../Section';

const Prerequisite = () => {
  return (
    <Section id="react-prerequisite" title="Prerequisite">
      <div className="card-content bg-white b-1">
        Hal-hal yang perlu dipersiapkan sebelum mencoba Reactjs
        <div className="h3 mt-1">1. Node</div>
        <p>
          <b>Node.js</b> adalah runtime environment untuk JavaScript yang
          bersifat open-source dan cross-platform. Dengan Node.js kita dapat
          menjalankan kode JavaScript di mana pun, tidak hanya terbatas pada
          lingkungan browser.
        </p>
        <a
          className="link"
          href="https://www.petanikode.com/nodejs-nvm/"
          target="'_blank'"
        >
          Installasi Nodejs dengan NVM
        </a>
        <div className="h3 mt-1">2. Yarn</div>
        <p>
          <strong>Y</strong>et <strong>A</strong>nother <strong>R</strong>
          esource <strong>N</strong>egotiator atau <strong>Yarn </strong> adalah
          dependency manager pengelola dependensi JavaScript yang dibuat oleh
          Facebook, Google, Exponent, dan Tilde.
        </p>
        <a
          className="link"
          href="https://www.hostinger.co.id/tutorial/cara-install-yarn"
          target="'_blank'"
        >
          Installasi Yarn
        </a>
        <div className="h3 mt-1">3. Vite</div>
        <p>
          Vite adalah <i>tools</i> <i>development</i> yang bertujuan untuk
          memberikan pengalaman <i>development</i> yang lebih cepat dan ringan
          untuk proyek-proyek web modern.
        </p>
        <a href="https://vitejs.dev/guide/" className="link">
          Installasi Vite
        </a>
      </div>
    </Section>
  );
};

export default Prerequisite;
