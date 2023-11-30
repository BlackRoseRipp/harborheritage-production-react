import { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <section className="mt-[-150px] z-40">
        <div className="max-w-6xl mx-auto p-10 rounded-lg shadow-[0_0_10px_10px_rgba(0,0,0,0.25)] bg-[#F4F9FF] grid md:grid-cols-3 gap-12">
          <div className="flex flex-col">
            <img
              className="w-full h-[244px] rounded-lg"
              src="/img/labq-HQ-brooklyn-1.jpg"
              alt="Brooklyn - Sunset Park Location"
            />
            <h2 className="text-2xl font-bold heading my-4">
              Brooklyn Laboratory
            </h2>
            <div className="flex flex-col">
              <h5 className="text-neutral-400 mb-4">
                140 58th St, Bldg A Suite 3L
                <br />
                Brooklyn, NY 11220
              </h5>
              <a href="tel:(718)534-5227" className="text-[#3892E7] mb-4 w-fit">
                (718) 534-5227
              </a>
              <a
                href="mailto:helpdesk@labq.com"
                className="text-[#3892E7] mb-4 w-fit"
              >
                helpdesk@labq.com
              </a>
            </div>

            <a
              href="https://g.page/LabQ-Quick-Results-Save-Lives?share"
              className="bg-white border border-black rounded-lg font-semibold py-4 text-center px-8"
            >
              Get Directions
            </a>
          </div>
          <div className="flex flex-col">
            <img
              className="w-full h-[244px] rounded-lg"
              src="/img/Picture1-1.png"
              alt="New Jersey - Mount Olive Location"
            />
            <h2 className="text-2xl font-bold heading my-4">
              New Jersey Laboratory
            </h2>
            <div className="flex flex-col">
              <h5 className="text-neutral-400 mb-4">
                100 International Dr
                <br />
                Mount Olive, NJ 07828
              </h5>
              <a
                href="tel:(732) 359-5227"
                className="text-[#3892E7] mb-4 w-fit"
              >
                (732) 359-5227
              </a>
              <a
                href="mailto:nj@labq.com"
                className="text-[#3892E7] mb-4 w-fit"
              >
                nj@labq.com
              </a>
            </div>

            <a
              href="https://g.page/hqcenter-mount-olive?share"
              className="bg-white border border-black rounded-lg font-semibold py-4 text-center px-8"
            >
              Get Directions
            </a>
          </div>
          <div className="flex flex-col">
            <img
              className="w-full h-[244px] rounded-lg"
              src="/img/bp-1-1024x768.jpg"
              alt="Brooklyn - Boro Park Outside"
            />
            <h2 className="text-2xl font-bold heading my-4">
              Boro Park Patient Center
            </h2>
            <div className="flex flex-col">
              <h5 className="text-neutral-400 mb-4">
                4508 16th Avenue, 3rd Floor
                <br />
                Brooklyn NY 11204
              </h5>
              <a href="tel:(718)247-8000" className="text-[#3892E7] mb-4 w-fit">
                (718) 247-8000
              </a>
              <a
                href="mailto:psc1001@labq.com"
                className="text-[#3892E7] mb-4 w-fit"
              >
                psc1001@labq.com
              </a>
            </div>

            <a
              href="https://www.google.com/maps/place/LabQ+Diagnostics/@40.6332191,-73.9857885,17z/data=!3m1!4b1!4m5!3m4!1s0x89c24546f8fcaecf:0x319c55671fe57774!8m2!3d40.633215!4d-73.9835998?shorturl=1"
              className="bg-white border border-black rounded-lg font-semibold py-4 text-center px-8"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
      <section className="py-24 max-w-screen-lg w-full mx-auto">
        <h1 className="heading font-bold text-center text-4xl mb-4 mx-2">
          Get in touch with us
        </h1>
        <form className="grid lg:grid-cols-2 gap-4 w-full px-2">
          <input
            className="form-input lg:col-span-2"
            type="name"
            id="contactNameInput"
            placeholder="Name"
            required
          ></input>
          <input
            className="form-input"
            type="email"
            id="contactEmailInput"
            placeholder="Email"
            required
          ></input>
          <input
            className="form-input"
            type="phone"
            id="contactPhoneInput"
            placeholder="Phone Number"
            required
          ></input>
          <textarea
            className="form-input lg:col-span-2"
            id="contactMessageInput"
            placeholder="Message"
            rows="6"
            required
          ></textarea>
          <button
            type="submit"
            disabled={false}
            className="lg:col-span-2 btn-primary font-semibold text-2xl text-white bg-[#3892e7]"
          >
            Send
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default Contact;
