"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaEye } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-orange-300",
    title: "JobsNearby - Full Stack Project",
    desc: "Spearheading end-to-end design and development of job networking platform, overseeing requirements, UI/UX design, API development, and database implementation",
    img: "/images/jobsnearby.jpg",
    githubLink: "https://github.com/malaykoladiya/JobsNearby",
    demoLink: "https://github.com/malaykoladiya/JobsNearby",
  },
  {
    id: 2,
    color: "from-orange-300 to-yellow-300",
    title: "JWT Authentication System in RUST",
    desc: "Built a Rust-based API using Actix-web and Diesel ORM, focusing on secure and scalable user authentication with JWT and Auth0",
    img: "/images/auth.jpg",
    githubLink: "https://github.com/malaykoladiya/rust_auth_async_jwt",
    demoLink: "https://github.com/malaykoladiya/rust_auth_async_jwt",
  },
  {
    id: 3,
    color: "from-yellow-300 to-green-300",
    title: "Real-Time Chat Application",
    desc: "Developed a Real-Time Chat Application using Node.js, Express, and WebSocket, enabling instant messaging and dynamic user status updates",
    img: "/images/chatapp.jpg",
    githubLink: "https://github.com/malaykoladiya/MERN_Chat_App",
    demoLink: "https://github.com/malaykoladiya/MERN_Chat_App",
  },
  {
    id: 4,
    color: "from-green-300 to-blue-300",
    title: "Real-time Stock Market Data Streaming",
    desc: "Designed and implemented real-time stock market data system using Kafka, Databricks, and AWS, integrating data from Yahoo Finance and Kaggle",
    img: "/images/stockmarket.jpg",
    githubLink: "https://github.com/malaykoladiya/stock_market_data_streaming",
    demoLink: "https://github.com/malaykoladiya/stock_market_data_streaming",
  },
  {
    id: 5,
    color: "from-blue-300 to-indigo-300",
    title: "Wordle Web Application Backend Infrastructure",
    desc: "Developed high-performance back-end APIs with Python and the Quart web framework, optimizing with asynchronous programming",
    img: "/images/wordle.jpeg",
    githubLink: "https://github.com/malaykoladiya/wordle-project",
    demoLink: "https://github.com/malaykoladiya/wordle-projec",
  },
  {
    id: 6,
    color: "from-indigo-300 to-purple-300",
    title: "MBTI using Machine Learning",
    desc: "Implemented and compared the performance of four distinct machine learning classifiers from the Scikitlearn library to predict MBTI personality types based on textual data",
    img: "/images/mbti.jpg",
    githubLink: "https://lama.dev",
    demoLink: "",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <motion.div
      className="h-full relative"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className=" h-[1000vh] sm:h-[850vh] md:h-[850vh] relative"
        ref={ref}
        style={{ position: "relative" }}
      >
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex relative">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 relative" />

            {items.map((item) => (
              <div
                className={`min-h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} relative`}
                key={item.id}
              >
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 transition-transform duration-500 group hover:scale-105 relative">
                  <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-96 mb-4">
                    {" "}
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded-lg"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      priority={item.id === 1} // Add priority to the first image
                    />
                    {/* Added rounded corners */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <Link
                        href={item.githubLink}
                        className="text-white text-3xl sm:text-4xl transform transition-transform duration-300 hover:scale-125"
                      >
                        <FaGithub />
                      </Link>
                      <Link
                        href={item.demoLink}
                        className="text-white text-3xl sm:text-4xl transform transition-transform duration-300 hover:scale-125"
                      >
                        <FaEye />
                      </Link>
                    </div>
                  </div>
                  <div className="p-2 sm:p-4 flex flex-col items-center text-center">
                    {" "}
                    {/* Added margin-bottom */}
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4">
                      {item.title}
                    </h2>{" "}
                    {/* Added margin-bottom */}
                    <p className="text-gray-600 mb-2 sm:mb-4 text-sm sm:text-base lg:text-lg">
                      {item.desc}
                    </p>
                    {/* Added margin-bottom */}
                  </div>
                </div>
              </div>
            ))}
            <div className="h-screen w-[265vh] flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
          Do you have a project?
        </h1>{" "}
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] relative"
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
