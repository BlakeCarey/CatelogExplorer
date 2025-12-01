import React, { useState } from "react";
import { Image } from "primereact/image";

interface ImageWithFallbackProps {
  src?: string;
  alt?: string;
  className?: string;
  fallback?: React.ReactNode;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className,
  fallback,
}) => {
  const [error, setError] = useState<boolean>(false);

  if (!src || error) {
    return <>{fallback ?? null}</>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

export default ImageWithFallback;
