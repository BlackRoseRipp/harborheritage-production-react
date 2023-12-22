import { Fragment } from "react";
import FellowshipList from "../store/FELLOWSHIPS.json";

const Fellowships = () => {
  const presentList = FellowshipList.filter((fellowship) => {
    if (!fellowship.future) {
      return fellowship;
    }
  });
  const futureList = FellowshipList.filter((fellowship) => {
    if (fellowship.future) {
      return fellowship;
    }
  });

  return (
    <Fragment>
      <section className="relative w-full overflow-x-hidden">
        <div className="bg-[url(../public/img/pexels-matheus-bertelli-3856027.jpg)] bg-cover bg-top 2xl:bg-[center_top_-10rem] bg-no-repeat w-full banner lg:before:border-t-[6.25rem] md:before:border-t-[4rem] lg:after:border-t-[6.25rem] md:after:border-t-[4rem]">
          <div className="bg-black/50 w-full">
            <div className="max-w-screen-xl mx-auto w-full lg:min-h-[700px] xl:min-h-[800px] min-h-[500px] flex items-end justify-center px-2">
              <h1 className="text-white heading md:text-5xl text-3xl font-semibold text-center max-w-6xl lg:pb-[6.25rem] md:pb-16 pb-7">
                HHU Diplomatic Fellowships ​in Gender and Human Rights
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl w-full mx-auto px-2 lg:py-24 py-16">
        <div className="flex flex-col gap-8">
          <h3 className="md:text-4xl text-2xl font-semibold text-center heading">
            Interdisciplinary Virtual Diplomatic Fellowships
          </h3>
          <p className="text-wall">
            These fellowships are based on a strict and competent selection
            process. Successful candidates will have met the criteria and
            CURRENTLY work in these fields or are currently being educated to
            enter these fields of expertise. Upon successful completion of these
            course, Fellows go on to teach the curriculum in their communities
            and regions. These Fellowships are for those seeking to begin a
            practice in the respective fields or upgrade their current talents
            in their established organizations. Upon Completion of these cohorts
            will allow Fellows to properly register their business, certify
            their practice or add fiduciary value to their grant funding and
            requests.
            <br />
            <br />
            <u>
              <strong>NOTE</strong>
            </u>
            : Classes will be open to the{" "}
            <u>
              <strong>FIRST</strong>
            </u>{" "}
            fifteen (15) students that successfully apply for each session. If
            you <u>DONT</u> make the session you choose you are welcome to apply
            for the next session or another course at that same time; first
            come, first served.
            <br />
            <br />
            <strong>
              <u>Application process</u>:
            </strong>
            <br />
            Each and every applicant <strong>must</strong> adhere to these
            procedures or will have their emailed application deleted.
            Successful completion of these Cohorts certifies the Fellow in the
            field, allowing them to teach the subject matter for Communal,
            Tribal and Linguistic needs.
            <br />
            <br />
            To apply for ANY of these fellowships you{" "}
            <strong>
              <u>MUST</u>
            </strong>
            :
            <br />
            <br />
            1.{" "}
            <strong>
              <u>Email</u>:
            </strong>{" "}
            HarborHeritageUniversity@gmail.com
            <br />
            <strong>Subject line</strong>: (the title of the fellowship you are
            wanting; you MUST send a <u>seperate</u> email for each course you
            are asking for.)
            <br />
            <strong>Email Body</strong>
            : (Small introduction of yourself and why you want this course)
            <br />
            <br />
            2.{" "}
            <u>
              <strong>Attach</strong>
            </u>
            : updated professional résumé or academic CV to the email.
            <br />
            Résumé/CV must be updated with your{" "}
            <u>
              <strong>current</strong>
            </u>
            :
            <br />
            - FULL LEGAL NAME (no pet, tribal or nicknames that cannot be
            validated by a Local, State or National ID/Passport)
            <br />
            - The Country you are from or currently representing
            <br />- A Current, updated and <strong>WORKING</strong>{" "}
            WhatsApp/Telegram Number
            <br />
            - Your Gender/Binary Status
            <br />
            - Your work, education, volunteer or social interest in Civil, Human
            and/or Gender Rights.
            <br />
            - The Dates/Sessions you would like to attend. (First come/First
            Served)
            <br />
            **You are only allowed to sign up for two (2) Fellowships at a time,
            Max!
            <br />
            <br />
            <u>
              <strong>Investment</strong>
            </u>
            :
            <br />
            Courses offered internationally and those run or owned by Youth or
            their representatives are offered at a discounted rate; courses can
            be offered complementary if the FIGHR course offered is for an
            accredited academic program.
            <ul>
              <li>
                Eight (8) Week Course - <strong>USD</strong>{" "}
                <strong>$500.00</strong>
              </li>
              <li>
                Ten (10) week Course - <strong>USD</strong>{" "}
                <strong>$700.00</strong>
              </li>
              <li>
                Twelve (12) week course - <strong>USD</strong>{" "}
                <strong>$900.00</strong>
              </li>
            </ul>
          </p>
        </div>
      </section>
      <div className="h-0.5 max-w-screen-2xl w-[calc(100%-2rem)] mx-auto bg-gold-primary"></div>
      <section className="max-w-screen-xl mx-auto w-full px-2 py-16 lg:py-24">
        <div className="flex flex-col gap-8">
          {presentList.map((fellowship) => {
            const slicedText = fellowship.duration
              .split(" ")
              .slice(0, -1)
              .join(" ");
            const boldedText = fellowship.duration.split(" ")[-1];
            return (
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="hidden sm:flex justify-center items-center">
                  <img
                    src="/img/logos/aghrass-logo-transparent-1.png"
                    className="w-full"
                    alt="AGHRASS"
                  />
                </div>
                <div className="col-span-2 flex flex-col justify-center gap-2">
                  <h5 className="underline font-bold text-lg">
                    {fellowship.title}
                  </h5>
                  <h6 className="text-base">
                    {slicedText}&nbsp;
                    <span className="font-bold">{boldedText}</span>
                  </h6>
                  {fellowship.offerings.length > 0 ? (
                    <div className="flex flex-col">
                      <h6 className="underline">ANNUAL OFFERINGS:</h6>
                      <p>{fellowship.offerings}</p>
                    </div>
                  ) : (
                    <h6 className="text-red-600">
                      COHORTS ARE PERMANENTLY CLOSED
                    </h6>
                  )}
                  {fellowship.certs ? (
                    <div className="flex flex-col">
                      <h6 className="underline">
                        Professional Certificates offered:
                      </h6>
                      <ol className="list-decimal list-outside ml-4">
                        {fellowship.certs.split("\n").map((cert) => (
                          <li>{cert}</li>
                        ))}
                      </ol>
                    </div>
                  ) : null}
                  <p>{fellowship.description}</p>
                  {fellowship.pdf.length > 0 ? (
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={"/pdfs/" + fellowship.pdf}
                      className="w-fit btn-primary hover:bg-gold-primary hover:text-white hover:border-gold-primary text-blue-primary border-blue-primary"
                    >
                      Download Syllabus
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="h-0.5 max-w-screen-2xl w-[calc(100%-2rem)] mx-auto bg-gold-primary"></div>
      <section className="max-w-screen-xl mx-auto w-full px-2 py-16 lg:py-24">
        <h3 className="heading lg:text-3xl text-xl font-medium text-center mb-12 text-red-800">
          COMING FALL 2024
        </h3>
        <div className="flex flex-col gap-8">
          {presentList.map((fellowship) => {
            const slicedText = fellowship.duration
              .split(" ")
              .slice(0, -1)
              .join(" ");
            const boldedText = fellowship.duration.split(" ")[-1];
            return (
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="hidden sm:flex justify-center items-center">
                  <img
                    src="/img/logos/aghrass-logo-transparent-1.png"
                    className="w-full"
                    alt="AGHRASS"
                  />
                </div>
                <div className="col-span-2 flex flex-col justify-center gap-2">
                  <h5 className="underline font-bold">{fellowship.title}</h5>
                  <h6 className="text-base">
                    {slicedText}&nbsp;
                    <span className="font-bold">{boldedText}</span>
                  </h6>
                  {fellowship.certs ? (
                    <div className="flex flex-col">
                      <h6 className="underline">
                        Professional Certificates offered:
                      </h6>
                      <ol className="list-decimal list-outside ml-4">
                        {fellowship.certs.split("\n").map((cert) => (
                          <li>{cert}</li>
                        ))}
                      </ol>
                    </div>
                  ) : null}
                  <p>{fellowship.description}</p>
                  {fellowship.pdf.length > 0 ? (
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={"/pdfs/" + fellowship.pdf}
                      className="w-fit btn-primary hover:bg-gold-primary hover:text-white hover:border-gold-primary text-blue-primary border-blue-primary"
                    >
                      Download Syllabus
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Fellowships;
