import { ReactComponent as SoundIcon } from '../../components/icons/shieldIcon.jsx';

function Service(){
    return(
        <div className="service-section">
        <h1>Pakalpojumi</h1>
        <p>POLEX piedāvā profesionālus mājas siltināšanas pakalpojumus, nodrošinot efektīvu siltumizolāciju ar poliuretāna putām</p>
        <div className='service-icon-container'>
            <div className="title"><h2>Pakalpojumi var iekļaut</h2></div>
            <div className='service-information'>
                <div className='icon-containter'>
                    <div className='icon'><SoundIcon/></div>
                    <div className='icon-text'><h3>Jumta siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><SoundIcon/></div>
                    <div className='icon-text'><h3>Bēniņu siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><SoundIcon/></div>
                    <div className='icon-text'><h3>Pamatu siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><SoundIcon/></div>
                    <div className='icon-text'><h3>Grīdas siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><SoundIcon/></div>
                    <div className='icon-text'><h3>Pagrabu siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><SoundIcon/></div>
                    <div className='icon-text'><h3>Ārsienu siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><SoundIcon/></div>
                    <div className='icon-text'><h3>Iekšsienu siltināšana</h3></div>
                </div>

                <div className='icon-containter'>
                    <div className='icon'><SoundIcon/></div>
                    <div className='icon-text'><h3>Citām vajadzībām</h3></div>
                </div>

            </div>
        </div>
        </div>
        
    );
}

export default Service;