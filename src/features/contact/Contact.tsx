import ContactForm from "@/features/contact/ContactForm";

function Contact() {
  return (
    <section className="section-padding bg-bg-primary space-y-4 lg:space-y-12 py-12 lg:py-16">
      <div className="text-center tracking-[-0.2em] uppercase">
        <div className="font-bold-condensed tracking-tighter lg:text-2xl xl:text-3xl">
          Let's start the conversation
        </div>
        <div className="font-bold-condensed text-[2.75rem] md:text-7xl lg:text-8xl xl:text-9xl">
          Great Design
        </div>
        <div className="tracking-[0.75em] text-xs lg:text-sm xl:text-base">
          Starts with
        </div>
        <div className="font-bold-condensed text-[2.75rem] md:text-7xl lg:text-8xl xl:text-9xl">
          Great Collaboration
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
export default Contact;
