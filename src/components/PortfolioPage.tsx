import React from 'react';
import { ArrowLeft, Github, Linkedin, Mail, MapPin, Calendar, Award } from 'lucide-react';

interface PortfolioPageProps {
  onNavigateBack: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigateBack }) => {
  const projects = [
    {
      title: "Zen Garden Platform",
      description: "A meditation and mindfulness app built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "WebSocket"],
      status: "Live"
    },
    {
      title: "Digital Minimalism",
      description: "Clean, distraction-free productivity suite",
      tech: ["TypeScript", "Next.js", "Tailwind CSS"],
      status: "Development"
    },
    {
      title: "Nature Sound Library",
      description: "Curated collection of natural ambient sounds",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      status: "Live"
    }
  ];

  const skills = [
    "JavaScript/TypeScript", "React/Vue.js", "Node.js", "Python",
    "PostgreSQL/MongoDB", "Docker", "AWS", "UI/UX Design"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-slate-50 to-green-50 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-200/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Back button */}
      <button
        onClick={onNavigateBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-stone-600 hover:text-stone-800 transition-all duration-300 hover:scale-105 shadow-lg"
      >
        <ArrowLeft size={20} />
        <span className="font-light">Return to Serenity</span>
      </button>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mx-auto mb-8 shadow-xl flex items-center justify-center">
            <span className="text-4xl text-white font-light">禅</span>
          </div>
          <h1 className="text-5xl font-light text-stone-800 mb-4 tracking-wide">
            Alex Chen
          </h1>
          <p className="text-xl text-stone-600 font-light mb-6">
            Full-Stack Developer & Digital Minimalist
          </p>
          <div className="flex items-center justify-center gap-6 text-stone-500">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="text-sm">San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span className="text-sm">Available for projects</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-2xl font-light text-stone-800 mb-6 flex items-center gap-3">
            <Award size={24} className="text-green-600" />
            Philosophy
          </h2>
          <p className="text-stone-600 leading-relaxed text-lg font-light">
            I believe in creating digital experiences that enhance human life rather than complicate it. 
            My approach combines technical excellence with mindful design, focusing on simplicity, 
            accessibility, and user well-being. Every line of code should serve a purpose, 
            every interface should feel intuitive, and every project should leave the world a little better.
          </p>
        </div>

        {/* Skills */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-2xl font-light text-stone-800 mb-6">Core Abilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="px-4 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg text-center text-stone-700 font-light hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-stone-800 mb-8">Recent Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-stone-800">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-stone-600 mb-4 font-light">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-stone-100 text-stone-600 rounded text-sm font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-green-100/60 to-emerald-100/60 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-2xl font-light text-stone-800 mb-6">Let's Create Something Beautiful</h2>
          <p className="text-stone-600 mb-8 font-light">
            Open to collaborations that align with values of simplicity, sustainability, and human-centered design.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:alex@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-white/80 rounded-full text-stone-700 hover:text-stone-900 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              <span>Contact</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-white/80 rounded-full text-stone-700 hover:text-stone-900 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-white/80 rounded-full text-stone-700 hover:text-stone-900 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Zen quote at bottom */}
      <div className="text-center py-8">
        <p className="text-stone-400 text-sm font-light italic">
          "Simplicity is the ultimate sophistication" - Leonardo da Vinci
        </p>
      </div>
    </div>
  );
};

export default PortfolioPage;