// import { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import project1 from "@/assets/project-1.jpg";
// import project2 from "@/assets/project-2.jpg";
// import project3 from "@/assets/project-3.jpg";
// import project4 from "@/assets/project-4.jpg";
// import project5 from "@/assets/project-5.jpg";

// const projects = [
//   {
//     id: 1,
//     number: "01",
//     category: "Web",
//     title: "Barbershop\nwebsite",
//     subtitle: "Technologies used",
//     description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
//     image: project1,
//   },
//   {
//     id: 2,
//     number: "02",
//     category: "Design",
//     title: "Interface Design\nFor Ice Cream Shop",
//     subtitle: "Technologies used",
//     description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
//     image: project2,
//   },
//   {
//     id: 3,
//     number: "03",
//     category: "Web",
//     title: "SEO For Coffee\nWebsites",
//     subtitle: "Technologies used",
//     description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
//     image: project3,
//   },
//   {
//     id: 4,
//     number: "04",
//     category: "Design",
//     title: "Web Design\nFor Restaurant",
//     subtitle: "Technologies used",
//     description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
//     image: project4,
//   },
//   {
//     id: 5,
//     number: "05",
//     category: "Web",
//     title: "Fast Food\nWebsite",
//     subtitle: "Technologies used",
//     description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
//     image: project5,
//   },
// ];

// const ProjectsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="section" id="projects">
//       <div className="container">
//         {/* Section title */}
//         <h2
//           className={`section__title font-display transition-all duration-700 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           I Make Incredible <br />
//           <span>Projects</span>
//         </h2>

//         {/* Projects Swiper */}
//         <div
//           className={`transition-all duration-700 delay-200 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="projects-swiper pb-12"
//           >
//             {projects.map((project) => (
//               <SwiperSlide key={project.id}>
//                 <ProjectCard project={project} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// interface ProjectCardProps {
//   project: (typeof projects)[0];
// }

// const ProjectCard = ({ project }: ProjectCardProps) => {
//   return (
//     <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 card-hover">
//       {/* Image */}
//       <div className="relative overflow-hidden aspect-video">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        
//         {/* Number overlay */}
//         <span className="absolute top-4 left-4 font-display text-4xl font-bold text-primary/30">
//           {project.number}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <span className="text-primary text-sm font-medium uppercase tracking-wider">
//           {project.category}
//         </span>
//         <h3 className="font-display text-xl font-semibold mt-2 mb-3 whitespace-pre-line leading-tight">
//           {project.title}
//         </h3>
//         <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
//           {project.subtitle}
//         </p>
//         <p className="text-sm text-muted-foreground">{project.description}</p>
//       </div>
//     </article>
//   );
// };

// export default ProjectsSection;
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* ===== IMAGE IMPORTS ===== */
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

import voiceForVoiceless from "@/assets/Voice-For-Voiceless.png";
import wanderlust from "@/assets/wonderlust.png";
import aiChat from "@/assets/ai.png";
import socialApp from "@/assets/social.jpeg";
import sabkaVideo from "@/assets/image.png";
import ticketSystem from "@/assets/ticket.jpeg";
import keyValue from "@/assets/keyvalue.png";

