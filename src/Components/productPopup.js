import React from 'react';

const ProductPopup = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <button 
          className="text-black text-xl float-right" 
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <div className="grid grid-cols-2 gap-4">
          {product.images.map((image, idx) => (
            <img key={idx} src={image} alt={product.title} className="w-full h-40 object-cover" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
