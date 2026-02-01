import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

interface HeaderProps {
  activeSection: string;
}

const navLinks = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

const HEADER_HEIGHT = 64; // h-16 = 64px

const Header = ({ activeSection }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress((window.scrollY / docHeight) * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= FIXED SCROLL HANDLER ================= */
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const y =
      section.getBoundingClientRect().top +
      window.scrollY -
      HEADER_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ===== SCROLL PROGRESS BAR ===== */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ===== HEADER ===== */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container h-16 flex items-center justify-between px-4">
          {/* ===== LOGO ===== */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 font-display text-xl font-bold
              bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
          >
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-black flex items-center justify-center font-extrabold">
              SP
            </span>
            Shaktikumar
          </button>

          {/* ===== DESKTOP NAV ===== */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`relative text-sm font-medium transition-all
                    after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                    after:bg-gradient-to-r after:from-indigo-500 after:to-cyan-400
                    after:transition-all after:duration-300
                    ${
                      activeSection === link.id
                        ? "text-primary after:w-full"
                        : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full"
                    }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* ===== RIGHT ACTIONS ===== */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/Shaktikumar_A_Prajapati_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-semibold shadow-lg"
            >
              <FiDownload /> Resume
            </a>
          </div>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-xl border border-border
              flex items-center justify-center bg-background/60 backdrop-blur"
          >
            <div className="flex flex-col gap-1">
              <span
                className={`w-5 h-0.5 bg-foreground transition ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-foreground transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-foreground transition ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 py-8 bg-background/90 backdrop-blur-xl border-t border-border">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`text-lg font-medium transition ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}

            <a
              href="/Shaktikumar_A_Prajapati_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-semibold"
            >
              <FiDownload /> Download Resume
            </a>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
