import './explorearround.css';
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from './images';

function App() {
  
  const [width, setwidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="">
      <h1 className='why'>Explore Around</h1>
      <h1 className='bro'>These popular desitination has a lot to offer</h1>
      <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}> 
      {/* for Entire Carousel */}
        <motion.div 
          drag="x"
          dragConstraints={{right:0, left:-width}}
          className="inner-carousel">
          {images.map(images => {
            return(
              <motion.div className="item" key={images}>
                <img src={images} alt="" />
              </motion.div>
            );
          })}

        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
