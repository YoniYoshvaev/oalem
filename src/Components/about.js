import React from 'react'
 
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/image-about-product.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

import { fadeIn } from '../variants';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section
    id="about"
    className='about-section-container' >
        
        <motion.div
              variants={fadeIn('right', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.10 }}
        className='about-background-image-container'>
            <img src={AboutBackground} alt=''/>
        </motion.div>
        <motion.div 
         variants={fadeIn('right', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.10 }}
        className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt=''/>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.10 }}
        className='about-section-text-container' style={{ direction: 'rtl' }}>

                    <p className='primary-subheading'>אודותינו</p>
                    <h1 className='primary-heading'>
                    OALEM חברה המתמחה ביבוא אוהלים וציוד לאירועים  
                    </h1>
                    <p className='primary-text'>
                 אנו מתמחים באוהלים , בכיסאות,שולחנות ,שולחנות משחק לאירועים ועוד
                    </p>
                    <p className='primary-text'>
                        אנו תמיד נשתדל לספק את הסחורה הטובה ביותר במחירים
                        הטובים ביותר !

                    </p>

                      

        </motion.div>
    </section>
  );
};
export default About;
