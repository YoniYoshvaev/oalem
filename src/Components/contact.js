import React from 'react';

import { fadeIn } from '../variants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
            <motion.section 
            id="contact"
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.10 }}
            className='contact-page-wrapper'>
                              <h1 className='primary-heading'>יש לך שאלה ?</h1>
                <h1 className='primary-heading'>אנחנו כאן כדי לעזור לך</h1>
                <div className='contact-form-container'>
                    <input type="text" placeholder='oalem_team@gmail.com'/>
                    <button className='secondary-button'>שלח</button>
                </div>
            </motion.section>  
  );
};

export default Contact;