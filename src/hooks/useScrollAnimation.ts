import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down';

interface UseScrollAnimationReturn {
  scrollY: number;
  scrollDirection: ScrollDirection;
}

export const useScrollAnimation = (): UseScrollAnimationReturn => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollY = (): void => {
      const currentScrollY = window.pageYOffset;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollY);
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  return { scrollY, scrollDirection };
}; 