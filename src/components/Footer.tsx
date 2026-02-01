import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">
      <div className="container py-10 text-center space-y-4">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-muted-foreground">
          <a
            href="https://github.com/SHAakti04"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <FiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/shaktikumar-prajapati-223585286/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <FiLinkedin size={20} />
          </a>

          <a
            href="mailto:prajapatishakti015@gmail.com"
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <FiMail size={20} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-muted-foreground">
          © {year} <span className="text-foreground font-medium">Shaktikumar A. Prajapati</span>
        </p>

        <p className="text-xs text-muted-foreground">
          Full Stack Developer • Java & MERN • Open to Jobs, Internships & Freelance Projects
        </p>
      </div>
    </footer>
  );
};

export default Footer;
