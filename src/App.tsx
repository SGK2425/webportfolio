import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, Globe, Twitter, Home, FileText, Phone, Instagram } from 'lucide-react';
import Whatsapp from './Whatsapp';
import Typewriter from 'typewriter-effect';

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const name = formData.get('name');
    const subject = formData.get('subject');
    const message = formData.get('message');

    fetch('http://localhost:5000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, subject, message }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        event.currentTarget.reset();
        alert("Message sent successfully!");
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Error sending message. Please try again later.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="text-2xl font-bold text-blue-500">JD</a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-500 transition-colors flex items-center gap-2">About</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors flex items-center gap-2">Contact</a>
              <a href="#experience" className="hover:text-blue-500 transition-colors flex items-center gap-2">Experience</a>
              <a href="#education" className="hover:text-blue-500 transition-colors flex items-center gap-2">Education</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors flex items-center gap-2">Projects</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors flex items-center gap-2">Skills</a>
            </div>
            <a
              href="#"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FileText className="w-4 h-4" />
              GIT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 pr-4 items-center justify-center">
                <p className="text-left text-4xl md:text-4xl font-bold mb-6">Hello, I'm</p>
                <p className="text-left text-4xl md:text-4xl font-bold mb-6">
                  Settipalli Gopikrishna
                </p>
                <h2 className="text-left text-4xl md:text-4xl font-bold mb-6">
                  I am a <span className="text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Automation Testing</span>
                </h2>
                <div className="text-left md:text-left text-gray-300 leading-relaxed">
                  <p>A skilled Automation Architect Engineer with a strong portfolio of Framework development and test scripts demonstrating proficiency in Selenium, Appium, and API testing. Passionate about staying current with the latest automation testing frameworks and methodologies, Thrives in dynamic teams, contributing creative solutions for test automation challenges and exploring innovative approaches to improve test coverage and reduce testing time.</p>
                  <div className="flex flex-wrap gap-4 justify-start mt-4">
                    <a href="#contact" className="bg-blue-600 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 px-4 py-2">
                      Check Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 pr-4 mt-8 md:mt-0 flex justify-center">
                <div className="mb-8 relative">
                  <div className="rounded-full overflow-hidden w-[27rem] h-[27rem] border-4 border-blue-500">
                    <img
                      src="https://res.cloudinary.com/do3edwdc3/image/upload/v1/MyProfile4_lo5i6o"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Skill Section */}
      <section className="py-20 relative" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center"> My Key <span className="text-blue-500">Skills & Expertise </span>
 </h2>
          <div className="max-w-4xl mx-auto">
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
                company: 'EY Technology Solutions',
                role: 'Associate Test Manager',
                period: 'SEP 2021 - Present',
                description: [
                  'Led development of multiple high-impact projects',
                  'Mentored junior developers and conducted code reviews',
                  'Implemented CI/CD pipelines and improved deployment processes'
                ]
              },
              {
                company: 'HCL Technologies',
                role: 'Test Lead',
                period: 'DEC 2019 - SEP 2021',
                description: [
                  'Developed and maintained various web applications',
                  'Implemented responsive designs and improved UX',
                  'Worked with agile methodologies in a fast-paced environment'
                ]
              },
              {
                company: 'Hexaware Technologies',
                role: 'System Analyst',
                period: 'JAN 2018 - DEC 2019',
                description: [
                  'Developed and maintained various web applications',
                  'Implemented responsive designs and improved UX',
                  'Worked with agile methodologies in a fast-paced environment'
                ]
              },
              {
                company: 'Payoda Technology Inc',
                role: 'Senior Test Engineer',
                period: 'DEC 2014 - NOV 2017',
                description: [
                  'Developed and maintained various web applications',
                  'Implemented responsive designs and improved UX',
                  'Worked with agile methodologies in a fast-paced environment'
                ]
              },
              {
                company: 'Iframes Technologies',
                role: 'Software Developer',
                period: 'Jan 2013 - DEC 2014',
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

      {/* Education Section */}
      <section className="py-20 relative" id="education">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Get In <span className="text-blue-500">Education</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                institution: 'Prathyusha Engineering College',
                university: 'Anna University, Tamil Nadu',
                degree: 'Bachelor of Engineering - Electronics and Communication Engineering',
                period: '2008-2013',
                grade: '62.8 CGPA',
                description: "As a Electronics and Communication Engineering graduate, I possess strong problem-solving and precision skills. Combining this foundation with my passion for technology, I'm venturing into IT. My college experience has equipped me to bridge the worlds of engineering and IT, applying efficiency and innovation to both realms, making me a versatile and adaptable professional."
              },
              {
                institution: 'Sree Bharathi Junior collage',
                university: 'Board of Intermediate Education, Andhra Pradesh',
                degree: 'MPC (Mathematics, Physics and Chemistry)',
                period: '2006-2008',
                grade: '74.80',
                description: "I've embraced a dynamic academic journey. My studies have fostered critical thinking and a thirst for knowledge. Through my dedication and adaptability, I've honed essential skills that transcend disciplines, preparing me for future challenges and opportunities."
              },
              {
                institution: 'VISWAM HIGH SCHOOL',
                university: 'Board Of Secondary Education, Andhra Pradesh',
                degree: 'SSC - Xth',
                period: '2005-2006',
                grade: '67.10',
                description: "I embarked on my educational journey with enthusiasm. This pivotal year instilled a strong foundation in essential subjects and time management. It was a crucial step toward my academic and personal development, preparing me for the road ahead"
              },
            ].map((edu, index) => (
              <div key={index} className="p-8 bg-black/50 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500 transition-colors">
                <h3 className="text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{edu.institution}</h3>
                <h4 className="text-xl font-semibold mt-3 text-blue-500">University : {edu.university}</h4>
                <h6 className="text-xl font-semibold mt-3">{edu.degree}</h6>
                <p className="text-gray-400 mt-2">Period : {edu.period}</p>
                {edu.grade && <p className="text-gray-300 mt-2">Grade : {edu.grade}</p>}
                <p className="text-gray-300 mt-4">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Contact <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-300 mb-12 text-lg text-center">
            Feel free to reach out to me for any questions or opportunities!
          </p>

          <div className="max-w-xl mx-auto bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500 transition-colors">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="mb-4">
                <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="mb-4">
                <input type="text" id="subject" name="subject" placeholder="Subject" className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="mb-6">
                <textarea id="message" name="message" placeholder="Message" rows={4} className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-center">
            <span className="text-white">Settipalli Gopikrishna</span>
          </h2>
          <div className="flex items-center justify-center py-4">
            <nav className="hidden md:flex items-center justify-center space-x-8">
              <a href="#about" className="hover:text-blue-500 transition-colors flex items-center gap-2">About</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors flex items-center gap-2">Contact</a>
              <a href="#experience" className="hover:text-blue-500 transition-colors flex items-center gap-2">Experience</a>
              <a href="#education" className="hover:text-blue-500 transition-colors flex items-center gap-2">Education</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors flex items-center gap-2">Projects</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors flex items-center gap-2">Skills</a>
            </nav>
          </div>

          <div className="flex items-center justify-center py-4">
            <a href="tel:+91-9444344416" target="_blank" rel="noopener noreferrer" aria-label="Phone" className="mx-2 text-gray-400 hover:text-blue-500">
              <Phone className="w-6 h-6" />
            </a>
            <a href="mailto:sgk2425@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="mx-2 text-gray-400 hover:text-blue-500">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/gopikrishna-settipalli-sgk2425/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="mx-2 text-gray-400 hover:text-blue-500">
              <Linkedin className="w-6 h-6" />
            </a>
                      
            <a href="//wa.me/919444344416" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp" className="mx-2 text-gray-400 hover:text-blue-500">
              <Whatsapp className="w-6 h-6" />              
            </a>
            
            <a href="https://www.instagram.com/sgk2425" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="mx-2 text-gray-400 hover:text-blue-500">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer" aria-label="X" className="mx-2 text-gray-400 hover:text-blue-500">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="mx-2 text-gray-400 hover:text-blue-500">
              <Github className="w-6 h-6" />
            </a>

          </div>

          <p className="text-gray-400 mt-4">
            © {new Date().getFullYear()} Elevating the Digital Experience!{' '}
            <span className="text-blue-500">❤</span> using Automation Testing
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
