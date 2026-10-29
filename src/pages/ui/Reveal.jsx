import { createElement, useEffect, useRef, useState } from "react";

const Reveal = ({ as: Element = "div", children, className = "", delay = 0, ...props }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return createElement(
    Element,
    {
      ref: elementRef,
      className: `transition-[opacity,transform] duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} ${className}`,
      style: { transitionDelay: isVisible ? `${delay}ms` : "0ms" },
      ...props,
    },
    children
  );
};

export default Reveal;