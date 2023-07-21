import HighlightSyntax from '../HighlightSyntax';
import doba from '../../assets/doba.jpg';
import donutLogo from '../../assets/donut-logo.jpg';
import igText from '../../assets/ig-text.png';
import Section from '../Section';
import cssAsSkin from '../../assets/css-as-skin.png';

export const CSSPengenalan = () => (
  <Section id="css-pengenalan" title="Pengenalan CSS">
    <p>
      CSS (Cascade Style Sheet) adalah sebuah bahasa yang digunakan untuk
      mengatur tampilan web. Dengan CSS, kita dapat mengatur layout (tata
      letak), warna, font, garis, background, animasi, dan lain-lain.
    </p>
    <img style={{ maxWidth: 400 }} src={cssAsSkin} alt="" />
    <p>
      <b>HTML</b> bisa dibilang sebagai kerangka dari sebuah aplikasi web,
      dimana <b>CSS</b> merupakan kulit yang melapisi kerangka tersebut.
      kemudian ada juga <b>Javascript</b> yang merupakan logic dari aplikasi
      web, <b>javascript</b> membuat aplikasi web menjadi dinamis.
    </p>
    <h3>Contoh CSS</h3>
    <div className="flex flex-sm-col">
      <HighlightSyntax>
        {`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Belajar CSS</title>
  <style type="text/css">
    body {
      margin: 0;
      font-size: 14px;
    }

    #wrapper {
      max-width: 425px;
      border: 1px solid;
      background: white;
    }

    #header {
      width: 100%;
      border-bottom: 1px solid #ddd;
    }

    #header>div {
      padding: 0.5em;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .post-title {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .title-logo {
      width: 50px;
    }

    .post-buttons {
      padding: .5em;
      display: flex;
    }

    .post-buttons>div {
      width: calc(100% / 3);
    }

    .post-buttons>div:nth-child(2) {
      text-align: center;
    }

    .post-buttons>div:nth-child(3) {
      text-align: right;
    }

    .post-img img {
      width: 100%;
    }

    .post-comment {
      padding: .5em;
    }

    #footer {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #000;
      padding: 0.5em;
    }

    #footer>div {
      width: calc(100 / 5);
    }

    .rounded-full {
      border: 1px solid #000;
      border-radius: 50%;
      padding: 2px;
    }

    .post-buttons span,
    #header span,
    #footer span {
      font-size: 18px;
    }
  </style>
</head>

<body>
<div id="wrapper">
  <div id="header">
    <div>
      <img src="ig-text.png" height="30" alt="" >
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <div id="post">
    <div class="post-title">
      <img class="title-logo" src="donut-logo.jpg" alt="" >
      Official_Donat_Bahagia
    </div>
    <div class="post-img">
      <img src="doba.jpg" alt="" >
    </div>
    <div class="post-buttons">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>...</div>
      <div>
        <span></span>
      </div>
    </div>
    <div class="post-comment">
      <div>9,999 likes</div>
      <div><b>Official_donatbahagia</b> Lorem Ipsum dolor sit amet</div>
    </div>
  </div>
  <div id="footer">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span class="rounded-full">--</span>
  </div>
</div>
</body>

</html>`}
      </HighlightSyntax>
      <div id="wrapper">
        <div id="header">
          <div className="p-1 d-flex justify-content-between align-items-center">
            <img src={igText} height="30" alt="" />
            <div className="flex gap-1">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div id="post">
          <div className="post-title p-1">
            <img className="title-logo" src={donutLogo} alt="" />
            Official_Donat_Bahagia
          </div>
          <div className="post-img">
            <img className="w-100" src={doba} alt="" />
          </div>
          <div className="post-buttons">
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="text-center">...</div>
            <div className="text-right">
              <span></span>
            </div>
          </div>
          <div className="post-comment">
            <div>9,999 likes</div>
            <div>
              <b>Official_donatbahagia</b> Lorem Ipsum dolor sit amet
            </div>
          </div>
        </div>
        <div id="footer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="rounded-full">--</span>
        </div>
      </div>
    </div>
  </Section>
);