/* ================= PROJECT DATA ================= */
const projects = [
  {
    id: 1,
    number: "01",
    category: "MERN",
    title: "Voice For Voiceless",
    subtitle: "Real-time Animal Rescue Platform",
    description:
      "Government-collaborated MERN platform with rescue alerts, secure roles, maps integration and automation.",
    tech: "React, Node.js, Express, MongoDB, Maps, AI",
    image: voiceForVoiceless,
  },
  {
    id: 2,
    number: "02",
    category: "MERN",
    title: "Social Media App",
    subtitle: "Full Stack MERN Application",
    description:
      "Social media platform with authentication, posts, likes, comments, follow system and real-time updates.",
    tech: "React, Node.js, Express, MongoDB, JWT",
    image: socialApp,
  },
  {
    id: 3,
    number: "03",
    category: "MERN",
    title: "AI Chat App",
    subtitle: "Real-time AI Conversations",
    description:
      "Real-time AI chat system using Groq models for intelligent question-answering.",
    tech: "MERN, Groq API, LLMs",
    image: aiChat,
  },
  {
    id: 4,
    number: "04",
    category: "MERN",
    title: "Sabka Video Call",
    subtitle: "Real-time Video Conferencing",
    description:
      "Multi-user video calling platform with rooms, chat and screen sharing.",
    tech: "MERN, WebRTC, Socket.IO",
    image: sabkaVideo,
  },
  {
    id: 5,
    number: "05",
    category: "Java",
    title: "Ticketing System",
    subtitle: "Java Full Stack Application",
    description:
      "Enterprise-grade ticket management system with dashboards and role-based access.",
    tech: "Java, Spring Boot, PostgreSQL",
    image: ticketSystem,
  },
  {
    id: 6,
    number: "06",
    category: "Python",
    title: "Key-Value Backend",
    subtitle: "High Performance Backend",
    description:
      "Optimized backend with caching and ORM for ultra-fast data access.",
    tech: "Python, Django ORM, PostgreSQL, Redis",
    image: keyValue,
  },
  {
    id: 7,
    number: "07",
    category: "Backend",
    title: "RoamPulse",
    subtitle: "Travel Listing Platform",
    description:
      "Dynamic travel listing system with authentication, Cloudinary uploads and filters.",
    tech: "Node.js, Express, MongoDB, Cloudinary",
    image: wanderlust,
  },

  /* ===== UI / DESIGN PROJECTS ===== */
  {
    id: 8,
    number: "08",
    category: "Web",
    title: "Barbershop Website",
    subtitle: "Responsive Website",
    description:
      "Modern barbershop website with smooth animations and Swiper integration.",
    tech: "HTML, CSS, JavaScript, GSAP, Swiper",
    image: project1,
  },
  {
    id: 9,
    number: "09",
    category: "Design",
    title: "Ice Cream Shop UI",
    subtitle: "UI / UX Design",
    description:
      "Creative UI/UX design for an ice cream shop with elegant transitions.",
    tech: "HTML, CSS, JavaScript, Figma",
    image: project2,
  },
  {
    id: 10,
    number: "10",
    category: "Web",
    title: "SEO Coffee Website",
    subtitle: "SEO Optimized",
    description:
      "SEO-friendly coffee website with performance optimizations.",
    tech: "HTML, CSS, JavaScript",
    image: project3,
  },
  {
    id: 11,
    number: "11",
    category: "Design",
    title: "Restaurant Website Design",
    subtitle: "Web Design",
    description:
      "Premium restaurant web design focused on branding and UX.",
    tech: "HTML, CSS, JavaScript, Figma",
    image: project4,
  },
  {
    id: 12,
    number: "12",
    category: "Web",
    title: "Fast Food Website",
    subtitle: "Responsive Website",
    description:
      "Fast food website with engaging animations and responsive layout.",
    tech: "HTML, CSS, JavaScript, GSAP",
    image: project5,
  },
];

/* ================= COMPONENT ================= */
const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  const filters = ["All", "MERN", "Java", "Python", "Backend", "Web", "Design"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section ref={sectionRef} className="section" id="projects">
      <div className="container">
        <h2 className="section__title font-display">
          My <span>Projects</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {filteredProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

/* ================= CARD ================= */
const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition">
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <span className="absolute top-4 left-4 text-4xl font-bold text-primary/30">
        {project.number}
      </span>
    </div>

    <div className="p-6">
      <span className="text-primary text-xs uppercase font-medium">
        {project.category}
      </span>
      <h3 className="font-display text-xl font-semibold mt-2">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mt-2">
        {project.description}
      </p>
      <p className="text-xs text-muted-foreground mt-3">
        <strong>Tech:</strong> {project.tech}
      </p>
    </div>
  </article>
);

export default ProjectsSection;
