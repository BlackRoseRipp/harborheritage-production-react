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
        <div className="bg-[url(../public/img/pexels-rdne-stock-project-771317.jpg)] bg-cover bg-center bg-no-repeat w-full banner lg:before:border-t-[6.25rem] md:before:border-t-[4rem] lg:after:border-t-[6.25rem] md:after:border-t-[4rem]">
          <div className="bg-black/50 w-full">
            <div className="max-screen-w-xl mx-auto w-full lg:min-h-[900px] min-h-[500px] flex items-end justify-center px-2">
              <h1 className="text-white heading md:text-5xl text-3xl font-semibold text-center max-w-6xl lg:pb-[6.25rem] md:pb-16 pb-7">
                The first and only University for the study of Gender and Human
                Rights Advocacy and Leadership
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto w-full px-2 lg:py-24 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              className="w-[500px] lg:block hidden"
              src="/img/pexels-ekaterina-bolovtsova-6077.jpg"
              alt="About Us"
            />
          </div>
          <div className="flex flex-col justify-center lg:items-start items-center gap-4">
            <h2 className="heading lg:text-4xl text-2xl text-center text-blue-primary font-semibold">
              A Little About ​Us...
            </h2>
            <p className="text-center lg:text-start">
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
              className="btn-primary hover:bg-gold-primary hover:text-white hover:border-gold-primary text-blue-primary border-blue-primary"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="max-w-screen-xl w-full mx-auto px-2 lg:py-24 py-16 flex flex-col items-center gap-4">
          <h2 className="heading font-semibold lg:text-4xl text-2xl text-center">
            Our Academic Programs
          </h2>
          <div className="grid lg:grid-cols-2 gap-x-4 gap-y-8">
            <div className="flex items-center gap-2">
              <img
                className="w-48 h-48"
                src="/img/logos/heritage-prep-logo-copy-removebg-preview.png"
                alt="Heritage Prep Home School"
              />
              <div className="flex flex-col">
                <h4 className="font-medium lg:text-3xl text-xl heading">
                  Heritage Prep Home School
                </h4>
                <a
                  href="/fighr-academic-conservatory"
                  className="btn-primary text-blue-primary border-blue-primary hover:bg-blue-primary hover:text-white w-fit"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-48 h-48"
                src="/img/logos/fighr-academic-conservatory-official-logo.png"
                alt="Heritage Prep Home School"
              />
              <div className="flex flex-col">
                <h4 className="font-medium lg:text-3xl text-xl heading">
                  K-12 Private School
                </h4>
                <a
                  href="/fighr-academic-conservatory"
                  className="btn-primary text-blue-primary border-blue-primary hover:bg-blue-primary hover:text-white w-fit"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-48 h-48"
                src="/img/logos/lincoln-college-logo.jpg"
                alt="Heritage Prep Home School"
              />
              <div className="flex flex-col">
                <h4 className="font-medium lg:text-3xl text-xl heading">
                  College of BIPOC Research
                </h4>
                <a
                  href="/hhu-lincoln-college-of-bipoc-research"
                  className="btn-primary text-blue-primary border-blue-primary hover:bg-blue-primary hover:text-white w-fit"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-48 h-48"
                src="/img/logos/lalo-college-logo.jpg"
                alt="Heritage Prep Home School"
              />
              <div className="flex flex-col">
                <h4 className="font-medium lg:text-3xl text-xl heading">
                  College of Restorative Justice
                </h4>
                <a
                  href="/hhu-lalo-college-of-restorative-justice"
                  className="btn-primary text-blue-primary border-blue-primary hover:bg-blue-primary hover:text-white w-fit"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-48 h-48"
                src="/img/logos/iglass-womens-center-logo.jpg"
                alt="Heritage Prep Home School"
              />
              <div className="flex flex-col">
                <h4 className="font-medium lg:text-3xl text-xl heading">
                  College of Women's Studies
                </h4>
                <a
                  href="/hhu-iglass-womens-college"
                  className="btn-primary text-blue-primary border-blue-primary hover:bg-blue-primary hover:text-white w-fit"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-48 h-48"
                src="/img/logos/plight-professional-center-logo.png"
                alt="Heritage Prep Home School"
              />
              <div className="flex flex-col">
                <h4 className="font-medium lg:text-3xl text-xl heading">
                  PLIGHT Professional Courses & CEU's
                </h4>
                <a
                  href="/plight-professional-courses"
                  className="btn-primary text-blue-primary border-blue-primary hover:bg-blue-primary hover:text-white w-fit"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-full w-full top-0 z-[-1] bg-gray-100">
          <div className="w-full h-full bg-[url(../public/img/logos/harbor-heritage-university-official-crest_orig.png)] bg-contain bg-center bg-no-repeat opacity-10"></div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto w-full px-2 lg:py-24 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col lg:items-end items-center justify-center gap-8">
            <h2 className="heading lg:text-4xl text-2xl font-semibold lg:text-end text-center">
              Current Careers in Gender and Human Rights
            </h2>
            <p className="text-center lg:text-end">
              Outside of the many interconnected fields, opportunities and
              merging collaboratives, you will be pleasantly surprised at the
              many careers we have within of Gender and Human Rights alone. From
              Data to Media to Research, you will be sure to find a place in
              this filed and use this education to make a difference in the
              continuum of the best ay to make a difference in the community you
              have been called to serve.
              <br />
              <br />
              Browse the over 70 ways you can make a difference in this
              career-field alone below! You'll be amazed at what you will find!
            </p>
            <a
              href="/pdfs/harborheritage-production-react/public/pdfs/gender_and_human_rights_roles_and_careers.pdf"
              className="btn-primary text-blue-primary border-blue-primary hover:border-gold-primary hover:text-white hover:bg-gold-primary"
            >
              Learn More
            </a>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-[500px] lg:block hidden"
              src="/img/pexels-alex-green-5699492.jpg"
              alt="Current Leaders in Gender and Human Rights"
            />
          </div>
        </div>
      </section>
      <section className="bg-blue-primary">
        <div className="max-w-screen-xl mx-auto w-full px-2 lg:py-24 py-16">
          <div className="flex flex-col items-center justify-center gap-8">
            <h3 className="heading text-white font-semibold lg:text-4xl text-2xl text-center">
              Our Extra-Curricular Offerings
            </h3>
            <div className="border-2 rounded-lg border-blue-primary bg-white w-fit p-4 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-between gap-4">
                <div className="flex flex-col items-center gap-4">
                  <img
                    className="w-auto"
                    src="/img/logos/iota-gamma-rho-logo-main.png"
                    alt="Iota Gamma Rho"
                  />
                  <h5 className="heading text-center lg:text-3xl text-xl font-medium">
                    Iota Gamma Rho
                  </h5>
                  <p className="text-center">
                    This is the first and only Co-Ed Social Fraternity for
                    Gender and Human Rights. This international membership
                    allows the bearer advocacy, reference and an intentional
                    network of referral around the world.
                  </p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.fighr.org/iota-gamma-rho.html"
                  className="mt-8 btn-primary text-blue-primary border-blue-primary hover:text-white hover:border-gold-primary hover:bg-gold-primary"
                >
                  Learn More
                </a>
              </div>
              <div className="flex flex-col justify-between items-center gap-4">
                <div className="flex flex-col items-center gap-4">
                  <img
                    className="w-auto"
                    src="/img/logos/tnwd-main-logo-all-logos.png"
                    alt="Human Rights Corps"
                  />
                  <h5 className="heading text-center lg:text-3xl text-xl font-medium">
                    Human Rights Corps
                  </h5>
                  <p className="text-center">
                    Similar to the "Peace Corps" our Human Rights Corps (HRC) is
                    a Gender and Human Rights Travel/Host Work Program. We are
                    in North Nigeria and The Republic of the Gambia. Other
                    tentative countries are South Africa, Kenya and The DRC.
                  </p>
                </div>
                <a
                  /* target="_blank"
                  rel="noopener noreferrer" */
                  href="javascript:;"
                  className="mt-8 btn-primary text-blue-primary border-blue-primary hover:text-white hover:border-gold-primary hover:bg-gold-primary"
                >
                  Learn More
                </a>
              </div>
              <div className="flex flex-col items-center justify-between gap-4">
                <div className="flex flex-col items-center gap-4">
                  <img
                    className="w-auto"
                    src="/img/logos/grracee-national-doula-academy-logo.png"
                    alt="Maternal Care Training"
                  />
                  <h5 className="heading text-center lg:text-3xl text-xl font-medium">
                    Maternal Care Training
                  </h5>
                  <p className="text-center">
                    Offering specialized training for those that are wanting to
                    help coach better birth outcomes, as a Licensee as a
                    Certified Doula, especially geared toward women that are in
                    rural, undeveloped and from historically underserved foreign
                    lands.
                  </p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.fighr.org/grracee-national-doula-academy.html"
                  className="mt-8 btn-primary text-blue-primary border-blue-primary hover:text-white hover:border-gold-primary hover:bg-gold-primary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-0.5 bg-gray-300 my-16"></div>
          <div className="flex flex-col items-center justify-center gap-8">
            <h3 className="heading text-white font-semibold lg:text-4xl text-2xl text-center">
              Our Ethical Council
            </h3>
            <div className="border-2 rounded-lg border-blue-primary bg-white w-fit p-4 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center gap-4">
                <img
                  className="w-auto"
                  src="/img/logos/copera-logo.png"
                  alt="copera"
                />
                <p className="text-center">
                  A division of the GHREET Commision, this is the certifying
                  committee for those challenging the board as an International
                  Interfaith Professional Chaplain. They are also the reporting
                  agency for those wanting to verify current or retired
                  Chaplains from HHU.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img
                  className="w-auto"
                  src="/img/logos/ghrape-logo-final.png"
                  alt="Human Rights Corps"
                />
                <p className="text-center">
                  This is the community of educators that think outside-the-box
                  in teaching and learning modalities from Primary to University
                  level offerings. This co-op of retired teachers, New Age
                  thinkers, home-school parents and current Educators from
                  International, Tribal and Indigenous silos, seek to repeat
                  what works in education and its offering, to allow students to
                  learn how they receive knowledge and open the world as their
                  classroom.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img
                  className="w-auto"
                  src="/img/logos/ghreet-commission-logo-2.png"
                  alt="Maternal Care Training"
                />
                <p className="text-center">
                  This governing body sets the standards and raises the protocol
                  to offer an Emotional Intelligent Charter Montessori blend to
                  the educational model of the curriculum of Gender and Human
                  Rights Education. It allows Natural and Human Resources,
                  Life/Work Experiences and a in bred Spiritual Divinity to the
                  allowances of the school day and the way the Educators are
                  allowed to teach. This is equally the reporting body of those
                  needing to strengthen their approach to a more interdependent
                  leadership in ethics and integrity in the classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto w-full px-2 lg:py-24 py-16">
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <h3 className="heading text-2xl lg:text-4xl font-semibold text-center text-blue-primary mb-8">
            Get In Touch
          </h3>
          <a
            href="/contact"
            className="btn-primary text-blue-primary border-blue-primary hover:bg-gold-primary hover:text-white hover:border-gold-primary"
          >
            Contact Us
          </a>
          <p className="text-gray-700 max-w-2xl text-center">
            We are always onboarding more programs. Please keep coming back and
            we will keep you updated as to the official launch of all of our new
            and expanding class offerings.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
