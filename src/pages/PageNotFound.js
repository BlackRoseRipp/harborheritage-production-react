import React, { Fragment } from "react";

const PageNotFound = () => {
  return (
    <section className="h-screen bg-contain bg-center bg-no-repeat">
      <h1 className="text-center text-blue-secondary/80 heading text-4xl font-bold py-12">
        Coming Soon...
      </h1>
      <div className="flex lg:w-[350px] w-0 mx-auto">
        <img
          src="/img/404/Asset-2@0.25x-p3lhuy8ha2kfc72k10vvh9l73cpegawxjyxwb4jxfk.png"
          className="w-3/5"
        />
      </div>
      <div className="w-fit mx-auto mt-12">
        <a
          href="/"
          className="rounded-lg py-4 px-8 text-xl text-center text-blue-secondary font-semibold bg-white border-2 border-black"
        >
          Return Home
        </a>
      </div>
    </section>
  );
};

export default PageNotFound;
