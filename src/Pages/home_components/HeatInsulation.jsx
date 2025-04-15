import React from 'react';
import videoTest from '../../assets/video.mp4';
function HeatInsulation(){
    return (
        <div className='heat-main-container'>
            <h2>Efektīva siltumizolācija</h2>
            <div className='heat-container'>
                <div className="heat-text-container">
                    <p>Poliuretāna putas nodrošina augstu temperatūras izolāciju,
                        kas palīdz saglabāt ēku siltu ziemā un vēsu vasarā</p>
                    <p className='fact-text'>Poliuretāna putu izcilās temperatūras izolācijas
                        īpašības novērtēja pat NASA, kur izmantojot tās kosmosa kuģu izolācijā <a href='https://dura-foam.com/resources/foam-roofing/nasa-shuttle-fuel-tank/'>[1]</a>.</p>
                </div>
                <div className='video-container'>
                    <video className="video" autoPlay loop muted playsInline>
                        <source src={videoTest} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>

    );
}

export default HeatInsulation;