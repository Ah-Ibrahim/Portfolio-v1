"use client";

import ArrowIcon from "@/shared/components/ui/ArrowIcon";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mldqnezb");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  if (state.succeeded) {
    return (
      <p className="uppercase font-bold-condensed my-6 md:my-15 lg:my-25 text-center text-3xl md:text-4xl lg:text-5xl">
        Got it! 👍
      </p>
    );
  }

  const handleChange = () => {
    const textAreaElement = textAreaRef.current;

    if (!textAreaElement) return;

    textAreaElement.style.height = "auto";
    textAreaElement.style.height = `${textAreaElement.scrollHeight}px`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col py-6 lg:w-xl lg:mx-auto"
      autoComplete="on"
    >
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your name*"
        className="border-b placeholder:uppercase py-2 "
        aria-label="Your name"
      />
      <div className="text-red-500 mt-1">
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your email*"
        className="border-b placeholder:uppercase py-2 mt-8"
        aria-label="Your email"
      />
      <div className="text-red-500 mt-1">
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <textarea
        id="message"
        name="message"
        placeholder="How can I help you?*"
        className="border-b placeholder:uppercase py-2 resize-none mt-8"
        ref={textAreaRef}
        onChange={handleChange}
        style={{
          scrollbarWidth: "none",
        }}
        autoComplete="off"
        aria-label="How can I help you?"
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
        className="uppercase cursor-pointer underline-animation flex gap-x-2 self-center mt-10 md:text-xl lg:mt-14 lg:text-2xl group"
      >
        Discuss Project <ArrowIcon />
      </button>
    </form>
  );
}

export default ContactForm;
