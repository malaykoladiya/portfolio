"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-orange-300",
    title: "JobsNearby - Full Stack Project",
    desc: "Spearheading end-to-end design and development of job networking platform, overseeing requirements, UI/UX design, API development, and database implementation",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load", // Collaborative workspace
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-orange-300 to-yellow-300",
    title: "JWT Authentication System in RUST",
    desc: "uilt a Rust-based API using Actix-web and Diesel ORM, focusing on secure and scalable user authentication with JWT and Auth0",
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load", // Secure lock symbol
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-yellow-300 to-green-300",
    title: "Real-Time Chat Application",
    desc: "Developed a Real-Time Chat Application using Node.js, Express, and WebSocket, enabling instant messaging and dynamic user status updates",
    img: "https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load", // Chat interface
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-green-300 to-blue-300",
    title: "Real-time Stock Market Data Streaming",
    desc: "Designed and implemented real-time stock market data system using Kafka, Databricks, and AWS, integrating data from Yahoo Finance and Kaggle",
    img: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load", // Financial charts
    link: "https://lama.dev",
  },
  {
    id: 5,
    color: "from-blue-300 to-indigo-300",
    title: "Wordle Web Application Backend Infrastructure",
    desc: "Developed high-performance back-end APIs with Python and the Quart web framework, optimizing with asynchronous programming",
    img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load", // Backend server
    link: "https://lama.dev",
  },
  {
    id: 6,
    color: "from-indigo-300 to-purple-300",
    title: "MBTI using Machine Learning",
    desc: "Implemented and compared the performance of four distinct machine learning classifiers from the Scikitlearn library to predict MBTI personality types based on textual data",
    img: "https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load", // Data analysis
    link: "https://lama.dev",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[700vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />

            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-lg font-bold md:text-2xl lg:text-4xl xl:text-5xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            <div className="h-screen w-[265vh] flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Aspiring Software Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
