import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      scroll.scrollTo(hash.slice(1));
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
