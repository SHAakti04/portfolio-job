import { motion } from "framer-motion";

const skillWidths: Record<string, number> = {
  "React & UI": 95,
  "Backend APIs": 95,
  Databases: 90,
  "System Design": 85,
  DevOps: 75,
  Testing: 65,
};

const skills = [
  {
    title: "React & UI",
    subtitle: "Frontend Engineering",
    items: ["ReactJS", "Redux", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "EJS"],
    color: "from-indigo-500 to-cyan-400",
  },
  {
    title: "Backend APIs",
    subtitle: "Server-side Development",
    items: [
      "Node.js",
      "Express.js",
      "Java",
      "Python",
      "REST APIs",
      "JWT",
      "OAuth",
      "GraphQL",
      "WebSockets",
      "FastAPI",
    ],
    color: "from-purple-500 to-indigo-400",
  },
  {
    title: "Databases",
    subtitle: "Data Management",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "System Design",
    subtitle: "CS Fundamentals",
    items: ["OOPS", "DBMS", "OS", "Computer Networks", "Scalability"],
    color: "from-orange-500 to-pink-400",
  },
  {
    title: "DevOps",
    subtitle: "Deployment & Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Postman",
      "VS Code",
    ],
    color: "from-sky-500 to-blue-400",
  },
  {
    title: "Testing",
    subtitle: "Quality Assurance",
    items: ["Unit Testing", "Integration Testing", "Jest"],
    color: "from-rose-500 to-red-400",
  },
];

const Skills = () => {
  return (
    <section id="skills-advanced" className="max-w-6xl mx-auto px-6 py-14">
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        Technical <span className="text-primary">Skills</span>
      </h3>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skills.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="mb-5">
              <h4 className="text-lg font-semibold">{group.title}</h4>
              <p className="text-xs text-slate-300">{group.subtitle}</p>
            </div>

            {/* Progress bar */}
            <div className="mb-5">
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skillWidths[group.title] ?? 70}%`,
                  }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                />
              </div>
            </div>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-slate-200 hover:bg-white/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Glow effect */}
            <div
              className={`absolute -z-10 inset-0 rounded-2xl blur-2xl opacity-20 bg-gradient-to-r ${group.color}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
