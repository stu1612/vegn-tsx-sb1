// npm
import { FC } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children: any;
}

export const ScrollToTop: FC<Props> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};
