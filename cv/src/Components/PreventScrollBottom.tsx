import { useEffect } from "react";

const PreventScrollBottom = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        window.scrollTo(0, document.body.offsetHeight - window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return null;
};

export default PreventScrollBottom;
