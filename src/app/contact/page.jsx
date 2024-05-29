"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className=" bg-gradient-to-b from-blue-100 to-red-100 overflow-y-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10">
        {/* TEXT CONTAINER */}
        <div className="flex items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:mr-10 col-span-1 lg:col-span-1">
          <div className="flex">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <span role="img" aria-label="smile">
              😊
            </span>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="bg-red-50 rounded-xl text-xl flex flex-col gap-4 justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 overflow-y-auto col-span-1 lg:col-span-2 max-h-screen"
        >
          <span>Hello Malay,</span>
          <textarea
            rows={8}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4 mt-4 hover:bg-purple-300 transition">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold mt-4">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold mt-4">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
