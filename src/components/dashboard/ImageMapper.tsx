import React from 'react';
import Image from 'next/image';

interface ImageComponentProps {
  imageSrc: string;
  zIndex: number;
}

interface ImageMapperProps {
  data: string[];
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageSrc, zIndex }) => {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: zIndex,
        left: `${zIndex * 15}px`, 
      }}
    >
      <Image src={imageSrc} alt="profile-image" width={25} height={25} />
    </div>
  );
};

const ImageMapper: React.FC<ImageMapperProps> = ({ data }) => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      {data &&
        data.map((imageSrc, index) => (
          <ImageComponent key={index} imageSrc={imageSrc} zIndex={index + 1} />
        ))}
    </div>
  );
};

export default ImageMapper;
