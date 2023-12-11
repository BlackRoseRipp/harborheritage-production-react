import { Fragment, useEffect } from "react";
import { Carousel, initTE } from "tw-elements";
import useWindowSize from "../hooks/useWindowSize";

const About = () => {
  const size = useWindowSize();
  useEffect(() => {
    initTE({ Carousel });
  });

  const carouselSlides = size.width > 766 ? 9 : 18;

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
      <div className="max-w-7xl mx-auto w-[calc(100vw-2rem)] h-0.5 bg-gray-300"></div>
      <section className="max-w-6xl mx-auto w-full px-2 lg:py-24 py-16">
        <div
          id="carouselOurWork"
          className="relative"
          data-te-carousel-init
          data-te-ride="carousel"
        >
          <div
            className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators
          >
            {Array.from(Array(carouselSlides)).map((x, index) => {
              return index > 0 ? (
                <button
                  type="button"
                  data-te-target="#carouselOurWork"
                  data-te-slide-to={index}
                  className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-gray-800 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-current="true"
                  aria-label={"Slide " + (index + 1)}
                ></button>
              ) : (
                <button
                  type="button"
                  data-te-target="#carouselOurWork"
                  data-te-slide-to={index}
                  data-te-carousel-active
                  className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-gray-800 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-current="true"
                  aria-label={"Slide " + (index + 1)}
                ></button>
              );
            })}
          </div>
          <div className="relative w-[calc(100%-64px)] mx-auto overflow-hidden after:clear-both after:block after:content-[''] pb-[39px]">
            {size.width > 766 ? (
              <Fragment>
                <div
                  className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                  data-te-carousel-active
                >
                  <div className="w-full grid grid-cols-2 gap-4">
                    <div className="flex justify-center">
                      <img
                        className="w-full"
                        src="/img/works/fighr-cdi-certificate-quainoo_orig.jpg"
                        alt="FIGHR CDI Cert"
                      />
                    </div>
                    <div className="flex justify-center">
                      <img
                        className="w-full"
                        src="/img/works/fighr-ghr-global-ambassador-kksal-2_orig.jpg"
                        alt="FIGHR GHR Global Ambassador"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="w-full grid grid-cols-2 gap-4">
                    <div className="flex justify-center">
                      <img
                        className="w-full"
                        src="/img/works/certificate-of-accreditation-fighr-2_orig.jpg"
                        alt="FIGHR Accreditation Cert"
                      />
                    </div>
                    <div className="flex justify-center">
                      <img
                        className="w-full"
                        src="/img/works/2022-fighr-peace-prize-award-d-akende_orig.jpg"
                        alt="FIGHR Peace Prize Award"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="w-full grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                      <img
                        className="w-full"
                        src="/img/works/ghraam-logo-white.jpg"
                        alt="GHRAAM"
                      />
                      <p className="text-center">
                        COMING 2025 - The GHRAAM (Atlanta, Georgia)
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        className="w-full"
                        src="/img/works/60a3e896-ace9-48a3-8257-1e1f0485f3d8-1879-000001a44af23095_orig.jpg"
                        alt="FIGHR Peace Prize Award"
                      />
                      <p className="text-center">
                        Our Founder as a proud Member of the the #GODSquadNYC;
                        an Interfaith Liturgical group of New York City.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="w-full grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                      <img
                        className="w-full"
                        src="/img/works/cdf9188c-1767-40c2-90ec-98c646062e49.jpg"
                        alt="Secretary General Gutterres"
                      />
                      <p className="text-center">
                        Our Founder with the Secretary General António
                        Gutterres, at the United Nations, New York.
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        className="w-full"
                        src="/img/works/un-muhammad.jpg"
                        alt="Madame Secretary General Mohammed"
                      />
                      <p className="text-center">
                        Our Founder with Madame Secretary General, Amina J
                        Mohammed, United Nations, New York City
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="w-full grid grid-cols-2 gap-4">
                    <div className="flex justify-center">
                      <img
                        className="w-full"
                        src="/img/works/ameena-ambassador_orig.jpg"
                        alt="Ameena Ambassador"
                      />
                    </div>
                    <div className="flex justify-center">
                      <img
                        className="w-full"
                        src="/img/works/2023-may-fighr-mental-health-awareness-flyer_orig.jpg"
                        alt="FIGHR Mental Health Awareness"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="w-full grid grid-cols-2 gap-4">
                    <div className="flex justify-center">
                      <img
                        className="w-full"
                        src="/img/works/fathers-on-fighr-doudar_orig.jpg"
                        alt="Fathers on FIGHR"
                      />
                    </div>
                    <div className="flex justify-center">
                      <img
                        className="w-full"
                        src="/img/works/certificate-of-collaboration-black-majesty-1_orig.jpg"
                        alt="Cert of Collaboration Black Majesty"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="w-full grid grid-cols-2 gap-4">
                    <div className="flex justify-center">
                      <img
                        className="w-full"
                        src="/img/works/2023-womens-day-linkedin-live_orig.jpg"
                        alt="2023 Womens Day LinkedIn"
                      />
                    </div>
                    <div className="flex justify-center">
                      <img
                        className="w-full"
                        src="/img/works/diplomat-of-the-month-certificate-farhan-may-23_orig.jpg"
                        alt="Diplomat of the Month Cert"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="w-full grid grid-cols-2 gap-4">
                    <div className="flex justify-center">
                      <img
                        className="w-full"
                        src="/img/works/emit-method-flyer.jpg"
                        alt="Emit Method"
                      />
                    </div>
                    <div className="flex justify-center">
                      <img
                        className="w-full"
                        src="/img/works/plight-professional-center-logo_orig.png"
                        alt="PLIGHT Professional Center"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="w-full grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                      <img
                        className="w-full"
                        src="/img/works/equicom-public-bureau-logo_orig.png"
                        alt="Equicom Public Bureau"
                      />
                      <p className="text-center">
                        The first agency for the procurement of Data and
                        Research for Equity and Equality for the inclusion of
                        the BIPOC Community
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        className="w-full"
                        src="/img/works/beam-logo.png"
                        alt="BEAM"
                      />
                      <p className="text-center">
                        First Primary and Secondary Educational Curriculum ​for
                        the BIPOC Diaspora
                      </p>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div
                  className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                  data-te-carousel-active
                >
                  <div className="flex justify-center">
                    <img
                      className="w-full"
                      src="/img/works/fighr-cdi-certificate-quainoo_orig.jpg"
                      alt="FIGHR CDI Cert"
                    />
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex justify-center">
                    <img
                      className="w-full"
                      src="/img/works/fighr-ghr-global-ambassador-kksal-2_orig.jpg"
                      alt="FIGHR GHR Global Ambassador"
                    />
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex justify-center">
                    <img
                      className="w-full"
                      src="/img/works/certificate-of-accreditation-fighr-2_orig.jpg"
                      alt="FIGHR Accreditation Cert"
                    />
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex justify-center">
                    <img
                      className="w-full"
                      src="/img/works/2022-fighr-peace-prize-award-d-akende_orig.jpg"
                      alt="FIGHR Peace Prize Award"
                    />
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="w-full"
                      src="/img/works/ghraam-logo-white.jpg"
                      alt="GHRAAM"
                    />
                    <p className="text-center">
                      COMING 2025 - The GHRAAM (Atlanta, Georgia)
                    </p>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="w-full"
                      src="/img/works/60a3e896-ace9-48a3-8257-1e1f0485f3d8-1879-000001a44af23095_orig.jpg"
                      alt="FIGHR Peace Prize Award"
                    />
                    <p className="text-center">
                      Our Founder as a proud Member of the the #GODSquadNYC; an
                      Interfaith Liturgical group of New York City.
                    </p>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="w-full"
                      src="/img/works/cdf9188c-1767-40c2-90ec-98c646062e49.jpg"
                      alt="Secretary General Gutterres"
                    />
                    <p className="text-center">
                      Our Founder with the Secretary General António Gutterres,
                      at the United Nations, New York.
                    </p>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="w-full"
                      src="/img/works/un-muhammad.jpg"
                      alt="Madame Secretary General Mohammed"
                    />
                    <p className="text-center">
                      Our Founder with Madame Secretary General, Amina J
                      Mohammed, United Nations, New York City
                    </p>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex justify-center">
                    <img
                      className="w-full"
                      src="/img/works/ameena-ambassador_orig.jpg"
                      alt="Ameena Ambassador"
                    />
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex justify-center">
                    <img
                      className="w-full"
                      src="/img/works/2023-may-fighr-mental-health-awareness-flyer_orig.jpg"
                      alt="FIGHR Mental Health Awareness"
                    />
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex justify-center">
                    <img
                      className="w-full"
                      src="/img/works/fathers-on-fighr-doudar_orig.jpg"
                      alt="Fathers on FIGHR"
                    />
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex justify-center">
                    <img
                      className="w-full"
                      src="/img/works/certificate-of-collaboration-black-majesty-1_orig.jpg"
                      alt="Cert of Collaboration Black Majesty"
                    />
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex justify-center">
                    <img
                      className="w-full"
                      src="/img/works/2023-womens-day-linkedin-live_orig.jpg"
                      alt="2023 Womens Day LinkedIn"
                    />
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex justify-center">
                    <img
                      className="w-full"
                      src="/img/works/diplomat-of-the-month-certificate-farhan-may-23_orig.jpg"
                      alt="Diplomat of the Month Cert"
                    />
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex justify-center">
                    <img
                      className="w-full"
                      src="/img/works/emit-method-flyer.jpg"
                      alt="Emit Method"
                    />
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex justify-center">
                    <img
                      className="w-full"
                      src="/img/works/plight-professional-center-logo_orig.png"
                      alt="PLIGHT Professional Center"
                    />
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="w-full"
                      src="/img/works/equicom-public-bureau-logo_orig.png"
                      alt="Equicom Public Bureau"
                    />
                    <p className="text-center">
                      The first agency for the procurement of Data and Research
                      for Equity and Equality for the inclusion of the BIPOC
                      Community
                    </p>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="w-full"
                      src="/img/works/beam-logo.png"
                      alt="BEAM"
                    />
                    <p className="text-center">
                      First Primary and Secondary Educational Curriculum ​for
                      the BIPOC Diaspora
                    </p>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
          <button
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-fit items-center justify-center border-0 bg-none p-0 text-center text-gray-700 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselOurWork"
            data-te-slide="prev"
          >
            <span class="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          <button
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-fit items-center justify-center border-0 bg-none p-0 text-center text-gray-700 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselOurWork"
            data-te-slide="next"
          >
            <span class="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
