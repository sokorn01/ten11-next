import { useEffect, useState, useRef, useCallback } from "react";
import { fetchMenu } from "../../store/actions/menuAction";
import { useStore } from "../../store";
const useSticky = () => {
  const [isSticky, setSticky] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const element = useRef(null);
  const store = useStore();

  if (typeof window !== "undefined") {
    var prevScrollpos = window.pageYOffset;
  }

  const handleScroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (element.current) {
      if (parseInt(currentScrollPos) <= 0) {
        setHideNav(false);
        setSticky(false);
        return;
      } else {
        if (currentScrollPos <= prevScrollpos) {
          setHideNav(false);
          setSticky(false);
        } else {
          setHideNav(true);
          setSticky(true);
          store.dispatch(fetchMenu);
        }
      }

      prevScrollpos = currentScrollPos;
    }
  };

  // This function handle the scroll performance issue
  function debounce(func, wait = 20, immediate = true) {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const scrollHandler = useCallback(() => {
    debounce(handleScroll());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [debounce, handleScroll]);

  return { isSticky, element, hideNav };
};
export default useSticky;
