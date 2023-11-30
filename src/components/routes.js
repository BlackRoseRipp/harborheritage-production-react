import React, { Suspense } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));
const PageNotFound = React.lazy(() => import("../pages/PageNotFound"));

export const pages = [
  { path: "/", component: <Home /> },
  { path: "/our-work", component: <About /> },
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
