import { Fragment } from "react";
import { BiLock, BiRun } from "react-icons/bi";
import { BsFileBarGraph } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoRibbonOutline } from "react-icons/io5";
const About = () => {
  return (
    <Fragment>
      <section className="bg-[#F4F9FF] py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mx-2">
            <div className="flex flex-col sm:items-start items-center justify-center py-4">
              <h1 className="text-blue-primary sm:text-start text-center font-semibold text-6xl heading mb-12">
                Really, it’s all about you.
              </h1>
              <p className="text-xl text-blue-primary sm:text-start text-center font-medium leading-10">
                We can boast about LabCare’s accomplishments forever, but at the
                end of the day it’s about bringing you the best in diagnostics.
                Nothing else.
              </p>
            </div>
            <div className="hidden md:flex item-center justify-center">
              <div className="w-full h-full bg-cover bg-top"></div>
            </div>
          </div>
          <h3 className="text-blue-primary font-medium text-3xl text-center py-8">
            We’ve been tried and tested. And have passed with flying colors.​
          </h3>
        </div>
      </section>
      <section className="grid lg:grid-cols-8 sm:grid-cols-4 xs:grid-cols-2 p-16 gap-12">
        <div className="flex flex-col items-center justify-center gap-8">
          <img
            className="w-full"
            src="/img/clia-logo-1.png"
            alt="CLIA Certified"
          />
          <h6>CLIA Certified</h6>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <img
            className="w-full"
            src="/img/8b873fec4fe309b1_800x800ar.jpg"
            alt="CAP"
          />
          <h6>CAP</h6>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <img className="w-full" src="/img/images.jpg" alt="API - 2020" />
          <h6>API - 2020</h6>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <img
            className="w-full"
            src="/img/NYS_DOH_Wadsworth_copy.png"
            alt="NYS DOH"
          />
          <h6>NYS DOH</h6>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <img
            className=""
            src="/img/california-dept-of-health-pj8z1spknaqzmyrcb4e2t5ds0xyreizij6ub2on37k.png"
            alt="California DOH"
          />
          <h6>California DOH</h6>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <img
            className="w-full"
            src="/img/agency-title.jpg"
            alt="MD Dept of Health"
          />
          <h6>MD Dept of Health</h6>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <img
            className="w-full"
            src="/img/njdoh_svg.png"
            alt="State of NJ DOH"
          />
          <h6>State of NJ DOH</h6>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <img
            className="w-full"
            src="/img/DOH-logo.png"
            alt="PA Dept of Health"
          />
          <h6>PA Dept of Health</h6>
        </div>
      </section>

      <div className="mx-4 border-t border-[#8b98b8]"></div>
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mx-2 grid lg:grid-cols-2 gap-y-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex item-center justify-center sm:h-auto h-60">
                <div className="w-full h-full bg-cover bg-top"></div>
              </div>
              <div className="flex flex-col justify-center h-60">
                <h2 className="text-2xl font-semibold mb-4 text-blue-primary">
                  WE INNOVATE —
                </h2>
                <h6 className="text-[#536288]">
                  so that you can have access to the latest that science has to
                  offer.
                </h6>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex item-center justify-center lg:order-1 sm:order-2 sm:h-auto h-60">
                <div className="w-full h-full bg-cover bg-top"></div>
              </div>
              <div className="flex flex-col justify-center h-60 lg:order-2 order-1">
                <h2 className="text-2xl font-semibold mb-4 text-blue-primary">
                  WE AUTOMATE —
                </h2>
                <h6 className="text-[#536288]">
                  so that you can get fast and accurate results.
                </h6>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col justify-center h-60 px-4 lg:order-1 order-2">
                <h2 className="text-2xl font-semibold mb-4 text-blue-primary">
                  WE INTEGRATE —
                </h2>
                <h6 className="text-[#536288]">
                  so that you can get easy access to your results.​
                </h6>
              </div>
              <div className="flex item-center justify-center lg:order-2 order-1 sm:h-auto h-60">
                <div className="w-full h-full bg-cover bg-top"></div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col justify-center h-60 px-4 sm:order-1 order-2">
                <h2 className="text-2xl font-semibold mb-4 text-blue-primary">
                  WE COMMUNICATE —
                </h2>
                <h6 className="text-[#536288]">
                  so that you can get the experience you should.​
                </h6>
              </div>
              <div className="flex item-center justify-center sm:h-auto h-60 sm:order-2 order-1">
                <div className="w-full h-full bg-cover bg-top"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid lg:grid-cols-2">
        <div className="bg-[#F4F9FF] flex items-center lg:justify-end justify-center sm:h-[345px]">
          <div className="xs:w-[74%] w-11/12 py-20">
            <h2 className="text-4xl text-center font-medium heading">
              Your Local Lab
            </h2>
          </div>
        </div>
        <div className="flex lg:justify-start justify-center items-center sm:h-[345px]">
          <div className="xs:w-[74%] w-11/12 sm:py-0 py-6">
            <div className="flex group lg:pl-8">
              <BiRun className="text-amber-400 bg-orange-200 rounded-full shrink-0 w-[50px] h-[50px] p-2" />
              <div className="flex flex-col w-fit ml-4">
                <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                  It's about time.
                </h3>
                <p>
                  Waiting for test results has got to be the most nerve wracking
                  experience of all time. Which is why speed takes a center
                  stage at LabCare. We’re proud to have one of the fastest
                  turnaround track record in the entire Tri State area, so that
                  you can hold the test results in your hands within a few hours
                  from the time it was administered. What does that mean for
                  you? <span className="font-bold">Fast results.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:justify-end justify-center sm:h-[345px] lg:bg-white bg-[#F4F9FF]">
          <div className="xs:w-[74%] w-11/12 sm:py-0 py-6">
            <div className="flex group lg:pr-8">
              <IoRibbonOutline className="text-red-500 bg-red-300 rounded-full shrink-0 w-[50px] h-[50px] p-2" />
              <div className="flex flex-col w-fit ml-4">
                <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                  Higher accuracy
                </h3>
                <p>
                  We understand that diagnostics requires accuracy. With a fully
                  automated process, it significantly reduces the mistake
                  margin. Your specimen will not pass multiple checkpoints, nor
                  will it get handled by numerous technicians. What does that
                  mean for you?{" "}
                  <span className="font-bold">Reliable results.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:bg-[#F4F9FF] bg-white flex lg:justify-start justify-center items-center sm:h-[345px]">
          <div className="xs:w-[74%] w-11/12 sm:py-0 py-6">
            <div className="flex group lg:pl-8">
              <FaMapMarkedAlt className="text-green-500 bg-green-600/30 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" />
              <div className="flex flex-col w-fit ml-4">
                <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                  Right on track.
                </h3>
                <p>
                  Nothing should ever get lost in the shuffle. Especially
                  something as valuable as your specimen. Through a
                  sophisticated tracking system, we keep tabs on your specimen
                  and can track it during various stages. What does that mean
                  for you?{" "}
                  <span className="font-bold">Complete transparency.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F9FF] flex lg:justify-end items-center justify-center sm:h-[345px]">
          <div className="xs:w-[74%] w-11/12 sm:py-0 py-6">
            <div className="flex group lg:pr-8">
              <BsFileBarGraph className="text-sky-500 bg-sky-400/70 rounded-full shrink-0 w-[50px] h-[50px] p-2 overflow-visible" />
              <div className="flex flex-col w-fit ml-4">
                <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                  Clarity is Key.
                </h3>
                <p>
                  Your test results should be easy to access and easier to
                  decipher. No who-can-read-this jargon or high falutin terms to
                  google. All you need to do is log in to your account and
                  you’ll find your easy-to- read test results staring right at
                  you. What does that mean for you?{" "}
                  <span className="font-bold">
                    Clear results, easy to access.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-start justify-center items-center sm:h-[345px]">
          <div className="xs:w-[74%] w-11/12 sm:py-0 py-6">
            <div className="flex group lg:pl-8">
              <BiLock className="text-black bg-blue-primary/25 rounded-full shrink-0 w-[50px] h-[50px] p-2" />
              <div className="flex flex-col w-fit ml-4">
                <h3 className="group-hover:text-blue-secondary text-neutral-800 text-2xl font-medium transition-all duration-300">
                  Handled with care.
                </h3>
                <p>
                  Our collection process is a direct reflection of the respect
                  we have for your specimen. The vials we use are completely
                  contamination proof and our storage vaults are equipped with
                  secure combination locks to make sure that your specimen is in
                  perfect condition when it reaches the lab. What does that mean
                  for you? <span className="font-bold">Complete security.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
