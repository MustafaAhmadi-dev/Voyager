import { ReactNode, useEffect, useRef, useState } from "react";

function RevealOnScroll({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const visibilityRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });

    if (visibilityRef.current) {
      observer.observe(visibilityRef.current);
    }

    return () => {
      if (visibilityRef.current) {
        observer.unobserve(visibilityRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={visibilityRef}
      className={`transition-opacity ${
        visible ? "opacity-100" : "opacity-10 "
      }`}
    >
      {children}
    </div>
  );
}

export default RevealOnScroll;
