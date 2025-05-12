import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Projects() {
  useGSAP(() => {
    gsap.from(".project-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "Power4.easeOut"
    });
  });

  const projects = [
    {
      title: "Content Template Generator",
      description: "A tool for generating content templates efficiently",
      image: "./imag.png",
      link: "https://contenttemplategenerator.netlify.app",
      tags: ["Web App", "Content"]
    },
    {
      title: "AI That Cares",
      description: "An AI-powered platform focused on mental health and well-being",
      image: "./girlbg.png",
      link: "https://aithatcares.netlify.app",
      tags: ["AI", "Health"]
    },
    {
      title: "PDF Question Analyzer",
      description: "Tool for analyzing and processing questions from PDF documents",
      image: "./sky.png",
      link: "https://pdfquestionanalyzer.netlify.app",
      tags: ["PDF", "Analysis"]
    },
    {
      title: "TikTok Clone",
      description: "A modern recreation of the popular social media platform",
      image: "./imag.png",
      link: "https://titclone.netlify.app",
      tags: ["Social", "Clone"]
    },
    {
      title: "Commercial Brand T-Shirts",
      description: "Designing and creating t-shirts for commercial brands",
      image: "./girlbg.png",
      link: "#",
      tags: ["Design", "Fashion"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h1 className="text-8xl">Projects</h1>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/anandam" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-500 transition-colors duration-300">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="https://www.figma.com/@anandam" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-500 transition-colors duration-300">
              <i className="ri-figma-fill"></i>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-zinc-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-3xl mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-400 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl text-gray-400 mb-8">
            I am vibe coder and Just doing some editing stuff.<br/>
            Perfection is impossible just strive to do ur best 🤍
          </p>
          <a 
            href="https://bento.me/anandam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded text-xl hover:bg-yellow-400 transition-colors duration-300"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects; 