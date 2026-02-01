import { useEffect, useRef, useState } from "react";

const CertificationsEducationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="certifications">
      <div className="container">
        {/* ================= TITLE ================= */}
        <h2
          className={`section__title font-display transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Certifications & <span>Education</span>
        </h2>

        {/* ================= CERTIFICATIONS ================= */}
        <div
          className={`bg-card rounded-2xl p-6 border border-border mb-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Certifications & Achievements
          </h3>

          <ol className="space-y-4">
            {[
              {
                title: "Apna College — DSA & Full Stack",
                desc: "Comprehensive coursework on data structures, algorithms and full-stack development.",
              },
              {
                title: "NPTEL — Java & DSA",
                desc: "Verified certification in core Java and algorithmic problem solving.",
              },
              {
                title: "SkillUp — Generative AI",
                desc: "Hands-on experience with Generative AI and prompt engineering.",
              },
              {
                title: "Winner — Techtrix 2025 (Recruit Rush, Code Hack)",
                desc: "National-level hackathon winner for recruitment workflow & coding challenges.",
                highlight: true,
              },
            ].map((item, index) => (
              <li key={index} className="flex gap-4">
                <span
                  className={`mt-2 w-2 h-2 rounded-full ${
                    item.highlight ? "bg-cyan-400" : "bg-primary"
                  }`}
                />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ================= EDUCATION ================= */}
        <div
          className={`bg-card rounded-2xl p-6 border border-border transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Education
          </h3>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-semibold">
                Rashtrasant Tukdoji Maharaj University, Nagpur
              </h4>
              <p className="text-sm text-muted-foreground">
                B.Tech — Computer Science
              </p>
              <p className="text-sm text-muted-foreground">
                Expected Graduation: 2026
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">CGPA</p>
              <p className="text-4xl font-extrabold text-primary">9.0</p>
              <p className="text-xs text-muted-foreground">
                Till Semester 7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsEducationSection;
