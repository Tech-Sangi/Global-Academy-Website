'use client';

import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFade(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 500); // matches fade-out css transition duration
      return () => clearTimeout(timer);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback safety to guarantee screen fades out
      const fallback = setTimeout(handleLoad, 1200);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader-overlay ${fade ? 'fade-out' : ''}`}>
      <div className="preloader-wrap">
        <div className="preloader-spinner"></div>
        <img src="/assets/logo.png" alt="Global Academy Logo" className="preloader-logo" />
      </div>
    </div>
  );
}
