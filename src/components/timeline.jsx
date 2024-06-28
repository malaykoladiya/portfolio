"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const timelineData = [
  {
    title: "Graduate Researcher",
    description:
      "Analyzed and optimized existing Video Text Recognition (VTT) Docker container",
    date: "Jan 2023 - May 2023",
    company: "Digiclips Inc.",
    icon: <FaBriefcase />,
  },
  {
    title: "California State University - Fullerton",
    description: (
      <>
        <p className="!mt-3 !font-normal text-gray-700 !text-lg !lg:text-xl !xl:text-2xl">
          Master of Science in Computer Science
        </p>
        <p className="!mt-3 !font-normal text-gray-700 !text-lg !lg:text-xl !xl:text-2xl">
          GPA: 3.77/4.00
        </p>
      </>
    ),
    date: "Jan 2022 - May 2024",
    company: "Fullerton",
    icon: <FaGraduationCap />,
  },
  {
    title: "Instructional Student Assistant",
    description:
      "Assisted in the tutoring and grading for Introduction to Programming in MATLAB",
    date: "Aug 2018 - Dec 2018",
    company: "San Jose State University",
    icon: <FaBriefcase />,
  },
  {
    title: "San Jose State University",
    description: (
      <>
        <p className="!mt-3 !font-normal text-gray-700 !text-lg !lg:text-xl !xl:text-2xl">
          Bachelor of Science in Aerospace Engineering
        </p>
        <p className="!mt-3 !font-normal text-gray-700 !text-lg !lg:text-xl !xl:text-2xl">
          Minor in Computer Science
        </p>
        <p className="!mt-3 !font-normal !text-gray-700 !text-lg !lg:text-xl !xl:text-2xl">
          {" "}
          GPA: 3.87/4.00
        </p>
      </>
    ),
    date: "Jan 2017 - May 2021",
    company: "San Jose",
    icon: <FaGraduationCap />,
  },
];

const Timeline = () => {
  return (
    <VerticalTimeline animate={false} lineColor="">
      {timelineData.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          date={item.date}
          iconStyle={{ background: "white", fontSize: "1.5rem" }}
          icon={item.icon}
          contentStyle={{
            background: "#f3f4f6",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(0,0,0,0.05)",

            borderRadius: "16px",

            textAlign: "left ",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight: "0.4rem solid",
          }}
        >
          <h3 className="font-semibold">{item.title}</h3>
          <h4 className="font-normal !mt-0 !text-lg">{item.company}</h4>
          {typeof item.description === "string" ? (
            <p className="!mt-3 !font-normal !text-gray-600 !text-lg !lg:text-xl !xl:text-2xl">
              {item.description}
            </p>
          ) : (
            item.description
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
