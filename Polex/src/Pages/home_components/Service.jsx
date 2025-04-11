import { ReactComponent as SoundIcon } from '../../components/icons/shieldIcon.jsx';
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
                <div className='icon-containter'>
                    <div className='icon'><RoofIcon/></div>
                    <div className='icon-text'><h3>Jumta siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><AtticIcon/></div>
                    <div className='icon-text'><h3>Bēniņu siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><FoundationIcon/></div>
                    <div className='icon-text'><h3>Pamatu siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><FloorIcon/></div>
                    <div className='icon-text'><h3>Grīdas siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><BasementIcon/></div>
                    <div className='icon-text'><h3>Pagrabu siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><OuterWallIcon/></div>
                    <div className='icon-text'><h3>Ārsienu siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><InnerWallIcon/></div>
                    <div className='icon-text'><h3>Iekšsienu siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><OtherIcon/></div>
                    <div className='icon-text'><h3>Citām vajadzībām</h3></div>
                </div>

            </div>
        </div>
        </div>
        
    );
}

export default Service;