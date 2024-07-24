import React, { useState } from 'react';
import { Modal, Button } from '@nextui-org/react';

const ImageGallery = ({ images }) => {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (index) => {
    setCurrentIndex(index);
    setVisible(true);
  };

  const closeGallery = () => {
    setVisible(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className='grid grid-cols-4 gap-4'>
        {images&&images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`room image ${index + 1}`}
            className='rounded-md cursor-pointer'
            width={300}
            height={300}
            onClick={() => openGallery(index)}
          />
        ))}
      </div>

      <Modal 
        isOpen={visible} 
        onClose={closeGallery}
        size="full"
        className="bg-black bg-opacity-90"
      >
        <Modal.Body className="flex items-center justify-center">
          <Button
            auto
            flat
            color="error"
            onClick={closeGallery}
            className="absolute top-4 right-4 z-50"
          >
            X
          </Button>
          <Button
            auto
            flat
            color="primary"
            onClick={prevImage}
            className="absolute left-4 z-50"
          >
            &lt;
          </Button>
          <img
            src={images[currentIndex]}
            alt={`full size image ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <Button
            auto
            flat
            color="primary"
            onClick={nextImage}
            className="absolute right-4 z-50"
          >
            &gt;
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageGallery;