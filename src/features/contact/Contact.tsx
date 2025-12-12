import ContactForm from "@/features/contact/ContactForm";

function Contact() {
  return (
    <section className="section-padding bg-bg-primary space-y-4 lg:space-y-10 py-10 lg:py-16">
      <div className="text-center tracking-[-0.2em] uppercase">
        <div className="font-bold-condensed tracking-tighter lg:text-3xl">
          Let's start the conversation
        </div>
        <div className="font-bold-condensed text-[2.75rem] lg:text-9xl">
          Great Design
        </div>
        <div className="tracking-[0.75em] text-sm lg:text-base">
          Starts with
        </div>
        <div className="font-bold-condensed text-[2.75rem] lg:text-9xl">
          Great Collaboration
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
export default Contact;
