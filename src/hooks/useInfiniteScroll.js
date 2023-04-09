/** @format */

import { useEffect, useState } from 'react';

/**
 * How to use
 * Create a ref in your component, add that ref to a sentinal div and pass the ref as first parameter to hook
 * Pass options as second parameter(if any) or pass {}
 * Add data-observe attribute in the sentinal div if its true then observer will start observing
 * You can access isIntersecting to know wheather the user reaches bottom or not
 */

function useInfiniteScroll(
  elementRef,
  { threshold = 0, root = null, rootMargin = '200px' }
) {
  // * States for page number and isintersecting * //
  const [isIntersecting, setIsIntersecting] = useState(false);

  const handleObserver = (entries) => {
    if (elementRef?.current?.dataset.observe === 'false') {
      return;
    }
    const [target] = entries;
    if (target.isIntersecting) {
      setIsIntersecting(true);
    } else {
      setIsIntersecting(false);
    }
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || !node) {
      return;
    }
    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(handleObserver, observerParams);

    // * Observing the div element which has the ref * //
    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, elementRef.current]);

  return { isIntersecting };
}

export default useInfiniteScroll;