import ContactForm from "@/features/contact/ContactForm";
import useGSAPScrub from "@/hooks/useGSAPScrub";
import { useRef } from "react";

function Contact() {
  const scrubContainer1 = useRef<HTMLDivElement>(null);
  const scrubElement1 = useRef<HTMLDivElement>(null);

  const scrubContainer2 = useRef<HTMLDivElement>(null);
  const scrubElement2 = useRef<HTMLDivElement>(null);

  useGSAPScrub<HTMLDivElement, HTMLDivElement>(scrubElement1, scrubContainer1);
  useGSAPScrub<HTMLDivElement, HTMLDivElement>(scrubElement2, scrubContainer2);

  return (
    <section
      className="section-padding bg-bg-primary space-y-4 lg:space-y-12 py-12 lg:py-16 selection:text-white selection:bg-black"
      id="contact"
    >
      <div className="text-center tracking-[-0.2em] uppercase">
        <div className="font-bold-condensed tracking-tighter lg:text-2xl xl:text-3xl">
          Let's start the conversation
        </div>
        <div className="overflow-hidden" ref={scrubContainer1}>
          <div
            className="font-bold-condensed text-[2.75rem] md:text-7xl lg:text-8xl xl:text-9xl invisible"
            ref={scrubElement1}
          >
            Great Design
          </div>
        </div>
        <div className="tracking-[0.75em] text-xs lg:text-sm xl:text-base">
          Starts with
        </div>
        <div className="overflow-hidden" ref={scrubContainer2}>
          <div
            className="font-bold-condensed text-[2.75rem] md:text-7xl lg:text-8xl xl:text-9xl invisible"
            ref={scrubElement2}
          >
            Great Collaboration
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
export default Contact;
