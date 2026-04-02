'use client'

import CssIcon from "@/public/css.svg";
import GitIcon from "@/public/git.svg";
import GithubIcon from "@/public/github.svg";
import HtmlIcon from "@/public/html5.svg";
import JavascriptIcon from "@/public/javascript.svg";
import LaravelIcon from "@/public/laravel.svg";
import MySQLIcon from "@/public/mysql.svg";
import NextIcon from "@/public/nextdotjs.svg";
import PhpIcon from "@/public/php.svg";
import ReactIcon from "@/public/react.svg";
import TailwindIcon from "@/public/tailwindcss.svg";

import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const skillSections = [
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS (S3, EC2, IAM, CloudFront, ECR)",
        "Docker",
        "GitHub Actions (CI/CD)"
      ]
    },
    {
      title: "Programming & Scripting",
      skills: ["JavaScript", "Bash"]
    },
    {
      title: "Web Technologies",
      skills: [
        "React",
        "Next.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "PHP",
        "Laravel",
        "MySQL"
      ]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub"]
    }
  ];


  const projects = [
    {
      title: 'Inventory Management System',
      description: 'A frontend inventory management system built with modern web technologies. Features include product listing, search functionality, and a clean, intuitive user interface for managing inventory data.',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      link: 'https://keeper-inventory-management.vercel.app/',
      github: 'https://github.com/Karlos-Garcia/Keeper-inventory-management'
    },
    {
      title: 'FSL Recognition system',
      description: 'A Filipino Sign Language Recognition system. Features include capturing images, importing images, predicting signs of alphabet as well as numbers, and showing their confidence values ',
      tags: ['Python'],
      link: '',
      github: 'https://github.com/Karlos-Garcia/FSL-recognition-project',
    }
  ];

  return (
    <div className="bg-linear-to-br from-gray-900 via-black to-gray-900 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Garcia
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-blue-400 ${activeSection === item ? 'text-blue-400' : 'text-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="opacity-0 animate-fade-in flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50"></div>
                <img
                  src="/profile-link.png"
                  alt="Your Name"
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-700 shadow-2xl"
                />
              </div>
            </div>

            {/* PROFILE CONTENT */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Karlos Louis Angelo A. Garcia</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-6">
                Fresh CS Graduate | Aspiring Cloud Engineer
              </p>
              <p className="text-base md:text-lg text-gray-300 mb-8">
                I deploy and manage applications using cloud technologies like AWS, Docker, and CI/CD pipelines, with a growing focus on automation and cloud infrastructure.
              </p>
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-linear-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I’m a Computer Science graduate focused on becoming a Cloud Engineer.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I have hands-on experience deploying applications using AWS services such as S3, EC2, IAM, and CloudFront, along with CI/CD automation using GitHub Actions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am continuously improving my skills in Linux environments and Bash scripting for automation tasks. Currently, I’m expanding my knowledge in cloud infrastructure, deployment automation, and scalable system design.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I’m eager to contribute to real-world systems and grow in DevOps and cloud engineering.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-black/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {skillSections.map((section) => (
              <div
                key={section.title}
                className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/40 transition"
              >
                <h3 className="text-lg font-semibold mb-4 text-blue-400">
                  {section.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-gray-700/60 rounded-md text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <span className="text-6xl">📦</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.link && (
                      <a
                      href={project.link}
                      className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center text-sm"
                      target="_blank"
                    >
                      Live Demo →
                    </a>
                    )}
                    {project.github && (
                      <a
                      href={project.github}
                      className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center text-sm"
                      target="_blank"
                    >
                      GitHub →
                    </a>
                    )}
                    
                  </div>
                </div>
              </div>
            ))}
            
            {/* Placeholder cards for future projects */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 border-dashed flex items-center justify-center min-h-[400px]">
              <div className="text-center p-6">
                <div className="text-6xl mb-4">💡</div>
                <p className="text-gray-500">More projects coming soon...</p>
              </div>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 border-dashed flex items-center justify-center min-h-[400px]">
              <div className="text-center p-6">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-gray-500">Currently building...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm always open to discussing new opportunities and collaborations
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Karlos-Garcia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110"
            >
              <span className="text-2xl">💻</span>
            </a>
            <a
              href="https://www.linkedin.com/in/karlos-garcia-486728309/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110"
            >
              <span className="text-2xl">👔</span>
            </a>
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=karloslouisangelogarcia@gmail.com" target='_blank'
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2026. Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}