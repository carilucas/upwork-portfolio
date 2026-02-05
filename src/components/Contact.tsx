"use client";

import { fredoka } from "@/config/fonts";
import Image from "next/image";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    emailjs
      .send(
        "service_qubss5e",
        "template_cjpt3aw",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        {
          publicKey: "kiG1j8y0FLOEEYO-J",
        },
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Success...",
            text: "Your message has been sent successfully!, I will get back to you as soon as possible.",
          });
        },
        (error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        },
      );
    reset();
  };

  return (
    <section className="c-space mt-20 mb-40" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col bg-black-200 lg:bg-transparent rounded-2xl border border-black-300 lg:border-none">
        <Image
          src="/assets/terminal.png"
          alt="terminal-bg"
          width={1920}
          height={1920}
          className="absolute inset-0 min-h-screen hidden lg:block"
        />

        <div className="contact-container">
          <h3 className={`head-text ${fredoka.className} lg:mt-20`}>
            Contact me
          </h3>
          <p className="text-lg text-white-600 mt-3">
            Fill out the form below to get in touch with me.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                required
                className="field-input"
                placeholder="ex., John Doe"
                {...register("name")}
              />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500">Message is required</p>
              )}
            </label>

            <button
              className="field-btn cursor-pointer"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}

              <Image
                src="/assets/arrow-up.png"
                alt="arrow-up"
                width={24}
                height={24}
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
