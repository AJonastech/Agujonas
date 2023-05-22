import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Efood",
    imgSrc: "project-imgs/efood.png",
    code: "https://github.com/AJonastech/efood-ecommerceApplication",
    projectLink: "https://efood-ecommerce-application.vercel.app",
    tech: ["ReactJs", "Sanity.io", "GoogleAuth", "Tailwindcss"],
    description:
      "A web application for making food orders.",
    modalContent: (
      <>
        <p>
      Efood is a fullstack ecommerce application that lets users order food and gives cart functionality.
        </p>
        <p>
          The tech stack is built on reactjs, and then connected to sanity.io. I used Groq to handle
          queries to the backend.
        </p>
        <p>
          I also used Googleauth to verify users and store their data before they can checkout
        </p>
      
      </>
    ),
  },
  {
    title: "Cornea Clinic",
    imgSrc: "project-imgs/medical.png",
    code: "https://github.com/Hemdee1/medical-system",
    projectLink: "https://medical-system.vercel.app/profile/dashboard",
    tech: ["Node", "", "Next", "Tailwindcss", "Material UI"],
    description:
      "An application to make and manage medical appointments and health records..",
    modalContent: (
      <>
        <p>
          The cornea project is a project for managing and booking appointments for health checkups.
        </p>
        <p>
       I worked primarily on the frontend part of the application, using nextjs, tailwindcss and material UI.
        </p>
        <p>
          The team in total consists of 3 developers. We had a great time building this application.
        </p>
    
    
      </>
    ),
  },
  {
    title: "TwoLinks",
    imgSrc: "project-imgs/twolinks.png",
    code: "https://github.com/AJonastech/twolinks-tesr",
    projectLink: "https://twolinks-tesr.vercel.app",
    tech: ["ReactS", "Tailwindcss", "Groq", "Sanity"],
    description:
      "This application allows you to view professional profiles and job listings in both dark and light modes",
    modalContent: (
      <>
        <p>
         Two Links was fun project i built to be able to view profiles of professionals and see job listings( its still a work in progress tho).
        </p>
        <p>
         I used react context to manage the state for the theme color, so the project has dark and light themes.
        </p>
      </>
    ),
  },
  {
    title: "Workflo",
    imgSrc: "project-imgs/workflo.png",
    code: "https://github.com/AJonastech/WORKFLOW",
    projectLink: "https://workflow-6c672.web.app",
    tech: ["ReactJS", "Tailwindcss"],
    description:
      "Nothing much here, just a basic application for categorizing work items.",
    modalContent: (
      <>
        <p>This was basically my first react project</p>
        <p>
          Instead of just building an app that allows you to perform CRUD on a list of items, i decided to 
          add the functionality of being able to group and classify items.
        </p>
   
      </>
    ),
  },
  {
    title: "Winsden",
    imgSrc: "project-imgs/winsden.png",
    code: "https://github.com/AJonastech/ease",
    projectLink: "https://ease-goo5.vercel.app",
    tech: ["ReactJS", "Tailwindcss", "Framer-motion"],
    description:
      "A very simple and basic landing page",
    modalContent: (
      <>
        <p>I basically built this project just for fun.</p>
        <p>
          I used frsamer-motion to perform some basic animations as well.
        </p>
   
      </>
    ),
  }
];
