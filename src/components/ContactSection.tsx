import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const email = "anid123@email.com";

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

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  const socialLinks = [
    { name: "Linkedin", url: "https://www.linkedin.com/" },
    { name: "GitHub", url: "https://github.com/" },
    { name: "Dribbble", url: "https://dribbble.com/" },
    { name: "GitLab", url: "https://about.gitlab.com/" },
  ];

  const messageLinks = [
    { name: "WhatsApp", url: "https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!" },
    { name: "Messenger", url: "https://m.me/bedimcode" },
    { name: "Telegram", url: "https://t.me/telegram" },
    { name: "Instagram", url: "https://www.instagram.com/" },
  ];

  return (
    <section ref={sectionRef} className="section" id="contact">
      <div className="container">
        {/* Section title */}
        <h2
          className={`section__title font-display transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Contact Me
        </h2>

        {/* Copy email section */}
        <div
          className={`max-w-xl mx-auto text-center mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground mb-6">Tell me about your next project.</p>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary-alt transition-all duration-300 group animate-pulse-glow"
          >
            <span>Copy email</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
          </button>
          <p className="text-sm text-muted-foreground mt-4">{email}</p>
        </div>

        {/* Contact info grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Email */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-semibold mb-3">Email</h3>
            <a
              href={`mailto:${email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Willer123@email.com
            </a>
          </div>

          {/* Location */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-semibold mb-3">Location</h3>
            <p className="text-muted-foreground">Lima, Peru</p>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-semibold mb-3">Social Media</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Write Me */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-semibold mb-3">Write Me & We'll Talk</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {messageLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
