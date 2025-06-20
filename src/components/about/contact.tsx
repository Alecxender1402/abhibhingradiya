import { motion } from "motion/react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaArrowRight,
} from "react-icons/fa";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub className="text-2xl" />,
    url: "https://github.com/Alecxender1402",
    color: "#8a8a8a",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-2xl" />,
    url: "https://www.linkedin.com/in/abhi-bhingradiya/",
    color: "#63b3e5",
  },
  {
    name: "Twitter",
    icon: <FaTwitter className="text-2xl" />,
    url: "https://x.com/AbhiBhingradiya",
    color: "#4dc6ff",
  },
  {
    name: "Discord",
    icon: <FaDiscord className="text-2xl" />,
    url: "https://discord.com/users/1011606590304047135",
    color: "#9eb3ea",
  },
];

export function ContactUs({
  activeSection,
  fadeIn,
}: {
  activeSection: string;
  fadeIn: any;
}) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const email = "abhib2706@gmail.com";

  return (
    <motion.div
      {...fadeIn}
      initial="hidden"
      animate={activeSection === "contact" ? "visible" : "hidden"}
      className="max-w-7xl mx-auto py-16 relative"
    >
      <motion.div className="text-center mb-16 relative">
        <motion.h2
          {...fadeInUp}
          className="text-5xl font-bold mb-6 bg-clip-text"
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="text-lg text-gray-400/90 max-w-2xl mx-auto leading-relaxed"
        >
          I&apos;m always open to new opportunities, collaborations, and
          interesting conversations. Feel free to reach out!
        </motion.p>
      </motion.div>

      <div className="flex max-sm:flex-col justify-center gap-4 mx-auto">
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="relative group flex justify-center"
        >
          <a href={`mailto:${email}`} className="block">
            <div
              className={`
                p-8 max-sm:p-4 rounded-2xl h-full
                bg-gray-100 dark:bg-gray-600/20 backdrop-blur-lg
                border border-white/10
                transition-colors duraiton-200
                group-hover:border-white/20
                group-hover:shadow-lg group-hover:shadow-blue-500/10
                overflow-hidden
                relative
              `}
            >
              <div
                className={`
                  absolute inset-0 rounded-xl opacity-0
                  group-hover:opacity-20 transition-opacity
                  bg-gradient-to-r from-blue-400 to-sky-500
                  blur-xl
                `}
              />

              <div className="flex items-start gap-4">
                <div className="p-3 max-sm:p-2 rounded-xl bg-blue-500/10 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <FaEnvelope className="text-3xl text-blue-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">Email Me</h3>
                  <div className="flex items-center gap-2 group/email">
                    <span className="text-sm font-medium text-gray-400 group-hover:text-blue-400 transition-colors">
                      {email}
                    </span>
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1 text-blue-400" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Click to open your mail client
                  </p>
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="relative group flex justify-center items-center"
        >
          <div
            className={`
              flex justify-center items-center max-w-[300px]
              rounded-2xl h-full w-full max-sm:py-4
              bg-gray-100 dark:bg-gray-600/20 backdrop-blur-lg
              transition-colors duraiton-200
              border border-white/10
              hover:border-white/20
              hover:shadow-lg hover:shadow-purple-500/10
              overflow-hidden
            `}
          >
            <div
              className={`
              absolute inset-0 rounded-xl opacity-0
              group-hover:opacity-20
              bg-gradient-to-r from-purple-400 to-pink-500
              blur-xl
            `}
            />

            <div className="grid grid-cols-2 gap-4 px-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredCard(social.name)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group/social flex flex-col gap-2 p-3 rounded-xl hover:bg-white/[0.05]
                    relative overflow-hidden"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="transition-transform group-hover/social:scale-110"
                      style={{
                        color:
                          hoveredCard === social.name
                            ? social.color
                            : "currentColor",
                      }}
                    >
                      {social.icon}
                    </div>
                    <div
                      className="text-sm sm:hidden font-medium transition-colors"
                      style={{
                        color:
                          hoveredCard === social.name
                            ? social.color
                            : "currentColor",
                      }}
                    >
                      {social.name}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
