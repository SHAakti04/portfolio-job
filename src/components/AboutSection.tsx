import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.2 }
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
          <span>Creativity</span>
          <br />
          Is My Passion
        </h2>

        {/* About content */}
        <div className="max-w-3xl mx-auto text-center">
          <p
            className={`text-muted-foreground text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            I'm a web <strong className="text-foreground">developer and designer</strong> passionate
            about experimenting with new <strong className="text-foreground">skills and creativity.</strong>{" "}
            Driven by learning and curiosity, I'm always looking to explore and learn new development
            and design skills.
          </p>

          {/* Resume button */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-card border border-border rounded-full text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-300 group"
            >
              <span>Resume</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "10+", label: "Awards Won" },
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
