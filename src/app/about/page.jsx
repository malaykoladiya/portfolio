"use client";
import Brain from "@/components/brain";
import SkillsGrid from "@/components/skillsGrid";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const scrollToSkills = () => {
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div
        className="h-full overflow-scroll lg:flex lg:justify-center"
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:w-2/3">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              I am a student at California State University, Fullerton, pursuing
              a Master's in Computer Science with a strong foundation in
              Aerospace Engineering from San Jose State University.
              Transitioning from Aerospace to Computer Science, I've embraced
              the challenge of learning new technologies and programming
              languages including Python, JavaScript, Rust, and C, among others.
            </p>
            <p className="text-lg">
              My Aerospace background gives me a unique perspective on
              problem-solving and efficiency, which I apply to my computer
              science projects and teamwork. As I navigate my final year, I am
              keen on finding opportunities where I can contribute, learn, and
              grow in the tech industry. I'm especially interested in roles that
              allow me to use my skills in web development, data management, and
              software engineering.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="185"
                height="80"
                viewBox="0 0 325 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99998 348C8.99998 316.138 9.36387 284.396 10.7778 252.556C11.9299 226.609 12.9222 200.641 13 174.667C13.0395 161.457 13.9001 147.79 11.5 134.722C11.4079 134.221 10.2971 126.923 9.44442 127.167C6.1838 128.098 5.24304 142.471 4.99998 144.389C2.66716 162.792 -0.581064 184.466 3.83331 202.778C6.08382 212.113 12.0073 225.941 22.2222 229.111C44.4917 236.022 54.4551 197.253 57.7778 182.889C65.2728 150.487 72 115.217 72 81.8333C72 66.8349 65.6699 89.0844 64.9444 92.6667C59.3572 120.254 57.54 151.274 73 176.111C81.3639 189.548 98.3115 205.631 111.778 188.556C123.456 173.747 125.527 147.923 123.444 129.778C123.13 127.037 122.665 120.037 119 119.222C114.927 118.317 112.728 126.925 112.056 129.278C109.377 138.653 108.302 148.503 108.056 158.222C107.922 163.48 107.033 173.406 113 176.333C122.024 180.76 126.283 142.502 127 137.444C127.599 133.216 128.678 128.275 127.778 124C127.577 123.047 126.422 119.918 126.056 122.667C124.636 133.314 135.074 148.743 142.222 155.778C147.363 160.837 151.058 158.85 154.222 152.556C165.4 130.316 167.73 101.412 169.278 77C170.161 63.073 172.276 46.1602 168.833 32.3889C167.77 28.1363 165.233 23.4909 161.056 21.6111C150.965 17.0703 159.577 57.7796 160.444 60.7778C166.017 80.0436 174.626 106.091 194 115.778C209.893 123.724 221.396 107.731 226.778 94.4444C230.238 85.9029 235.435 63.7775 225 57.6111C212.773 50.3863 214.95 87.1901 215 91.5555C215.033 94.4327 217.362 120.965 223.222 109.111C231.017 93.3452 233 74.1275 233 56.7222C233 56.2945 232.247 50.8626 232.056 51.7222C231.194 55.6003 232.194 60.8464 233.167 64.5555C234.183 68.4296 242.323 92.4619 249 80.7778C254.705 70.7946 253 56.2758 253 45.2222C253 44.6983 253.529 38.4444 252.222 38.4444C250.806 38.4444 253.9 44.277 254.056 44.5C257.289 49.148 263.993 55.4764 270 51.7222C275.919 48.023 277.632 38.6573 278.889 32.4444C280.699 23.492 281 14.5392 281 5.44444C281 1.68032 280.616 0.817271 281.444 5.33332C284.948 24.4286 291.644 43.1298 296.556 61.8889C305.605 96.4548 312.49 131.843 323 166"
                  stroke="black"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              onClick={scrollToSkills}
              className="cursor-pointer"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <SkillsGrid />
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              className="cursor-pointer"
              onClick={scrollToExperience}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE & EDUCATION
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Graduate Researcher
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Analyzed and optimized existing Video Text Recognition (VTT)
                    Docker container{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Jan 2023 - May 2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Digiclips Inc.
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    California State University - Fullerton{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    <p>Master of Science in Computer Science</p>
                    <p>GPA: 3.77/4.00</p>
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Jan 2022 - May 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Fullerton
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Instructional Student Assistant{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Assisted in the tutoring and grading for Introduction to
                    Programming in MATLAB{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Aug 2018 - Dec 2018
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    San Jose State University
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    San Jose State University{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    <p>Bachelor of Science in Aerospace Engineering </p>
                    <p>Minor in Computer Science </p>
                    <p>GPA: 3.87/4.00</p>
                  </div>

                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Jan 2017 - May 2021{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    San Jose
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
