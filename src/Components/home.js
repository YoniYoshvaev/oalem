import React from 'react';
import Navbar from './navbar';
import BannerBackground from '../Assets/header-bg-purple-svg.svg';
import bannerImage from '../Assets/image-home-product-top.svg';
import { FaPhoneAlt } from "react-icons/fa";
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';


const Home = () => {
  const phoneNumber = '+972525845067';
  return (
    <div className='home-container'>
      <Navbar /> 
      
      <div className='home-banner-container' style={{ direction: 'rtl' }}> 
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.10 }}
        className='home-bannerImage-container'>
          <img src={BannerBackground} alt='Banner Background' />
        </motion.div>
        
        <motion.div 
         variants={fadeIn('left', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.10 }}
        className='home-text-section'>
          <h1 className='primary-heading'>
            אוהלים לאירועים!
          </h1>
          <p className='primary-text'>
            אוהלים וציוד לאירועים במחירים מוזלים, מהיבואן לצרכן!
          </p>
          <a href={`tel:${phoneNumber}`} className="no-underline" >
  <button className='secondary-button'>
    לרכישה חייגו <FaPhoneAlt style={{ marginRight: '5px' }} />
  </button>
</a>
        </motion.div>
        
        <motion.div
           variants={fadeIn('right', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{ once: false, amount: 0.10 }}
        className='home-image-container'>
          <img src={bannerImage} alt='Banner Image' />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
