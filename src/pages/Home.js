import { Fragment, useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

const Home = () => {
  const size = useWindowSize();
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Fragment>
      <section className="relative w-full overflow-x-hidden">
        <div className="bg-[url(../public/img/pexels-rdne-stock-project-771317.jpg)] bg-cover bg-center w-full banner lg:before:border-t-[6.25rem] md:before:border-t-[4rem]">
          <div className="bg-black/50 w-full">
            <div className="max-screen-w-xl mx-auto w-full lg:min-h-[900px] flex items-center justify-center px-2">
              <div className="py-32 flex items-center justify-center h-full">
                <h1 className="text-white heading md:text-5xl text-3xl font-semibold text-center max-w-5xl">
                  The first and only University for the study of Gender and
                  Human Rights Advocacy and Leadership
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
