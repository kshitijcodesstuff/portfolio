import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/replit.png"
          title="Replit Clone"
          description="A Replit clone developed on Kubernetes, utilizing Xterm.js for real-time collaboration and Cloudflare for security and performance. Docker and AWS ASG ensure consistent environments and cost-efficient scaling, with TypeScript enhancing code reliability."
        />
        <ProjectCard
          src="/techpulse.png"
          title="Project Showcase Website"
          description="TechPulse, a cutting-edge tech news platform, seamlessly integrates Prisma with MongoDB for robust database operations, Next.js for superior performance with server-side rendering, TypeScript for enhanced code reliability, and Cloudinary for efficient image management, ensuring fast load times and a user-friendly experience."
        />
        <ProjectCard
          src="/expense.png"
          title="Expense Tracker Application"
          description="Developed an Expense Tracker Application using the MERN Stack, featuring a scalable backend powered by Node.js and Express, integrated with MongoDB for efficient data management, and an intuitive UI built with ReactJS for a visually stunning user experience."
        />
        <ProjectCard
          src="/search.png"
          title="NLP Video Seach API"
          description="Revamped video search API with advanced NLP, Pytube for YouTube video download, CV2 for frame extraction, and HNSW indexing for enhanced search efficiency, yielding a 40% accuracy boost and 50% latency reduction."
        />
      </div>
    </div>
  );
};

export default Projects;