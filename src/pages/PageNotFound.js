import React, { Fragment } from "react";

const PageNotFound = () => {
  return (
    <div className="relative h-screen w-full lg:p-32 md:p-16 p-4">
      <div className="z-[-1] absolute bg-[url(../public/img/logos/harbor-heritage-university-official-crest_orig.png)] bg-contain bg-center bg-no-repeat opacity-10 lg:w-[calc(100vw-16rem)] md:w-[calc(100vw-8rem)] w-[calc(100vw-1rem)] lg:h-[calc(100vh-16rem)] md:h-[calc(100vh-8rem)] h-[calc(100vh-1rem)]"></div>
      <section className="h-full flex flex-col items-center justify-center">
        <h1 className="text-center text-blue-primary page-not-found text-9xl font-bold mb-8">
          404
        </h1>
        <h2 className="text-center md:text-5xl text-3xl font-semibold mb-16">
          Page Not Found
        </h2>
        <a
          href="/"
          className="text-xl font-semibold capitalize px-6 py-3 text-blue-primary bg-white border border-blue-primary hover:bg-blue-primary hover:text-white"
        >
          Return Home
        </a>
      </section>
    </div>
  );
};

export default PageNotFound;
