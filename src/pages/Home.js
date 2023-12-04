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
        <div className="bg-[url(../public/img/pexels-rdne-stock-project-771317.jpg)] bg-cover bg-center w-full banner lg:before:border-t-[6.25rem] md:before:border-t-[4rem] lg:after:border-t-[6.25rem] md:after:border-t-[4rem]">
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
      <section className="max-w-screen-xl mx-auto w-full px-2 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img className="lg:w-52 w-full" src="" alt="" />
          </div>
          <div className="flex flex-col justify-center lg:items-start items-center gap-4">
            <h2 className="heading lg:text-4xl text-2xl text-center text-blue-primary font-semibold">
              A Little About ​Us...
            </h2>
            <p className="">
              HHU is the first and ONLY private, Nonprofit, Independent,
              Non-denominational, multifaith, accredited University that
              specializes specifically and intentionally in Gender and Human
              Rights Advocacy and Humanistic Leadership.
              <br />
              <br />
              This International Affairs Program (IAP) adds the education,
              profession and live-work experience of our students with the
              cultural appropriation of language, culture and their service
              demographics of care, to provide the Evidence-based, Emotional
              Intelligence to the solutions they provide!
            </p>
            <a
              href="/plight-professional-courses"
              className="btn-primary text-xs capitalize border font-semibold hover:bg-blue-primary hover:text-amber-400 text-blue-primary border-blue-primary"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
