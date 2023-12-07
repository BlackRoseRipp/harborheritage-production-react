import { Fragment } from "react";
import { BiLock, BiRun } from "react-icons/bi";
import { BsFileBarGraph } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoRibbonOutline } from "react-icons/io5";
const About = () => {
  return (
    <Fragment>
      <section className="relative w-full overflow-x-hidden">
        <div className="bg-[url(../public/img/pexels-henri-mathieusaintlaurent.jpg)] bg-cover bg-center bg-no-repeat w-full banner lg:before:border-t-[6.25rem] md:before:border-t-[4rem] lg:after:border-t-[6.25rem] md:after:border-t-[4rem]">
          <div className="bg-black/50 w-full">
            <div className="max-screen-w-xl mx-auto w-full lg:min-h-[900px] min-h-[500px] flex items-end justify-center px-2">
              <h1 className="text-white heading md:text-5xl text-3xl font-semibold text-center max-w-6xl lg:pb-[6.25rem] md:pb-16 pb-7">
                Discover Harbor Heritage University
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto w-full px-2 lg:py-24 py-16">
        <div className="flex flex-col items-center lg:gap-16 gap-8">
          <h2 className="heading text-2xl md:text-4xl font-semibold text-center text-blue-primary">
            Some of our work...
          </h2>
          <p className="lg:text-start text-center leading-none">
            We have celebrated many years in the service and now want to be able
            to make this a great offering for you.
            <br />
            <br />
            Please reach out if you are ready to open the doors to better
            service in the world of Gender and Human Rights.
          </p>
          <a
            href="/contact"
            className="btn-primary text-blue-primary border-blue-primary hover:bg-gold-primary hover:border-gold-primary hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </section>
      <div className="max-w-7xl mx-auto w-[calc(100vw-1rem)] h-0.5 bg-gray-300"></div>
      <section className="max-w-6xl mx-auto w-full px-2 lg:py-24 py-16">
        <div className="columns-2 gap-8">
          <img
            className="w-full mb-8"
            src="/img/works/fighr-cdi-certificate-quainoo_orig.jpg"
            alt="FIGHR CDI Cert"
          />
          <img
            className="w-full mb-8"
            src="/img/works/fighr-ghr-global-ambassador-kksal-2_orig.jpg"
            alt="FIGHR GHR Global Ambassador"
          />
          <img
            className="w-full mb-8"
            src="/img/works/certificate-of-accreditation-fighr-2_orig.jpg"
            alt="FIGHR Accreditation Cert"
          />
          <img
            className="w-full mb-8"
            src="/img/works/2022-fighr-peace-prize-award-d-akende_orig.jpg"
            alt="FIGHR Peace Prize Award"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default About;
