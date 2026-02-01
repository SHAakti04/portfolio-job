// import { useEffect, useState } from "react";
// import profileImg from "@/assets/profile-img.png";

// const HeroSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//  const socialLinks = [
//   {
//     icon: "linkedin",
//     url: "https://www.linkedin.com/in/shaktikumar-prajapati-223585286/",
//     label: "LinkedIn",
//   },
//   {
//     icon: "github",
//     url: "https://github.com/SHAakti04",
//     label: "GitHub",
//   },
//   {
//     icon: "leetcode",
//     url: "https://leetcode.com/u/SHAakti04/", // 🔁 update if username differs
//     label: "LeetCode",
//   },
// ];


//   return (
//     <section
//       className="relative min-h-screen flex items-center overflow-hidden"
//       id="home"
//     >
//       {/* Background blob */}
//       <div className="blob-gradient top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

//       <div className="container relative z-10">
//         <div className="grid lg:grid-cols-3 gap-8 items-center">
//           {/* Left content */}
//           <div
//             className={`space-y-4 transition-all duration-1000 delay-300 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-12"
//             }`}
//           >
//             <span className="text-primary text-lg font-medium">Hello, I'm</span>
//             <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
//               Shaktikumar
//               <br />
//               Prajapati
//             </h1>
//             <p className="text-muted-foreground mt-4">
//               Full Stack Developer | Java & MERN Stack
//             </p>

//             {/* Social links */}
//             <div className="flex flex-col gap-4 pt-8">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={social.icon}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-9 h-9 flex items-center justify-center rounded-full border border-muted-foreground/30 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
//                   aria-label={social.label}
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <SocialIcon name={social.icon} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Center - Profile image */}
//           <div
//             className={`relative flex justify-center transition-all duration-1000 delay-500 ${
//               isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
//             }`}
//           >
//             <div className="relative">
//               {/* Glow effect behind image */}
//               <div className="absolute inset-0 bg-primary/40 blur-[100px] rounded-full scale-110 translate-y-1/4" />
//               <img
//                 src={profileImg}
//                 alt="Anid Wrooks - Developer & Designer"
//                 className="relative w-64 lg:w-80 h-auto object-cover rounded-b-full"
//                 style={{
//                   maskImage:
//                     "linear-gradient(to bottom, black 80%, transparent 100%)",
//                   WebkitMaskImage:
//                     "linear-gradient(to bottom, black 80%, transparent 100%)",
//                 }}
//               />
//             </div>
//           </div>

//           {/* Right content */}
//           <div
//             className={`space-y-4 text-right transition-all duration-1000 delay-700 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 translate-x-12"
//             }`}
//           >
//             <span className="text-primary text-lg font-medium block">
//               Logical Developer
//             </span>
//             <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
//               <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
//                 Developer
//               </span>
//               <br />
//               <span className="text-foreground">& Engineer</span>
//             </h2>

//             {/* Resume button */}
//             <div className="pt-12">
//               <a
//                 href="/Shaktikumar_A_Prajapati_Resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
//               >
//                <span>Resume</span>
//               <svg
//                 className="w-5 h-5 transition-transform group-hover:translate-x-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                 />
//               </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const SocialIcon = ({ name }: { name: string }) => {
//   const icons: Record<string, JSX.Element> = {
//     linkedin: (
//       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//       </svg>
//     ),
//     github: (
//       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//       </svg>
//     ),
//     leetcode: (
//       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M13.48 2.82a1.13 1.13 0 010 1.6l-6.6 6.6a1.13 1.13 0 000 1.6l6.6 6.6a1.13 1.13 0 11-1.6 1.6l-6.6-6.6a3.39 3.39 0 010-4.8l6.6-6.6a1.13 1.13 0 011.6 0z" />
//         <path d="M15.9 6.22h3.05a1.13 1.13 0 010 2.26H15.9a1.13 1.13 0 010-2.26z" />
//         <path d="M15.9 15.52h3.05a1.13 1.13 0 010 2.26H15.9a1.13 1.13 0 010-2.26z" />
//       </svg>
//     ),
   
//   };
//   return icons[name] || null;
// };

// export default HeroSection;
import { useEffect, useState } from "react";
import profileImg from "@/assets/profile-img.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/shaktikumar-prajapati-223585286/",
      label: "LinkedIn",
    },
    {
      icon: "github",
      url: "https://github.com/SHAakti04",
      label: "GitHub",
    },
    {
      icon: "leetcode",
      url: "https://leetcode.com/u/SHAakti04/",
      label: "LeetCode",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="blob-gradient absolute inset-0" />

      <div className="container relative z-10 py-24">
        {/* ✅ REAL FIX: xl only */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 items-center">

          {/* ================= LEFT ================= */}
          <div
            className={`space-y-5 text-center xl:text-left transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-primary text-lg font-medium">Hello, I'm</span>

            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Shakti
              <br />
              Prajapati
            </h1>

            <p className="text-muted-foreground max-w-md mx-auto xl:mx-0">
              Full Stack Developer | Java & MERN Stack
            </p>

            {/* ✅ SOCIALS — VERTICAL, NO OVERLAP */}
            <div className="flex flex-col gap-4 pt-6 items-center xl:items-start">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-muted-foreground/30 text-muted-foreground hover:text-primary hover:border-primary transition hover:scale-110"
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* ================= CENTER IMAGE ================= */}
          <div
            className={`flex justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 blur-[90px] rounded-full" />
              <img
                src={profileImg}
                alt="Shaktikumar Prajapati"
                className="relative w-56 sm:w-64 lg:w-72 xl:w-80 object-cover rounded-b-full"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div
            className={`space-y-5 text-center xl:text-right transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-primary text-lg font-medium">
              Logical Developer
            </span>

            <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Developer
              </span>
              <br />
              <span className="text-foreground">& Engineer</span>
            </h2>

            <div className="pt-4 flex justify-center xl:justify-end">
              <a
                href="/Shaktikumar_A_Prajapati_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition group"
              >
                Resume
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

        </div>
      </div>
    </section>
  );
};

/* ================= ICONS (FULL SVGs) ================= */
const SocialIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.33 7.43a2.05 2.05 0 110-4.1 2.05 2.05 0 010 4.1zM20.45 20.45h-3.53v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.4V9h3.39v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28z" />
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.41 3-.41s2.04.14 3 .41c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
      </svg>
    ),
    leetcode: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.48 2.82a1.13 1.13 0 010 1.6l-6.6 6.6a1.13 1.13 0 000 1.6l6.6 6.6a1.13 1.13 0 11-1.6 1.6l-6.6-6.6a3.39 3.39 0 010-4.8l6.6-6.6a1.13 1.13 0 011.6 0z" />
        <path d="M15.9 6.22h3.05a1.13 1.13 0 010 2.26H15.9a1.13 1.13 0 010-2.26z" />
        <path d="M15.9 15.52h3.05a1.13 1.13 0 010 2.26H15.9a1.13 1.13 0 010-2.26z" />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default HeroSection;
