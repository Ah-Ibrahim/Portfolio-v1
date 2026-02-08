import ContactForm from "@/features/contact/ContactForm";
import Scrub1 from "./Scrub1";
import Scrub2 from "./Scrub2";

function Contact() {
  return (
    <section
      className="section-padding bg-bg-primary space-y-4 lg:space-y-12 py-12 lg:py-16 selection:text-white selection:bg-black"
      id="contact"
    >
      <div className="text-center tracking-[-0.2em] uppercase">
        <div className="font-bold-condensed tracking-tighter lg:text-2xl xl:text-3xl">
          Let's start the conversation
        </div>
        <Scrub1 />
        <div className="tracking-[0.75em] text-xs lg:text-sm xl:text-base">
          Starts with
        </div>
        <Scrub2 />
      </div>
      <ContactForm />
    </section>
  );
}
export default Contact;
