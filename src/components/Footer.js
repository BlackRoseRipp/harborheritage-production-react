import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { pages } from "./routes";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return pages.some((page) => page.path === pathname) ? (
    <Fragment>
      <footer className="py-8 mt-auto bg-gray-200">
        <div className="max-w-screen-xl mx-auto px-8 flex flex-col items-center justify-center">
          <img
            src="/img/logos/harbor-heritage-university-official-crest_orig.png"
            className="w-32"
            alt="hhu-logo"
          />
          <p className="text-sm text-gray-600 text-center">
            Harbor Heritage University &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </Fragment>
  ) : null;
};

export default Footer;
