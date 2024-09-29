import React from 'react'
import PickProduct from '../Assets/shopping-bag.png'
import chooseProduct from '../Assets/choose-image-do.png' 
import Delivery from '../Assets/delivery-image-do.png'
import WorkBackground from '../Assets/work-bg-image.png'
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';


const Work = () => {
  const workInfoData = [
   
    {
        image:PickProduct,
        title:"עיין במבחר האוהלים",
        text:"עיין בקטלוג האוהלים והמוצרים שלנו..."
    },
   
    {
        image:chooseProduct,
        title:"בחר אוהל",
        text:"בחר אוהל , בחר את הגודל הרצוי לפי הקטלוג והתקשר לתיאום"
    },
    {
        image:Delivery,
        title:"לאחר תיאום עם המחסנאי",
        text:"לאחר שיחת תיאום ,הגעה למחסן לקבל ציוד הנרכש"
    },
  ];
  
  return(
    
    <div className='work-section-wrapper' style={{ direction: 'rtl' }}>
           <motion.div
              variants={fadeIn('left', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
           className='work-bannerImage-container'>
            
            <img src={WorkBackground} alt=''/>
        </motion.div>
        <motion.div
        variants={fadeIn('top', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='work-section-top'>
            <p className='primary-subheading'>תהליך רכישה</p>
            <h1 className='primary-heading'>איך זה עובד</h1>
            <p className='primary-text'>
           3 שלבים פשוטים           
            </p>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='work-section-bottom'>
            {workInfoData.map((data) => (
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                        <img src={data.image} alt=''/>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
        </motion.div>
    </div>
  
  );
};

export default Work;