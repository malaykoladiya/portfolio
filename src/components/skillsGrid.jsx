import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiFramer,
  SiVite,
  SiDocker,
  SiAmazonaws,
  SiGit,
  SiFigma,
  SiPython,
  SiFlask,
  SiRust,
  SiRedis,
  SiFastapi,
  SiKubernetes,
  SiDjango,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F0DB4F" /> },
  { name: "TypeScript", icon: <SiTypescript color="#007ACC" /> },

  { name: "React.js", icon: <SiReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },

  { name: "Django", icon: <SiDjango color="#092E20" /> }, // Added Django here
  { name: "Flask", icon: <SiFlask color="#000000" /> },
  { name: "FastAPI", icon: <SiFastapi color="#009688" /> },

  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },

  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Redis", icon: <SiRedis color="#DC382D" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
  { name: "Express.js", icon: <SiExpress color="#000000" /> },
  { name: "AWS", icon: <SiAmazonaws color="#FF9900" /> },

  { name: "Docker", icon: <SiDocker color="#2496ED" /> },
  { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },

  { name: "Git", icon: <SiGit color="#F05032" /> },
  { name: "Rust", icon: <SiRust color="#000000" /> },
  { name: "Framer Motion", icon: <SiFramer color="#0055FF" /> },
  { name: "Vite", icon: <SiVite color="#646CFF" /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
];

const SkillsGrid = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center text-center p-4 bg-gray-100 rounded-full shadow-md w-32 h-32 transition-transform transform hover:scale-110 hover:bg-orange-50"
        >
          <div className="text-5xl text-gray-700">{skill.icon}</div>
          <p className="mt-3 text-sm text-gray-700">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
