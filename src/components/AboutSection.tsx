import { useEffect, useRef, useState } from "react";
import { FiDownload } from "react-icons/fi";
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="about">
      <div className="container">
        {/* Section title */}
        <h2
          className={`section__title font-display transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span>Development</span>
          <br />
          Is My Passion
        </h2>

        {/* About content */}
        <div className="max-w-3xl mx-auto text-center">
          <p
            className={`text-muted-foreground text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            I’m{" "}
            <strong className="text-foreground">
              Shaktikumar A. Prajapati
            </strong>
            , a results-driven Computer Science student (B.Tech, CGPA 9.0) and
            Full Stack Developer with strong expertise in{" "}
            <strong className="text-foreground">
              Java, MERN Stack, MySQL, and MongoDB
            </strong>
            . I enjoy building scalable, real-world applications that combine
            clean backend architecture with intuitive user interfaces. My work
            focuses on writing efficient, maintainable code and solving complex
            problems using strong fundamentals in
            <strong className="text-foreground">
              DSA, OOPS, DBMS, OS, and Computer Networks
            </strong>
            . Through internships and projects like Voice For Voiceless, Chat
            AI, and RoamPulse, I’ve gained hands-on experience in REST APIs,
            authentication, real-time systems, and cloud-based deployments. I’m
            driven by continuous learning and excited to contribute to
            impactful, production-grade software.
          </p>

            {/* ✅ RESUME BUTTON (FIXED) */}
          <a
            href="/Shaktikumar_A_Prajapati_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                       bg-gradient-to-r from-indigo-500 to-cyan-400
                       text-black font-semibold shadow-lg"
          >
            <FiDownload />
            Download Resume
          </a>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { number: "1+", label: "Years Experience" },
            { number: "7+", label: "Projects Completed" },

            { number: "5+", label: "Awards Won" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
