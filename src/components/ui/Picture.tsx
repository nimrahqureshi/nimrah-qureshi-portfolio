import type { ImgHTMLAttributes } from 'react';

interface PictureProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Path to the original image (e.g. /images/logo.png). */
  src: string;
  alt: string;
}

/**
 * Renders the original image inside a <picture> element with a WebP
 * source alongside it (same path, .webp extension). Browsers download
 * the ~90% smaller WebP; the untouched original PNG remains the
 * universal fallback. Original assets are never modified or replaced.
 */
export default function Picture({ src, alt, ...imgProps }: PictureProps) {
  const webpSrc = src.replace(/\.(png|jpe?g)$/i, '.webp');
  const hasWebp = webpSrc !== src;

  return (
    <picture>
      {hasWebp && <source srcSet={webpSrc} type="image/webp" />}
      <img src={src} alt={alt} {...imgProps} />
    </picture>
  );
}
