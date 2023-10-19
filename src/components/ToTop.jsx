import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const GetToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
};
