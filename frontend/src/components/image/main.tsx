import React, { useState, useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';

const ImageMain: React.FC<{
    src: string
    alt: string
    style?: React.CSSProperties
    skeletonHeight?: number
    className?: string
}> = ({ src, alt, style, className, skeletonHeight }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const imageRef = useRef<HTMLImageElement>(null);
  const imagePlaceholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsLoading(true)
                setImageSrc(src)
                observer.disconnect()
            }
        })
    })

    if (imageRef.current) {
        observer.observe(imageRef.current)
    }

    return () => {
        observer.disconnect()
    }
  }, [src]);

  return (
    <>
    {isLoading && (
      <Skeleton style={style} height={skeletonHeight} />
    )}
    <img
        ref={imageRef}
        src={imageSrc || imagePlaceholder}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        style={{ ...style }}
      />
    </>
  );
};

export default ImageMain;