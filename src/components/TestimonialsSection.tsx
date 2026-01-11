import { useEffect, useRef, useState } from "react";

const testimonials = [
  { name: "Abex Wrooks", rating: 5.0 },
  { name: "Willer Morth", rating: 5.0 },
  { name: "Llemi Llorens", rating: 5.0 },
  { name: "Jems Guiller", rating: 5.0 },
];

const testimonialText =
  "The company offers many easy-to-use services, with hard work and round-the-clock support on all projects.";

const TestimonialsSection = () => {
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

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section ref={sectionRef} className="section overflow-hidden" id="testimonials">
      <div className="container">
        {/* Section title */}
        <h2
          className={`section__title font-display transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span>What They Say</span>
          <br />
          About Me
        </h2>
      </div>

      {/* Testimonials infinite scroll */}
      <div
        className={`relative transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex testimonial-scroll">
          {duplicatedTestimonials.map((testimonial, index) => (
            <article
              key={index}
              className="flex-shrink-0 w-80 mx-4 bg-card rounded-2xl p-6 border border-border"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                </div>
                {/* Rating */}
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold text-sm">{testimonial.rating}</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed">{testimonialText}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
