import React from 'react';
import videoTest from '../../assets/video.mp4';
function HeatInsulation(){
    return (
        <div className='heat-main-container'>
            <h1>Efektīva siltumizolācija</h1>
            <div className='heat-container'>
                <div className="heat-text-container">
                    <h2>Poliuretāna putas nodrošina augstu temperatūras izolāciju,
                        kas palīdz saglabāt ēku siltu ziemā un vēsu vasarā</h2>
                    <h4 className='fact-text'>*Poliuretāna putu izcilās temperatūras izolācijas
                        īpašības novērtēja pat NASA, kur izmantojot tās kosmosa kuģu izolācijā*</h4>
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