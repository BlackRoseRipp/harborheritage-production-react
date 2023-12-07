import { useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Collapse, initTE } from "tw-elements";
import useScrollPosition from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWindowSize";

function NavButton(props) {
  const { dropdownLinks, primary, to, id } = props;
  const size = useWindowSize();
  const scrollPosition = useScrollPosition();

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  useEffect(() => {
    initTE({ Collapse });
  }, []);

  const location = useLocation();
  const path = location.pathname;

  const activeDropdownLink = dropdownLinks?.some((link) => link.to === path);

  return dropdownLinks ? (
    size.width < 1024 ? (
      <div className="">
        <h2 className="mb-0" id={"mobileHeader" + id}>
          <button
            className="group relative font-semibold text-lg !text-blue-primary border-b border-b-transparent hover:!text-gold-primary hover:!border-b-gold-primary p-2 w-full focus:outline-none !shadow-none flex items-center justify-between after:hidden transition-all duration-300"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            data-te-target={"#mobileSubMenu" + id}
            aria-expanded="false"
            aria-controls={"mobileSubMenu" + id}
          >
            {primary}
            <span className="ml-3 text-3xl lg:h-[28px]">
              <MdKeyboardArrowDown />
            </span>
          </button>
        </h2>
        <div
          className="!visible hidden border-0"
          id={"mobileSubMenu" + id}
          data-te-collapse-item
          aria-labelledby={"mobileHeader" + id}
          data-te-parent="#mobileMenu"
        >
          <div className="flex flex-col accordion-body">
            {dropdownLinks.map((link) => {
              return link.to.startsWith("/") || link.to.startsWith("#") ? (
                <a
                  className={classNames(
                    path === link.to
                      ? "text-blue-primary bg-[#F4F9FF]"
                      : "text-gray-700 hover:text-blue-primary hover:bg-[#F4F9FF]",
                    "p-2 transition-all font-medium py-3 px-6"
                  )}
                  aria-current="page"
                  href={link.to}
                >
                  {link.primary}
                </a>
              ) : (
                <a
                  className={classNames(
                    path === link.to
                      ? "text-blue-primary bg-[#F4F9FF]"
                      : "text-gray-700 hover:text-blue-primary hover:bg-[#F4F9FF]",
                    "p-2 transition-all font-medium py-3 px-6"
                  )}
                  aria-current="page"
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.primary}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    ) : (
      <div className="relative">
        <a
          className={classNames(
            path === to
              ? scrollPosition > 0
                ? "border-blue-primary"
                : "border-white"
              : "border-transparent",
            scrollPosition > 0
              ? "text-blue-primary bg-white"
              : "bg-transparent text-white",
            "peer group py-2 px-2 transition-all duration-300 flex items-center font-semibold border-b hover:border-gold-primary hover:text-gold-primary"
          )}
          href={to}
        >
          {primary}
          <MdKeyboardArrowDown className="ml-2 text-3xl lg:h-[24px] group-hover:rotate-180 group-hover:text-gold-primary duration-300 transition-all" />
        </a>
        <div
          className={
            "block peer-hover:max-h-[380px] hover:max-h-[380px] mt-px max-h-0 w-max min-w-full bg-white drop-shadow-lg absolute rounded-b-lg z-50 transition-all duration-300 ease-linear overflow-hidden"
          }
        >
          <div className="flex flex-col">
            {dropdownLinks.map((link) => {
              return link.to.startsWith("/") || link.to.startsWith("#") ? (
                <a
                  className={classNames(
                    path === link.to
                      ? "text-blue-primary bg-[#F4F9FF]"
                      : "text-gray-700 hover:text-blue-primary hover:bg-[#F4F9FF]",
                    "p-2 transition-all font-medium py-3 px-6"
                  )}
                  aria-current="page"
                  href={link.to}
                >
                  {link.primary}
                </a>
              ) : (
                <a
                  className={classNames(
                    path === link.to
                      ? "text-blue-primary bg-[#F4F9FF]"
                      : "text-gray-700 hover:text-blue-primary hover:bg-[#F4F9FF]",
                    "p-2 transition-all font-medium py-3 px-6"
                  )}
                  aria-current="page"
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.primary}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    )
  ) : (
    <a
      className={classNames(
        path === to
          ? scrollPosition > 0
            ? "lg:border-blue-primary border-white lg:text-blue-primary text-gold-primary"
            : "border-white lg:text-white text-gold-primary"
          : "border-transparent",
        scrollPosition > 0
          ? "text-blue-primary bg-white"
          : "bg-transparent lg:text-white text-blue-primary",
        "py-2 px-2 transition-all duration-300 flex items-center font-semibold border-b hover:border-gold-primary hover:text-gold-primary"
      )}
      aria-current="page"
      href={to}
    >
      {primary}
    </a>
  );
}

export default NavButton;
