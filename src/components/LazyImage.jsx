import { useEffect } from "react";

const LazyImage = ({ src, alt }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    });

    const images = document.querySelectorAll("img[data-src]");
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return <img data-src={src} alt={alt} className="h-8" />;
};

export default LazyImage;
