import React, { lazy, Suspense } from 'react';
import { ReactComponent as SoundIcon } from '../components/icons/soundIcon.jsx';
import { ReactComponent as DropletIcon } from '../components/icons/dropletIcon.jsx';
import { ReactComponent as HourglassIcon } from '../components/icons/hourglassIcon.jsx';
import { ReactComponent as CompactIcon } from '../components/icons/compactIcon.jsx';
import { ReactComponent as ShieldIcon } from '../components/icons/shieldIcon.jsx';
import { ReactComponent as StickyIcon } from '../components/icons/stickyIcon.jsx';
import { useInView } from "react-intersection-observer";
import Loading from '../components/Loading.jsx';
const HeatInsulation = lazy(() => import('./home_components/HeatInsulation.jsx'));
const Service = lazy(() => import('./home_components/Service.jsx'));
const FAQService = lazy(() => import('./home_components/FAQService.jsx'));
const ContactForm = lazy(() => import('./Contact_form.jsx'));
function Home() {
    const [heatInsulationRef, heatInsulationInView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px 50% 0px',
      });
    
      const [serviceRef, serviceInView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px 50% 0px',
      });

        const [faqRef, faqInView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px 50% 0px',
    });
    
      const [contactRef, contactInView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px 50% 0px',
      });
  return (
    <>
    <title>Polex - Māju siltināšana visā Latvijā ar poliuretāna putām</title>
    <meta name="description" content="SIA Polex piedāvā profesionālu mājas siltināšanu visā Latvijā ar poliuretāna putām, to skaitā jumtiem, bēniņiem, pagrabiem un citām vajadzībām." />

    <meta property="og:url" content="https://polex.lv" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Polex - Māju siltināšana visā Latvijā ar poliuretāna putām" />
    <meta property="og:description" content="SIA Polex piedāvā profesionālu mājas siltināšanu visā Latvijā ar poliuretāna putām, to skaitā jumtiem, bēniņiem, pagrabiem un citām vajadzībām." />
    <meta property="og:image" content="https://polex.lv/images/logo.webp" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Polex - Māju siltināšana visā Latvijā ar poliuretāna putām" />
    <meta name="twitter:description" content="SIA Polex piedāvā profesionālu mājas siltināšanu visā Latvijā ar poliuretāna putām, to skaitā jumtiem, bēniņiem, pagrabiem un citām vajadzībām." />
    <meta name="twitter:image" content="https://polex.lv/images/logo.webp" />
    
    <div className="page">
        <div className="home-title-container">
            <h1>Efektīvi mājas siltumizolācijas pakalpojumi ar poliuretāna putām</h1>
            <p>POLEX - Profesionāls poliuretāna putu siltināšanas risinājums</p>
        </div>
        <div className="home-text-container">
            <h2>Efektīva siltumizolācija jūsu mājoklim un biznesam - samaziniet enerģijas patēriņu un izmaksas!</h2>
        </div>
        <div className='home-information-container'>
            <h2>Kapēc izvēlēties poliuretāna putas?</h2>
            <div className='icon-main-container'>

                <div className='icon-container'>
                    <div className='icon'>
                        <SoundIcon/>
                    </div>
                    <div className='icon-text'>
                        <h2>Skaņas izolācija</h2>
                        <p>Poliuretāna putas palīdz ar skaņas izolāciju un absorbē skaņu samazinot trokšņus starp telpām vai ārpuses</p>
                    </div>
                </div>

                <div className='icon-container'>
                    <div className='icon'>
                        <DropletIcon/>
                    </div>
                    <div className='icon-text'>
                        <h2>Ūdensizsturīgs</h2>
                        <p>Poliuretāna putas ir ūdensizturīgas un novērš mitruma iekļūšanu ēkā, kas pasargā no pelējuma veidošanās</p>
                    </div>
                </div>

                <div className='icon-container'>
                    <div className='icon'><HourglassIcon width="100" height="100"/></div>
                    <div className='icon-text'>
                        <h2>Ilgmūžība</h2>
                        <p>Poliuretāna putas ir izturīgas un saglabā savas siltumizolācijas īpašības daudzus gadus</p>
                    </div>
                </div>

                <div className='icon-container'>
                    <div className='icon'><CompactIcon /></div>
                    <div className='icon-text'>
                        <h2>Kompakta izolācija</h2>
                        <p>Poliuretāna putas nodrošina lielisku siltumizolāciju pat plānā kārtā un ir piemērots arī šaurās vietās</p>
                    </div>
                </div>

                <div className='icon-container'>
                    <div className='icon'><StickyIcon /></div>
                    <div className='icon-text'>
                        <h2>Piemērots dažādām virsmām</h2>
                        <p>Poliuretāna putas labi pieķeras pie dažādām virsmām, tostarp kokam, metālam un betonam</p>
                    </div>
                </div>

                <div className='icon-container'>
                    <div className='icon'><ShieldIcon width="80" height="80"/></div>
                    <div className='icon-text'>
                        <h2>Struktūras izturība</h2>
                        <p>Slēgto šūnu poliuretāna putas stiprina struktūru, uzlabojot ēkas stabilitāti un izturību pret laikapstākļiem</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div ref={heatInsulationRef} className='heat-ref'>
      {heatInsulationInView && (
        <Suspense fallback={<Loading height="100%" width="100%" backgroundColor="#1A1A1A" />}>
          <HeatInsulation />
        </Suspense>
      )}
    </div>
    <div className="section-divider">
        <div className='section-background'>
            <div ref={serviceRef} className='service-ref'>
                {serviceInView && (
                <Suspense fallback={<Loading height="100%" width="100%" backgroundColor="#FFFFFF"/>}>
                    <Service />
                </Suspense>
                )}
            </div>
            <div ref={faqRef} className='faq-ref'>
                {faqInView && (
                <Suspense fallback={<Loading height="100%" width="100%" backgroundColor="#FFFFFF"/>}>
                    <FAQService />
                </Suspense>
                )}
            </div>
        </div>
    </div>
    <div className='contact-main-container' ref={contactRef}>
        <h2>Sazinaties ar mums!</h2>
        <div className='contact-form-container'>
            {contactInView && (
            <Suspense fallback={<Loading height="100vh" width="100%" backgroundColor="#1A1A1A"/>}>
                <ContactForm />
            </Suspense>
            )}
        </div>
    </div>
    </>
  );
}

export default Home;