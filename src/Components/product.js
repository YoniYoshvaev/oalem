import React, { useState } from 'react';
import image1 from '../Assets/image-home-product-top.svg';
import './ProductSection.css';
const products = [
  {
    id: 1,
    title: 'אוהל 3x6',
    price: 2500,
    image: image1,
    images: [image1, image1],
  },
  {
    id: 2,
    title: 'אוהל 3x8',
    price: 2700,
    image: image1,
    images: [image1, image1],
  },
  {
    id: 3,
    title: 'אוהל 4x6',
    price: 2700,
    image: image1,
    images: [image1, image1],
  },
  {
    id: 4,
    title: 'אוהל 4x8',
    price: 2900,
    image: image1,
    images: [image1, image1],
  },
  {
    id: 5,
    title: 'אוהל 4x10',
    price: 3600,
    image: image1,
    images: [image1, image1],
  },
  {
    id: 6,
    title: 'אוהל 4x12',
    price: 4000,
    image: image1,
    images: [image1, image1],
  },
  {
    id: 7,
    title: 'אוהל 5x8',
    price: 3600,
    image: image1,
    images: [image1, image1],
  },
  {
    id: 8,
    title: 'אוהל 5x10',
    price: 4000,
    image: image1,
    images: [image1, image1],
  },
  {
    id: 9,
    title: 'אוהל 5x12',
    price: 4600,
    image: image1,
    images: [image1, image1],
  },
  {
    id: 10,
    title: 'אוהל 6x10',
    price: 6200,
    image: image1,
    images: [image1, image1],
  },
  {
    id: 11,
    title: 'אוהל 6x14',
    price: 7200,
    image: image1,
    images: [image1, image1],
  },
];

const ProductSection = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleCardClick = (product) => {
      setSelectedProduct(product);
      setCurrentImageIndex(0); 
    };
  
    const closePopup = () => {
      setSelectedProduct(null);
    };
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProduct.images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length);
    };
  
    return (
      <div className="product-section" style={{ direction: 'rtl' }}>
        <h2 >האוהלים שלנו !</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card" loading="lazy" onClick={() => handleCardClick(product)}>
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>₪{product.price}</p>
              </div>
            </div>
          ))}
        </div>
  
        {selectedProduct && (
          <div className="popup">
            <div className="popup-content">
              <span className="close-popup" onClick={closePopup}>
                &times;
              </span>
              <div className="carousel">
                <button className="arrow left" onClick={prevImage}>&#10094;</button>
                <img
                  src={selectedProduct.images[currentImageIndex]}
                  alt={selectedProduct.title}
                  className="popup-image"
                />
                <button className="arrow right" onClick={nextImage}>&#10095;</button>
              </div>
              <h2>{selectedProduct.title}</h2>
              <p>Price: ${selectedProduct.price}</p>
            </div>
          </div>
        )}
      

      </div>
    );
  };
  
  export default ProductSection;