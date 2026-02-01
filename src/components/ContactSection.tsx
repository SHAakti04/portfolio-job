import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const email = "prajapatishakti015@gmail.com";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setLoading(true);
      await emailjs.sendForm(
        "service_bwvq33m",
        "template_rzy00y8",
        formRef.current,
        "mdNpUkD_HZiVNjfug"
      );
      toast.success("Message sent successfully 🚀");
      formRef.current.reset();
    } catch {
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={sectionRef} className="section" id="contact">
      <div className="container">
        <h2
          className={`section__title font-display transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Contact <span>Me</span>
        </h2>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Form */}
          <div className="bg-card p-6 rounded-2xl border border-border">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input name="name" placeholder="Your name" required className="w-full p-3 rounded-lg bg-transparent border border-border" />
              <input name="email" type="email" placeholder="Email" required className="w-full p-3 rounded-lg bg-transparent border border-border" />
              <textarea name="message" rows={5} placeholder="Message" required className="w-full p-3 rounded-lg bg-transparent border border-border" />
              <button disabled={loading} className="px-6 py-3 rounded-lg bg-primary text-primary-foreground">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  SP
                </div>
                <div>
                  <h4 className="font-semibold">Shaktikumar A. Prajapati</h4>
                  <p className="text-sm text-muted-foreground">
                    B.Tech CSE • Full Stack Developer
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div className="flex gap-2 items-center">
                  <FiMail /> <a href={`mailto:${email}`} className="underline">{email}</a>
                </div>
                <div className="flex gap-2 items-center">
                  <FiLinkedin />
                  <a href="https://www.linkedin.com/in/shaktikumar-prajapati-223585286/" target="_blank">LinkedIn</a>
                </div>
                <div className="flex gap-2 items-center">
                  <FiGithub />
                  <a href="https://github.com/SHAakti04" target="_blank">GitHub</a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border">
              <h5 className="font-semibold mb-3">GitHub Activity</h5>
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=SHAakti04&theme=github-compact&hide_border=true"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
