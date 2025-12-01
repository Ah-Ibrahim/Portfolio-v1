import ArrowIcon from "@/components/ui/ArrowIcon";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
	const [state, handleSubmit] = useForm("mldqnezb");
	if (state.succeeded) {
		return (
			<p className="uppercase font-bold-condensed my-6 text-center text-3xl">
				Got it! 👍
			</p>
		);
	}
	return (
		<form onSubmit={handleSubmit} className="flex flex-col py-6">
			<input
				id="name"
				type="text"
				name="name"
				placeholder="Your name*"
				className="border-b placeholder:uppercase py-2 "
			/>
			<div className="text-red-500 mt-1">
				<ValidationError
					prefix="Name"
					field="name"
					errors={state.errors}
				/>
			</div>
			<input
				id="email"
				type="email"
				name="email"
				placeholder="Your email*"
				className="border-b placeholder:uppercase py-2 mt-8"
			/>
			<div className="text-red-500 mt-1">
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>
			</div>
			<textarea
				id="message"
				name="message"
				placeholder="How can I help you?*"
				className="border-b placeholder:uppercase py-2 resize-none mt-8"
			/>
			<div className="text-red-500 mt-1">
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</div>
			<button
				type="submit"
				disabled={state.submitting}
				className="uppercase cursor-pointer border-b flex self-center mt-10">
				Discuss Project <ArrowIcon />
			</button>
		</form>
	);
}

export default ContactForm;
