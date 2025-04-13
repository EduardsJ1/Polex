import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';
import test1 from '../assets/gallery-images/test1.webp';
import test2 from '../assets/gallery-images/test2.webp';
import test3 from '../assets/gallery-images/test3.webp';
import test4 from '../assets/gallery-images/test4.webp';
import test5 from '../assets/gallery-images/test5.webp';
const images = [
    test1,
    test2,
    test3,
    test4,
    test5,
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);


  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };


    checkIfMobile();


    window.addEventListener('resize', checkIfMobile);


    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);


  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          handleNext();
        }
      }, 3000);
    };

    startInterval();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };


  const getVisibleImages = () => {
    const totalImages = images.length;
    const visibleImages = [];
    

    const range = isMobile ? 1 : 2;
    
    for (let i = -range; i <= range; i++) {
      let indexToShow = currentIndex + i;
      
      // Handle wrapping around the array
      if (indexToShow < 0) indexToShow = totalImages + indexToShow;
      if (indexToShow >= totalImages) indexToShow = indexToShow - totalImages;
      
      visibleImages.push({
        src: images[indexToShow],
        index: indexToShow,
        position: i
      });
    }
    
    return visibleImages;
  };

  const visibleImages = getVisibleImages();

  return (
    <div 
      className="gallery-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button className="gallery-button prev" onClick={handlePrev}>❮</button>
      <div className="gallery-images-row">
        {visibleImages.map((image, idx) => (
          <div 
            key={`image-${image.index}`} 
            className={`gallery-image-wrapper ${image.position === 0 ? 'center' : ''}`}
          >
            <img 
              src={image.src} 
              alt={`Slide ${image.index + 1}`} 
              className="gallery-image" 
            />
          </div>
        ))}
      </div>
      <button className="gallery-button next" onClick={handleNext}>❯</button>
    </div>
  );
};

export default Gallery;