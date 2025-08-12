import type { ReactElement } from "react";

interface PlaceholderImageProps {
  width: number;
  height: number;
  alt: string;
  className?: string;
}

export default function PlaceholderImage({
  width,
  height,
  alt,
  className = "",
}: PlaceholderImageProps): ReactElement {
  const gradients = [
    "from-blue-400 to-purple-500",
    "from-green-400 to-blue-500",
    "from-purple-400 to-pink-500",
    "from-yellow-400 to-orange-500",
    "from-indigo-400 to-purple-500",
  ];

  const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <div
      className={`bg-gradient-to-br ${randomGradient} ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      role="img"
      aria-label={alt}
    />
  );
}
