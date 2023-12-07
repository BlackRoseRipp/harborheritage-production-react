import { Fragment, useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { Collapse, initTE } from "tw-elements";
import useScrollPosition from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWindowSize";
import NavButton from "./NavButton";
import { pages, routes } from "./routes";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const size = useWindowSize();
  const scrollPosition = useScrollPosition();
  const location = useLocation();
  const pathname = location.pathname;

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  useEffect(() => {
    initTE({ Collapse });
  }, []);

  return (
    <Fragment>
      <nav
        className={classNames(
          pages.some((page) => page.path === pathname) ? "" : "hidden",
          scrollPosition > 0 || size.width < 768
            ? "bg-white shadow-md"
            : "bg-blue-primary",
          "w-full flex flex-col justify-center items-center z-40 sticky top-0"
        )}
      >
        <div
          className={classNames(
            scrollPosition > 0 ? "" : "",
            "max-w-7xl flex justify-between items-center mx-auto w-full relative h-[73px] px-2"
          )}
        >
          {scrollPosition > 0 || size.width < 768 ? (
            <a href="/" className="md:w-48 w-36">
              <img
                src="/img/logos/harbor-heritage-university.png"
                className="w-36"
                alt="Logo"
              />
            </a>
          ) : (
            <Fragment>
              <div className="absolute top-0 w-52 h-36">
                <div
                  className={classNames(
                    expanded ? "lg:bg-white bg-gray-100" : "bg-white",
                    "h-full flex items-end justify-center"
                  )}
                >
                  <a href="/" className="w-48 mb-4">
                    <img
                      src="/img/logos/harbor-heritage-university.png"
                      className="w-48"
                      alt="Logo"
                    />
                  </a>
                </div>
                <div
                  className={classNames(
                    expanded ? "!border-t-gray-100" : "",
                    "logo-banner"
                  )}
                ></div>
              </div>
              <div></div>
            </Fragment>
          )}
          <button
            data-toggle="navbar"
            onClick={() => setExpanded(!expanded)}
            type="button"
            className={classNames(
              scrollPosition > 0
                ? "text-blue-primary"
                : "md:text-white text-blue-primary",
              "lg:hidden text-3xl"
            )}
            aria-controls="navbar"
            aria-expanded="false"
          >
            {expanded ? <BsXLg /> : <GiHamburgerMenu />}
          </button>
          <ul
            className={classNames(
              size.width < 1024 ? "hidden" : "",
              scrollPosition > 0 ? "justify-center" : "justify-end",
              "flex flex-row items-center grow rounded-lg xl:gap-x-4"
            )}
          >
            <li>
              <NavButton to="/our-work" primary="Our Work" />
            </li>
            <li>
              <NavButton
                to="#"
                primary="Academic Programs"
                dropdownLinks={[
                  {
                    primary: "FIGHR Academic Conservatory",
                    to: "/fighr-academic-conservatory",
                  },
                  {
                    primary: "Lalo College of Restorative Justice",
                    to: "/hhu-lalo-college-of-restorative-justice",
                  },
                  {
                    primary: "Lincoln College of BIPOC Research",
                    to: "/hhu-lincoln-college-of-bipoc-research",
                  },
                  {
                    primary: "IGLASS Women's College",
                    to: "/hhu-iglass-womens-college",
                  },
                  {
                    primary: "Diplomatic Fellowships",
                    to: "/diplomatic-fellowships",
                  },
                ]}
              />
            </li>
            <li>
              <NavButton
                to="#"
                primary="Degree Programs"
                dropdownLinks={[
                  {
                    primary: "Associates of Arts (AA) Program",
                    to: "/associates-of-arts-aa-program",
                  },
                  {
                    primary: "Bachelor of Arts (BA) Program",
                    to: "/bachelor-of-arts-ba-program",
                  },
                  {
                    primary: "Master of Arts (MA) Program",
                    to: "/master-of-arts-ma-program",
                  },
                  {
                    primary: "Doctorate (PhD) Program",
                    to: "/doctorate-phd-program",
                  },
                  {
                    primary: "Chaplaincy Doctoral (DPS) Program",
                    to: "/chaplaincy-doctoral-program-dps",
                  },
                ]}
              />
            </li>
            <li>
              <NavButton
                to="#"
                primary="Our People"
                dropdownLinks={[
                  {
                    primary: "HHU Alumni",
                    to: "/huu-alumni",
                  },
                  {
                    primary: "HHU Faculty & Staff",
                    to: "/hhu-faculty-staff",
                  },
                  {
                    primary: "HHU Academic Advisory",
                    to: "/hhu-academic-advisory",
                  },
                  {
                    primary: "Friends of HHU",
                    to: "/friends-of-hhu",
                  },
                ]}
              />
            </li>
            <li>
              <NavButton to="/apply" primary="Apply" />
            </li>
            <li>
              <NavButton to="/contact" primary="Contact" />
            </li>
          </ul>
        </div>
        <div
          className={classNames(
            expanded ? "h-[calc(100vh-73px)]" : "h-0",
            "block w-full lg:w-auto transition-all duration-700 overflow-x-hidden overflow-y-auto lg:hidden bg-white"
          )}
          id="navbar"
        >
          {size.width < 1024 ? (
            <div
              className={classNames(
                scrollPosition > 0 ? "" : "md:mt-[121px]",
                "flex flex-col"
              )}
            >
              <NavButton to="/" primary="Home" />
              <NavButton to="/our-work" primary="Our Work" />
              <div className="accordion accordion-flush" id="mobileMenu">
                <NavButton
                  to="#"
                  primary="Academic Programs"
                  id="One"
                  dropdownLinks={[
                    {
                      primary: "FIGHR Academic Conservatory",
                      to: "/fighr-academic-conservatory",
                    },
                    {
                      primary: "Lalo College of Restorative Justice",
                      to: "/hhu-lalo-college-of-restorative-justice",
                    },
                    {
                      primary: "Lincoln College of BIPOC Research",
                      to: "/hhu-lincoln-college-of-bipoc-research",
                    },
                    {
                      primary: "IGLASS Women's College",
                      to: "/hhu-iglass-womens-college",
                    },
                    {
                      primary: "Diplomatic Fellowships",
                      to: "/diplomatic-fellowships",
                    },
                  ]}
                />
              </div>
              <div className="accordion accordion-flush" id="mobileMenu">
                <NavButton
                  to="#"
                  primary="Degree Programs"
                  id="Two"
                  dropdownLinks={[
                    {
                      primary: "Associates of Arts (AA) Program",
                      to: "/associates-of-arts-aa-program",
                    },
                    {
                      primary: "Bachelor of Arts (BA) Program",
                      to: "/bachelor-of-arts-ba-program",
                    },
                    {
                      primary: "Master of Arts (MA) Program",
                      to: "/master-of-arts-ma-program",
                    },
                    {
                      primary: "Doctorate (PhD) Program",
                      to: "/doctorate-phd-program",
                    },
                    {
                      primary: "Chaplaincy Doctoral (DPS) Program",
                      to: "/chaplaincy-doctoral-program-dps",
                    },
                  ]}
                />
              </div>
              <div className="accordion accordion-flush" id="mobileMenu">
                <NavButton
                  to="#"
                  primary="Our People"
                  id="Three"
                  dropdownLinks={[
                    {
                      primary: "HHU Alumni",
                      to: "/huu-alumni",
                    },
                    {
                      primary: "HHU Faculty & Staff",
                      to: "/hhu-faculty-staff",
                    },
                    {
                      primary: "HHU Academic Advisory",
                      to: "/hhu-academic-advisory",
                    },
                    {
                      primary: "Friends of HHU",
                      to: "/friends-of-hhu",
                    },
                  ]}
                />
              </div>
              <NavButton to="/apply" primary="Apply" />
              <NavButton to="/contact" primary="Contact" />
            </div>
          ) : null}
        </div>
      </nav>

      {routes()}
    </Fragment>
  );
};

export default Navbar;
