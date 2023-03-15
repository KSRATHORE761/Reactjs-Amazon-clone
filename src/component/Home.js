import React,{useState,useEffect,useCallback,useRef} from "react";
import "./Home.css";
import Product from "./Product";
import { motion } from "framer-motion"
import { TopRowProducts } from "../dataaccesslayer/ProductData";
import { MiddleRowProducts } from "../dataaccesslayer/ProductData";
import {slideImages as BackGroundImages} from "../dataaccesslayer/slideImages";


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  
  const goToNext = useCallback(() =>{
    const isLastSlide = currentIndex === BackGroundImages.length-1;
    const newSlide = isLastSlide ? 0 : currentIndex+1;
    setCurrentIndex(newSlide);
  },[currentIndex, BackGroundImages]);
  
  const goToPrevious = (e) =>{
    e.preventDefault();
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? BackGroundImages.length-1 : currentIndex-1;
    setCurrentIndex(newSlide);
  }
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);
 
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={BackGroundImages[currentIndex].ImgUrl} alt="" />
        {/* <div>
        <div className="home__leftArrowStyles" onClick={goToPrevious}>
        <span className="home__SlideArrow">&#8249;</span>
        </div>
        <div className="home__rightArrowStyles" onClick={goToNext}>
        <span className="home__SlideArrow">&#8250;</span>
        </div>
      </div> */}
        <div className="home__row">
        
          {TopRowProducts.map((items)=>(
            <motion.div className="home__motionrow" whileHover={{scale : 1.05 }}>
            <Product
            id={items.id}
            title={items.title}
            price={items.price}
            rating={items.rating}
            image={items.image}
            >
            </Product>
            </motion.div>
          ))}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home__middlerow">
          {MiddleRowProducts.map((items) => (
            <motion.div className="home__motionmiddlerow" whileHover={{scale : 1.05 }}>
            <Product
            id={items.id}
            title={items.title}
            price={items.price}
            rating={items.rating}
            image={items.image}
            >
            </Product>
            </motion.div>
          ))}
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <motion.div className="home__motionrow" whileHover={{scale : 1.02 }}>
        
        <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          </motion.div>
          {/* Product */}
        
      </div>
    </div>
  );
}

export default Home;
