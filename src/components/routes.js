import React, { Suspense } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const AcademicConservatory = React.lazy(() =>
  import("../pages/AcademicConservatory")
);
const LaloCollege = React.lazy(() => import("../pages/LaloCollege"));
const LincolnCollege = React.lazy(() => import("../pages/LincolnCollege"));
const Iglass = React.lazy(() => import("../pages/Iglass"));
const Fellowships = React.lazy(() => import("../pages/Fellowships"));
const Associates = React.lazy(() => import("../pages/Associates"));
const Contact = React.lazy(() => import("../pages/Contact"));
const PageNotFound = React.lazy(() => import("../pages/PageNotFound"));

export const pages = [
  { path: "/", component: <Home /> },
  { path: "/our-work", component: <About /> },
  { path: "/fighr-academic-conservatory", component: <AcademicConservatory /> },
  {
    path: "/hhu-lalo-college-of-restorative-justice",
    component: <LaloCollege />,
  },
  {
    path: "/hhu-lincoln-college-of-bipoc-research",
    component: <LincolnCollege />,
  },
  {
    path: "/hhu-iglass-womens-college",
    component: <Iglass />,
  },
  {
    path: "/diplomatic-fellowships",
    component: <Fellowships />,
  },
  {
    path: "/associates-of-arts-aa-program",
    component: <Associates />,
  },
  { path: "/contact-us", component: <Contact /> },
  { path: "*", component: <PageNotFound /> },
];

//Replace fallback with real loading page
export const routes = () => {
  return (
    <Suspense
      fallback={
        <h3 style={{ textAlign: "center", padding: "50px" }}>Loading...</h3>
      }
    >
      <Routes>
        {pages.map((page) => {
          return <Route path={page.path} exact element={page.component} />;
        })}
      </Routes>
    </Suspense>
  );
};
