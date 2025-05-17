import React from 'react';
import './About.css';
function About() {
  return (
    <>
    <title>Polex - Par mums</title>
    <meta name="description" content="SIA Polex ir Latvijas uzņēmums, kas piedāva profesionālus siltināšanas pakalpojumus. Ilgtspējīgi risinājumi mājām un uzņēmumiem visā Latvijā" />
    
    <meta property="og:url" content="https://polex.lv/about" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Polex - Par mums" />
    <meta property="og:description" content="SIA Polex ir Latvijas uzņēmums, kas piedāva profesionālus siltināšanas pakalpojumus. Ilgtspējīgi risinājumi mājām un uzņēmumiem visā Latvijā" />
    <meta property="og:image" content="https://polex.lv/images/logo.webp" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Polex - Par mums" />
    <meta name="twitter:description" content="SIA Polex ir Latvijas uzņēmums, kas piedāva profesionālus siltināšanas pakalpojumus. Ilgtspējīgi risinājumi mājām un uzņēmumiem visā Latvijā" />
    <meta name="twitter:image" content="https://polex.lv/images/logo.webp" />
    
    <div className='about-page-main'>
      <div className='about-us-container'>
        <h1>Par mums</h1>
        <p>
          <span>SIA Polex</span> ir Latvijas uzņēmums, kas specializējas poliuretānu putu siltināšanas pakalpojumu sniegšanā gan privātiem, gan komerciāliem klientiem.
          Mūsu mērķis ir nodrošināt ilgtspējīgu un efektīvu siltināšanas risinājumus, kas palīdz ietaupīt enerģiju un uzlabot ēkas komfortu.
        </p>
      </div>
      <div className='about-us-container'>
        <h1>Kas mēs esam?</h1>
        <p><span>SIA Polex</span> ir Valmierā dibināts uzņēmums, kas sniedz siltināšanas pakalpojumus visā Latvijā</p>
      </div>
      <div className='about-us-container'>
        <h1>Ko mēs piedāvājam?</h1>
        <ul>
          <li>Siltināšanu ar slēgto un atvērto poliuretāna šūnu putām</li>
          <li>Privātmāju, angāru, noliktavu un citu ēku siltināšanu</li>
          <li>Konsultāciju un atsaucību klientu jautājumiem</li>
        </ul>
      </div>
      <div className='about-us-information'>
        <div className='about-adress'>
          <h2>Adrese</h2>
          <p>Valmiera, Georga Apiņa iela 22, LV-4201</p>
        </div>
        <div className='about-name'>
          <h2>Uzņēmuma nosaukums</h2>
          <p>"SIA Polex"</p>
        </div>
        <div className='about-reg'>
          <h2>Reģistrācijas numurs</h2>
          <p>40203481601</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;