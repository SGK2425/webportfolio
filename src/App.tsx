import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, Globe, Twitter, Home, FileText, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="text-2xl font-bold text-blue-500">JD.</a>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-500 transition-colors flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </a>
              <a href="#about" className="hover:text-blue-500 transition-colors flex items-center gap-2">
                <User className="w-4 h-4" />
                About
              </a>
              <a href="#experience" className="hover:text-blue-500 transition-colors flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Experience
              </a>
              <a href="#projects" className="hover:text-blue-500 transition-colors flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Projects
              </a>
              <a href="#contact" className="hover:text-blue-500 transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Contact
              </a>
            </div>
            <a 
              href="#"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 relative">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Profile"
                className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 p-1"
              />
              <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse"></div>
            </div>
            <p className="text-blue-500 text-xl mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              John Doe
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg text-gray-300">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Full Stack Developer
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Open Source Enthusiast
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Tech Writer
              </span>
            </div>
            <div className="flex gap-6 justify-center mb-12">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
                <Globe className="w-6 h-6" />
              </a>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-blue-500" />
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 relative" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              I'm a passionate Full Stack Developer with 5+ years of experience in building web applications.
              I specialize in JavaScript/TypeScript and have professional experience working with React, Node.js,
              and cloud technologies. I love creating elegant solutions to complex problems and sharing my knowledge
              with the developer community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Frontend Skills</h3>
                <div className="space-y-4">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                      <div className="flex-1 h-2 bg-gray-700 rounded-full ml-2">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.random() * 30 + 70}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Backend Skills</h3>
                <div className="space-y-4">
                  {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'AWS'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                      <div className="flex-1 h-2 bg-gray-700 rounded-full ml-2">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.random() * 30 + 70}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative" id="experience">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Work <span className="text-blue-500">Experience</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                company: 'Tech Corp',
                role: 'Senior Full Stack Developer',
                period: '2020 - Present',
                description: [
                  'Led development of multiple high-impact projects',
                  'Mentored junior developers and conducted code reviews',
                  'Implemented CI/CD pipelines and improved deployment processes'
                ]
              },
              {
                company: 'StartUp Inc',
                role: 'Full Stack Developer',
                period: '2018 - 2020',
                description: [
                  'Developed and maintained various web applications',
                  'Implemented responsive designs and improved UX',
                  'Worked with agile methodologies in a fast-paced environment'
                ]
              }
            ].map((job, index) => (
              <div
                key={index}
                className="p-8 bg-black/50 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold text-blue-500">{job.company}</h3>
                    <p className="text-gray-400 mt-2">{job.period}</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold mb-4">{job.role}</h4>
                    <ul className="space-y-3">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-featured e-commerce platform built with React, Node.js, and PostgreSQL',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                tech: ['React', 'Node.js', 'PostgreSQL']
              },
              {
                title: 'Task Management App',
                description: 'Real-time task management application with team collaboration features',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                tech: ['Next.js', 'Socket.io', 'MongoDB']
              },
              {
                title: 'AI Content Generator',
                description: 'AI-powered content generation tool using OpenAI API and React',
                image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                tech: ['React', 'OpenAI', 'TailwindCSS']
              }
            ].map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500 transition-colors">
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 mb-12 text-lg">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd
              like to discuss potential projects or just want to connect!
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500 transition-colors">
                <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:john@example.com" className="text-gray-400 hover:text-blue-400">john@example.com</a>
              </div>
              <div className="p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500 transition-colors">
                <Linkedin className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <a href="#" className="text-gray-400 hover:text-blue-400">@johndoe</a>
              </div>
              <div className="p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500 transition-colors">
                <Github className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <a href="#" className="text-gray-400 hover:text-blue-400">@johndoe</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} John Doe. Built with{' '}
            <span className="text-blue-500">❤</span> using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;