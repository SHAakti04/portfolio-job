import { useEffect, useRef, useState } from "react";

const servicesData = [
  {
    title: "Developer",
    description:
      "Website creation with HTML, CSS, JavaScript. Professional websites with TypeScript, React, Node JS, and lots of creativity.",
    subtitle: "Skills & Tools",
    skills: "HTML - CSS - JavaScript - React - TypeScript - Node Js - Next Js - PHP - GitHub",
  },
  {
    title: "Design",
    description:
      "Web designer with Figma and Sketch, creating motion designs with After Effects, creativity and design at its best.",
    subtitle: "Skills & Tools",
    skills: "Figma - Adobe XD - Photoshop - Illustrator - Sketch - 3D Modeling - After Effects",
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="section" id="services">
      <div className="container">
        {/* Section title */}
        <h2
          className={`section__title font-display transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          What I <span>Offer</span>
        </h2>

        {/* Services accordion */}
        <div
          className={`max-w-3xl mx-auto space-y-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/50"
            >
              {/* Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    {index === 0 ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                    )}
                  </span>
                  <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                </div>
                <svg
                  className={`w-6 h-6 text-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <h4 className="text-sm font-medium text-primary mb-2">{service.subtitle}</h4>
                  <p className="text-sm text-muted-foreground">{service.skills}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
