import ContactForm from "./ContactForm";

function Contact() {
	return (
		<section className="section-padding bg-bg-primary space-y-4">
			<div className="text-center tracking-[-0.2em] uppercase">
				<div className="font-bold-condensed tracking-tighter">
					Let's start the conversation
				</div>
				<div className="font-bold-condensed text-[2.75rem]">
					Great Design
				</div>
				<div className="tracking-[0.75em] text-sm">Starts with</div>
				<div className="font-bold-condensed text-[2.75rem]">
					Great Collaboration
				</div>
			</div>
			<ContactForm />
		</section>
	);
}
export default Contact;
