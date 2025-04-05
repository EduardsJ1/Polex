import React from 'react';

function Home() {
  return (
    <div className="page">
        <div className="home-title-container">
            <h1>SIA POLEX</h1>
            <h3>Profesionāls poliuretāna putu siltināšanas risinājums</h3>
        </div>
        <div className="home-text-container">
            <h2>Efektīva siltumizolācija jūsu mājoklim un biznesam - samaziniet enerģijas patēriņu un izmaksas!</h2>
            <h3>SIA POLEX piedāvā inovatīvus un augstas kvalitātes poliuretāna putu siltināšanas risinājumus, kas nodrošina ilgtspējīgu un efektīvu enerģijas ietaupījumu, piemērotus gan komerciāliem, gan privātiem objektiem visā Latvijā</h3>
        </div>
        <div className='home-information-container'>
            <h2>Kapēc izvēlēties poliuretāna putas?</h2>
            <div className='icon-main-container'>

                <div className='icon-container'>
                    <div className='icon'></div>
                    <div className='icon-text'>
                        <h2>Skaņas izolācija</h2>
                        <p>Poliuretāna putas palīdz ar skaņas izolāciju un absorbē skaņu samazinot trokšņus starp telpām vai ārpuses</p>
                    </div>
                </div>

                <div className='icon-container'>
                    <div className='icon'></div>
                    <div className='icon-text'>
                        <h2>Ūdensizsturīgs</h2>
                        <p>Poliuretāna putas ir ūdensizturīgas un novērš mitruma iekļūšanu ēkā, kas pasargā no pelējuma veidošanās</p>
                    </div>
                </div>

                <div className='icon-container'>
                    <div className='icon'></div>
                    <div className='icon-text'>
                        <h2>Ilgmūžība</h2>
                        <p>Poliuretāna putas ir izturīgas un saglabā savas siltumizolācijas īpašības daudzus gadus</p>
                    </div>
                </div>

                <div className='icon-container'>
                    <div className='icon'></div>
                    <div className='icon-text'>
                        <h2>Kompakta izolācija</h2>
                        <p>Poliuretāna putas nodrošina lielisku siltumizolāciju pat plānā kārtā un ir piemērots arī šaurās vietās</p>
                    </div>
                </div>

                <div className='icon-container'>
                    <div className='icon'></div>
                    <div className='icon-text'>
                        <h2>Piemērots dažādām virsmām</h2>
                        <p>Poliuretāna putas labi pieķeras pie dažādām virsmām, tostarp kokam, metālam un betonam</p>
                    </div>
                </div>

                <div className='icon-container'>
                    <div className='icon'></div>
                    <div className='icon-text'>
                        <h2>Struktūras izturība</h2>
                        <p>Slēgto šūnu poliuretāna putas stiprina struktūru, uzlabojot ēkas stabilitāti un izturību pret laikapstākļiem</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Home;