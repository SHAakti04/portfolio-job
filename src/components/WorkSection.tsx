import { useEffect, useRef, useState } from "react";

const experienceData = [
  {
    title: "MERN Stack Intern",
    company: "Emertxe Information Technologies",
    year: "Sept 2025 – Nov 2025",
    description: "Worked on full-stack MERN projects, REST APIs, authentication, deployment."
  },
];
const educationData = [
  {
    title: "B.Tech Computer Science",
    company: "RTM Nagpur University",
    year: "2022 – 2026",
    description: "CGPA: 9.0 (till 7th semester)"
  },
];

const WorkSection = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentData = activeTab === "experience" ? experienceData : educationData;

  return (
    <section ref={sectionRef} className="section" id="work">
      <div className="container">
        {/* Section title */}
        <h2
          className={`section__title font-display transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span>My Work</span>
          <br />
          Experience
        </h2>

        {/* Tabs */}
        <div
          className={`flex justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === "education"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            Education
          </button>
        </div>

        {/* Work cards */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {currentData.map((item, index) => (
            <article
              key={`${activeTab}-${index}`}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-primary text-sm font-medium">{item.year}</span>
              <h3 className="font-display text-xl font-semibold mt-2 mb-1 whitespace-pre-line leading-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{item.company}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
