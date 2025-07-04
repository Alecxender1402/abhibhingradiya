import { motion } from "motion/react";
import { MonitorCog } from "lucide-react";
import {
  FaCode,
  FaTerminal,
  FaLightbulb,
  FaDatabase,
  FaCloud,
  FaMobile,
} from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  viewport: { once: true },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function Skills({
  activeSection,
  fadeIn,
}: {
  activeSection: string;
  fadeIn: any;
}) {
  const skills = [
    {
      icon: <FaCode />,
      title: "Frontend",
      tags: ["React", "TypeScript", "TailwindCSS","Bootstrap","HTML", "CSS"],
      color: "from-cyan-400 to-blue-500",
      shadowColor: "cyan",
    },
    {
      icon: <FaDatabase />,
      title: "Backend",
      tags: ["Node.js", "Flask","SQL", "PostgreSQL", "MongoDB"],
      color: "from-green-400 to-emerald-500",
      shadowColor: "green",
    },
    {
      icon: <FaTerminal />,
      title: "Programming Languages",
      tags: ["C++", "Python", "Java","JavaScript", "C"],
      color: "from-purple-400 to-indigo-500",
      shadowColor: "purple",
    },
    {
      icon: <MonitorCog />,
      title: "Tools",
      tags: ["Git", "VS Code", "Linux", "Docker", "Shell"],
      color: "from-amber-400 to-orange-500",
      shadowColor: "amber",
    },
    {
      icon: <FaLightbulb />,
      title: "Interests",
      tags: ["ML", "AIAgent", "SystemDesign"],
      color: "from-violet-400 to-fuchsia-500",
      shadowColor: "violet",
    },
    {
      icon: <FaCloud />,
      title: "Cloud",
      tags: ["AWS", "GCP"],
      color: "from-blue-400 to-sky-500",
      shadowColor: "blue",
    },
  ];

  return (
    <motion.div
      {...fadeIn}
      initial="hidden"
      animate={activeSection === "skills" ? "visible" : "hidden"}
      className="max-w-7xl py-16"
    >
      <motion.h2
        {...fadeInUp}
        className="text-4xl font-bold text-center mb-16 tracking-tight"
      >
        Technical Proficiencies
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
            className={`
              relative p-6 rounded-xl
              bg-gray-600/10 dark:bg-gray-600/20 backdrop-blur-sm
              hover:border-${skill.shadowColor}-500/50
              group
              hover:shadow-lg hover:shadow-${skill.shadowColor}-500/20
            `}
          >
            <div
              className={`
              absolute inset-0 rounded-xl opacity-0
              group-hover:opacity-20 transition-opacity duration-500
              bg-gradient-to-r ${skill.color}
              blur-xl
            `}
            />

            <div className="relative flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3
                  className={`
                  text-xl font-semibold mb-2
                  bg-gradient-to-r ${skill.color}
                  bg-clip-text text-transparent
                `}
                >
                  {skill.title}
                </h3>
                <div
                  className={`
                min-w-12 h-12 flex items-center justify-center
                rounded-lg text-2xl
                bg-gradient-to-r ${skill.color}
                group-hover:scale-110 transition-transform
              `}
                >
                  {skill.icon}
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`
                        px-3 py-1 text-xs rounded-full
                        backdrop-blur-sm bg-gray-400/10
                        group-hover:border-${skill.shadowColor}-500/30
                        group-hover:text-${skill.shadowColor}-400
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
