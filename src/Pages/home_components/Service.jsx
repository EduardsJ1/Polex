import { ReactComponent as RoofIcon } from '../../components/icons/roofIcon.jsx';
import { ReactComponent as AtticIcon } from '../../components/icons/atticIcon.jsx';
import { ReactComponent as FoundationIcon } from '../../components/icons/foundationIcon.jsx';
import { ReactComponent as FloorIcon } from '../../components/icons/floorIcon.jsx';
import { ReactComponent as BasementIcon } from '../../components/icons/basementIcon.jsx';
import { ReactComponent as OuterWallIcon } from '../../components/icons/outerwallIcon.jsx';
import { ReactComponent as InnerWallIcon } from '../../components/icons/innerwallIcon.jsx';
import { ReactComponent as OtherIcon } from '../../components/icons/otherIcon.jsx';
import Gallery from '../../components/Gallery.jsx';
function Service(){
    return(
        <div className="service-section">
        <h1>Pakalpojumi</h1>
        <p>POLEX piedāvā profesionālus mājas siltināšanas pakalpojumus, nodrošinot efektīvu siltumizolāciju ar poliuretāna putām</p>
        <Gallery/>
        <div className='service-icon-container'>
            <div className="title"><h2>Pakalpojumi var iekļaut</h2></div>
            <div className='service-information'>
                <div className='service-card'>
                    <div className='service-icon'><RoofIcon/></div>
                    <div className='service-title'><h3>Jumta siltināšana</h3></div>
                    <div className='service-description'>
                        <p>Jumtu siltināšana tiek veikta ar slēgto šūnu poliuretāna putām, kas nodrošina lielisku aizsardzību pret siltuma zudumiem, mitrumu un vēja ietekmi.
                            Putas cieši pieguļ visām virsmām, tostarp sarežģītiem jumta slīpumiem. Šāda siltināšama ievērojami pagarina jumta kalpošanas laiku un samazina apkures izmaksas.
                        </p>
                    </div>
                </div>

                <div className='service-card'>
                    <div className='service-icon'><AtticIcon/></div>
                    <div className='service-title'><h3>Bēniņu siltināšana</h3></div>
                    <div className='service-description'>
                        <p>Bēniņu siltināšanā parasti tiek izmantotas atvērto šūnu poliuretāna putas, kas ir elpojošas, vieglas un nodrošina labu skaņas izolāciju.
                            Šīs putas ir lieliski piemērotas dzīvojamiem bēniņiem. Ja nepieciešama augstāka mitruma aizsardzība, piemērām, ventelācijas trūkuma gadījumā, izmantojam arī slēgtu šūnu putas uz ārējām virsmām.
                        </p>
                    </div>
                </div>

                <div className='service-card'>
                    <div className='service-icon'><FoundationIcon/></div>
                    <div className='service-title'><h3>Pamatu siltināšana</h3></div>
                    <div className='service-description'>
                        <p>Pamatus izolējam ar slēgto šūnu poliuretāna putām, kuras izceļas ar augstu mehānisko izturību un mitruma necaurlaidību. 
                            Šīs putas nodrošina efektīvu siltuma saglabāšanu un ilgtermiņa aizsardzību pret mitruma ietekmi un ēkas konstrukcijām.
                        </p>
                    </div>
                </div>

                <div className='service-card'>
                    <div className='service-icon'><FloorIcon/></div>
                    <div className='service-title'><h3>Grīdas siltināšana</h3></div>
                    <div className='service-description'>
                        <p>Grīdām izmantojam slēgto šūnu putas, kas nodrošina izcilu siltumizolāciju pat plānā slānī.
                            Tās ir īpaši piemērotas starpstāvu pārsegumiem, betona plātnēm un zemgrīdas apkures sistēmām, kur nepieciešama gan siltuma, gan megāniskā slodzes noturība.
                        </p>
                    </div>
                </div>

                <div className='service-card'>
                    <div className='service-icon'><BasementIcon/></div>
                    <div className='service-title'><h3>Pagrabu siltināšana</h3></div>
                    <div className='service-description'>
                        <p>Pagraba telpās izmantojam slēgto šūnu poliuretāna putas, jo tās ir ūdensizturīgas un izveido cieši pieguļošu izolācijas slāni. 
                            Tas pasargā no mitruma, pelējuma un palīdz nodrošināt stabilu iekštelpu temperatūru visa gada garumā
                        </p>
                    </div>
                </div>

                <div className='service-card'>
                    <div className='service-icon'><OuterWallIcon/></div>
                    <div className='service-title'><h3>Ārsienu siltināšana</h3></div>
                    <div className='service-description'>
                        <p>Ārsienas izolējam ar slēgto šūnu poliuretāna putām, kas nodrošina nepārtrauktu un cieši noslēgtu siltumizolācijas slāni.
                            Tās samazina siltuma zudumus un pasargā ēku no vēja, lietus un citiem ārējiem faktoriem. Lieliski piemērots gan koka, gan mūra sienām.
                        </p>
                    </div>
                </div>

                <div className='service-card'>
                    <div className='service-icon'><InnerWallIcon/></div>
                    <div className='service-title'><h3>Iekšsienu siltināšana</h3></div>
                    <div className='service-description'>
                        <p>Iekšsienās parasti izmantojam atvērtu šūnu putas, kas efektīvi uzlabo skaņas izolāciju starp telpām. 
                            Tās ļauj telpām "elpot", vienlaikus saglabājot siltumu un komfortu iekštelpās.
                        </p>
                    </div>
                </div>

                <div className='service-card'>
                    <div className='service-icon'><OtherIcon/></div>
                    <div className='service-title'><h3>Citām vajadzībām</h3></div>
                    <div className='service-description'>
                        <p>Piedāvājam pielāgotus sitlināšanas risinājumus dažādām vajadzībām, piemēram, konteineriem, transportam un citām specifiskām prasībām.
                             Atkarībā no konstrukcijas un apstākļiem izmantojam gan atvērto, gan slēgto šūnu putas, nodrošinot efektīvu rezultātu.
                        </p>
                    </div>
                </div>

            </div>
        </div>
        </div>
        
    );
}

export default Service;