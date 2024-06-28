"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full gap-15 flex flex-col-reverse lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 mt-24 lg:h-full lg:w-4/6 flex flex-col gap-8 items-center lg:items-start justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl 2xl:text-8xl font-bold text-left text-transparent bg-clip-text bg-gradient-to-l from-red-400 to to-blue-400">
            Hello I&apos;m
          </h1>
          <h1 className="text-4xl md:text-5xl 2xl:text-8xl font-bold text-left">
            {/* Malay Koladiya */}
            <TypeAnimation
              sequence={["Malay Koladiya", 1000, "Software Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* DESC */}
          <p className="md:text-xl 2xl:text-4xl">
            Master of Science in Computer Science
          </p>
          <p className="md:text-xl 2xl:text-3xl">
            Aspiring Full-Stack Developer | Master&apos;s in Computer Science |
            Proficient in Python | Exploring Rust | Web Dev & ML Enthusiast |
            Ready to Contribute and Grow in the Tech Industry
          </p>

          {/* BUTTONS */}
          <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-20 lg:gap-22 xl:gap-30 mb-4">
            <a
              href="/Malay_Koladiya_Resume.pdf"
              download
              className="px-6 py-3 rounded-lg ring-1 ring-black bg-black text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition hover:cursor-pointer"
            >
              <span>Download Resume</span>
              <FaDownload className="w-5 h-5" />
            </a>

            <div className="flex mt-5 md:mt-0 gap-6">
              <Link
                href="https://github.com/malaykoladiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="w-10 h-10 text-black hover:text-gray-800 transition" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/malaykoladiya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className="w-10 h-10 text-[#0077B5] hover:text-[#005582] transition" />
              </Link>
            </div>
          </div>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-3/6 ml-4 relative">
          <Image
            src="/hero.png"
            alt="Hero Image"
            fill
            sizes="(max-width: 768px) 100vw, 
                   (max-width: 1200px) 50vw, 
                   33vw"
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
