import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div 
      className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
      onClick={onClick}
    >
      <img src={product.image} alt={product.title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.title}</h3>
        <p className="text-gray-700">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
