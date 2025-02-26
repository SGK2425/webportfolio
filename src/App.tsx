import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, Globe, Twitter, Home, FileText, Phone, Instagram } from 'lucide-react';
import Whatsapp from './Whatsapp';
import Typed from 'typed.js';
import emailjs from '@emailjs/browser';
import TstLogo from './TstLogo';

function App() {

  //****************************************************************************//
  //modal ScrollTop 
  const [modalScrollTop, setModalScrollTop] = useState(0); // Store scroll position

  const handleProjectClick = (project: any) => {
    setModalScrollTop(window.pageYOffset); // Capture current scroll position
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    setSelectedProject(project);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto'; // Re-enable background scrolling
    window.scrollTo(0, modalScrollTop); // Restore scroll position
    setSelectedProject(null);
  };

  useEffect(() => {
    // Cleanup: Re-enable scrolling if component unmounts while modal is open
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

  //****************************************************************************//
  //Active Tab Color 
  const [activeSection, setActiveSection] = useState('about'); // State for the active section

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'about', top: 0 },
        { id: 'skills', top: document.getElementById('skills')?.offsetTop },
        { id: 'experience', top: document.getElementById('experience')?.offsetTop },
        { id: 'projects', top: document.getElementById('projects')?.offsetTop },
        { id: 'education', top: document.getElementById('education')?.offsetTop },
        { id: 'contact', top: document.getElementById('contact')?.offsetTop },
      ];

      // Calculate the current active section based on scroll position
      let currentSection = 'about'; // Default to 'about'
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY >= (sections[i].top || 0)) {
          currentSection = sections[i].id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },);

  //****************************************************************************//
  // Scroll page
  const [selectedProject, setSelectedProject] = useState<any>(null); // State for the selected project

  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.pageYOffset;
      const percentage = Math.round((scrolled / totalHeight) * 100);
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('scroll', handleScroll);
    };
  },);

  //****************************************************************************//
  //Type script Messages
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ["Frontend Automation Eng", "Backend Automation Eng.", "Mobile Automation Eng.", "Macros Automation Eng."],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  //****************************************************************************//
  //Sending EMail
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const params = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    console.log(params)
    emailjs.init("FDXkEzVRDhwO0iSBD");
    emailjs.send('service_ws5ifjl', 'template_adsokz9', params) // Use correct service and template IDs
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert("Email sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      }, (error) => {
        console.error('Failed to send email:', error);
        alert("Failed to send email. Please try again later."); // User-friendly error message
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="flex items-center transition-colors duration-300 hover:text-blue-500 ">
              <TstLogo color="white" height="3rem"/> {/* Pass props for color and size */}
              <span className="text-2xl font-bold text-blue-500 text-white samplecolor">Tstfolio</span>
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className={`hover:text-blue-500 transition-colors flex items-center font-bold gap-2 ${activeSection === 'about' ? 'samplecolor' : 'text-white'}`}>Home</a>
              <a href="#skills" className={`hover:text-blue-500 transition-colors flex items-center font-bold gap-2 ${activeSection === 'skills' ? 'samplecolor' : 'text-white'}`} >Skills</a>
              <a href="#experience" className={`hover:text-blue-500 transition-colors flex items-center font-bold gap-2 ${activeSection === 'experience' ? 'samplecolor' : 'text-white'}`}>Experience</a>
              <a href="#projects" className={`hover:text-blue-500 transition-colors flex items-center font-bold gap-2 ${activeSection === 'projects' ? 'samplecolor' : 'text-white'}`}>Projects</a>
              <a href="#education" className={`hover:text-blue-500 transition-colors flex items-center font-bold gap-2 ${activeSection === 'education' ? 'samplecolor' : 'text-white'}`}>Education</a>
              <a href="#contact" className={`hover:text-blue-500 transition-colors flex items-center font-bold gap-2 ${activeSection === 'contact' ? 'samplecolor' : 'text-white'}`}>Contact</a>
            </div>
            <a href="https://drive.google.com/file/d/1lNp_x__gt506XGlvE9Hrk4w2GRTo2oqA/view" target="_blank"
              className="coverbutton">
              <FileText className="w-4 h-4" />
              Cover Latter
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
                  I am a <span ref={el} className="text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"></span>
                </h2>
                <div className="text-left md:text-left text-gray-300 leading-relaxed">
                  <p>A skilled Automation Architect Engineer with a strong portfolio of Framework development and test scripts demonstrating proficiency in Selenium, Appium, and API testing. Passionate about staying current with the latest automation testing frameworks and methodologies, Thrives in dynamic teams, contributing creative solutions for test automation challenges and exploring innovative approaches to improve test coverage and reduce testing time.</p>
                  <div className="flex flex-wrap gap-4 justify-start mt-4">
                    <a href="https://drive.google.com/file/d/1zNnamWCiK2iZZ9WUxQunCE24oIpMyteE/view" className="resumebutton" target="_blank">Check Resume</a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 pr-4 mt-8 md:mt-0 flex justify-center">
                <div className="mb-8 relative myprofilecontainer">
                  <div className="rounded-full overflow-hidden w-[27rem] h-[27rem] border-4 border-blue-500 myprofileimg">
                    <img src="https://res.cloudinary.com/do3edwdc3/image/upload/v1/MyProfile4_lo5i6o" alt="Profile" className="w-full h-full object-cover" />
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
          <h2 className="text-4xl font-bold mb-16 text-center">
            Key <span className="samplecolor">Skills</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Automation Expertise</h3>
                <div className="flex flex-wrap gap-4">
                  {/* Map over your skills data */}
                  {[
                    { name: 'Selenium WebDriver', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/selenium_lsuf6f' },
                    { name: 'Selenium GRID', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/grid_iguahs' },
                    { name: 'Selenium IDE', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/selenium_IDE_xmwevu' },
                    { name: 'Cucumber', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/cucumber_viz2dt' },
                    { name: 'Java', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/java_rddnmg' },
                    { name: 'Postman', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/postman_n7bktn' },
                    { name: 'Restassured', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/Restassured_j9rpqd' },
                    { name: 'Swagger', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/Swagger-logo_d4edzw' },
                    { name: 'Appium', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/Appium_tcjdt5' },
                    { name: 'Andriod', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/android_usay3t' },
                    { name: 'iOS', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/iOS_xyc5lo' },
                    { name: 'Cypress', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/cypress_mhoox3' },
                    { name: 'Java Script', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/js_usaphr' },
                    { name: 'Maven', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/maven_kjxsaq' },
                    { name: 'TestNG', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/testNG_t3uiqa' },
                    { name: 'Junit', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/junit_lqhcxa' },
                    { name: 'VB Script', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/vb_script_b4nqxk' },
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3">
                      <img src={skill.image} alt={skill.name} className="w-8 h-8 rounded-full" /> {/* Image here */}
                      <span className="text-gray-300">{skill.name}</span>
                      {/* You can keep or remove the progress bars */}
                      {/* <div className="flex-1 h-2 bg-gray-700 rounded-full ml-2">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.random() * 30 + 70}%` }}></div>
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>

              {/* Others Skills */}
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Others Expertise</h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: 'Git', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/git_img_ldkgtv' },
                    { name: 'GitHub', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/gitHub_j0ln6r' },
                    { name: 'Eclipse', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/ecplice_aecemv' },
                    { name: 'VS Code', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/vs_kcvq5p' },
                    { name: 'Intellij', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/intellij_m0j7kk' },
                    { name: 'Xcode', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/xcode_sw54w1' },
                    { name: 'Android SDK', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/android_SDK_wal0rq' },
                    { name: 'HTML', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/html_wt3vzd' },
                    { name: 'CSS', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/css_hsztpx' },
                    { name: 'Jira', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/jira_iuoszn' },
                    { name: 'Jenkins', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/jenkins_flxokr' },
                    { name: 'CI/CD', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/CICD_img_xxrckg' },
                    { name: 'Node JS', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/nodejs_tuybtu' },
                    { name: 'Json', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/json_sw3nqg' },
                    { name: 'BrowserStack', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/browserstack_n00fza' },
                    { name: 'Perfecto', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/perfecto_hmvbla' },
                    { name: 'SonarQube', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/sonarQube_mn1lbx' },
                    { name: 'Jacoco', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/jacoco_crzbxp' },
                    { name: 'Kibana', image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/kibana_huoh8h' }

                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3">
                      <img src={skill.image} alt={skill.name} className="w-8 h-8 rounded-full" />
                      <span className="text-gray-300">{skill.name}</span>
                      {/* <div className="flex-1 h-2 bg-gray-700 rounded-full ml-2">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.random() * 30 + 70}%` }}></div>
                      </div> */}
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
            Work <span className="samplecolor">Experience</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                company: 'EY Technology Solutions',
                role: 'Associate Test Manager',
                period: 'Sep 2021 - Present',
                description: [
                  'Involved on framework development and updating framework',
                  'Design,Develop,Execute,Maintain Automated test scripts',
                  'Mentored junior Automation Tester\'s and conducted code reviews',
                  'Implemented CI/CD pipelines and improved deployment processes',
                  'Assisting with campus recruitment and organizing interview drives'
                ]
              },
              {
                company: 'HCL Technologies',
                role: 'Test Lead',
                period: 'Dec 2019 - Sep 2021',
                description: [
                  'Framework development and updating framework',
                  'Design,Develop,Execute,Maintain Automated test scripts',
                  'Handled multiple applications simultaneously with a limited time frame.',
                  'Worked with development team to ensure testing issues are resolved.'
                ]
              },
              {
                company: 'Hexaware Technologies',
                role: 'System Analyst',
                period: 'Jan 2018 - Dec 2019',
                description: [
                  'Framework development and updating framework',
                  'Design,Develop,Execute,Maintain Automated test scripts',
                  'Data validation using Excel and VB script macros to validate hug data check',
                  'Prepared WSR and DSR and shared the same to the onsite counterpart.'
                ]
              },
              {
                company: 'Payoda Technology Inc',
                role: 'Senior Test Engineer',
                period: 'Dec 2014 - Nov 2017',
                description: [
                  'Fully involved on framework development ',
                  'Design,Develop,Execute,Maintain Automated test scripts',
                  'Bug reporting, Retesting and closure of the bugs upon bug fix.',
                  'Extensively involved in providing functional training to new team members.'
                ]
              },
              {
                company: 'Iframes Technologies',
                role: 'Software Developer',
                period: 'Jan 2013 - Dec 2014',
                description: [
                  'Involved in the preparation of Test Scenarios',
                  'Test Cases & Test execution for various levels of testing like Functional and Regression Testing.',
                  'Develop and Execute,Maintain Automated test scripts',
                ]
              }
            ].map((job, index) => (
              <div key={index} className="p-8 bg-black/50 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500 transition-colors">
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
            Featured <span className="samplecolor">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Aladdin Blackrock',
                description: 'Aladdin target management management platform, scalable portfolio monitoring and rebalancing, and specialized for model portfolio managers',
                image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/br_r4konf',
                tech: ['Cypress', 'JavaScript', 'BDD', 'Spring boot', 'API Testing', 'Postman', 'GIT'],
                projectDescription: 'BlackRock Aladdin PM remains the industry leader in portfolio management it amis to deliver persona-centered workflow and hogh scale portfolio management. The platform simplifies complex portfolio management challenges with intuitive user experience and modular building blocks. Aladdin target management management platform, scalable portfolio monitoring and rebalancing, and specialized for model portfolio managers',
                Roles: ['Understanding the requirement.',
                  'Identifying test cases for Functional and Automation.',
                  'Preparing Test scripts for Cypress, Appium and API Testing',
                  'Updating framework functions when needed.',
                  'Execution of test scripts for cross Browser testing and Devices.',
                  'Report verification and validation.',
                  'Review of Test Scripts and Execution Scripts',
                  'Reviewing the test reports and preparing the Test summary reports.']
              },
              {
                title: 'Morgan Stanley',
                description: 'Interactions with accounts, measure the adoption of diverse products and online offerings for clients',
                image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/ms_k6wflg',
                tech: ['Selenium', 'Java', 'BDD', 'Macros', 'VB Script', 'Fast Framework', 'GIT'],
                projectDescription: 'Field Management Business Service is a team dedicated to creating applications and systems that monitor financial advisors\' interactions with accounts, measure the adoption of diverse products and online offerings for clients, and compute compensation and rewards accordingly.',
                Roles: ['Understanding the requirement.',
                  'Identifying test cases for Functional and Automation.',
                  'Preparing Test scripts for Selenium WebDriver, Appium and API Testing',
                  'Updating framework functions when needed.',
                  'Execution of test scripts for cross Browser testing and Devices.',
                  'Report verification and validation.',
                  'Review of Test Scripts and Execution Scripts',
                  'Reviewing the test reports and preparing the Test summary reports.']
              },
              {
                title: 'RF360 Qualcomm',
                description: 'AR stock tool is generated only for China, Singapore and Germany employees who are eligible for stock rating.',
                image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/rf_woji4c',
                tech: ['Selenium', 'Java', 'BDD', 'Mobile Automation', 'Postman', 'Restassured', 'GIT'],
                projectDescription: 'AR Stock tool which is custom application for RF360 all entities and RFFE Germany employees. This tool is mainly deployed for provide that the AR stock and promotion stock who are eligible in annual review process. Only for who has QUALCOMM ids can access this tool. Manager and Above roles can view/Edit the stock rating, Promotion and generating the stock reward statement for the employees. The AR stock tool is generated only for China, Singapore and Germany employees who are eligible for stock rating.',
                Roles: ['Understanding the requirement.',
                  'Identifying test cases for Functional and Automation.',
                  'Preparing Test scripts for Selenium WebDriver, Appium and API Testing',
                  'Updating framework functions when needed.',
                  'Execution of test scripts for cross Browser testing and Devices.',
                  'Report verification and validation.',
                  'Review of Test Scripts and Execution Scripts',
                  'Reviewing the test reports and preparing the Test summary reports.']
              },
              {
                title: 'NeoLink BNP Paribas',
                description: 'Neo-Link offering allows clients to trade all electronic securities across over 90 markets worldwide',
                image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/neolink_i94ybi',
                tech: ['Selenium', 'Java', 'BDD', 'Postman', 'Restassured', 'SVN'],
                projectDescription: 'Using Neo-Link Application Global execution offering allows clients to trade all electronic securities across over 90 markets worldwide. They simply execute trades through one of our execution to custody partners and leave the rest to us. Clearing and settlement services we connect clients trading activities to post trading market infrastructures either through a single global window or multi-direct set-up. Trade settlement needs to work efficiently and cost efficiently. Local custody key to successful post-trade processing is a partner who is at home in local market. Client can rely on deep understanding of local practices and rules. BNP Paribas securities services have launched a solution that allows our clients to anticipate liquidity requirements, leverage assert and optimise cash management.',
                Roles: ['Identifying test cases for automation.',
                  'Understanding the requirement.',
                  'Preparing Test scripts for Selenium WebDriver',
                  'Good experience in Xpath on identifying objects.',
                  'Updating framework functions when needed.',
                  'Execution of test scripts for IE Browser testing.',
                  'Report verification and validation.',
                  'Review of Test Scripts and Execution Scripts',
                  'Reviewing the test reports and preparing the Test summary reports.']
              },
              {
                title: 'CVP Arista Networks',
                description: 'Arista is the core of Arista cloud networking solutions for next-generation data',
                image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/arista_je2x4e',
                tech: ['Selenium', 'Java', 'BDD', 'Swagger', 'Postman', 'Restassured', 'SVN', 'SonarQube', 'Jacoco'],
                projectDescription: 'Arista is the core of Arista cloud networking solutions for next-generation data centres and cloud networks Cloud architectures built with Arista EOS scale to tens of thousands of compute and storage nodes with management and provisioning capabilities that work at scale. Through its programmability, EOS enables a set of software applications that deliver workflow automation, unprecedented network visibility and analytics and rapid integration with a wide range of third-party applications for virtualization, management, automation, and orchestration services. Arista Extensible Operating System (EOS) is a fully programmable and highly modular, Linux based network operation system, using familiar industry standard CLI and runs a single binary software image across the Arista switching family. Architected for resiliency and programmability, EOS has a unique multi-process state sharing architecture that separates state information and packet forwarding from protocol processing and application logic.',
                Roles: ['Identifying test cases for automation.',
                  'Understanding the requirement.',
                  'Preparing Test scripts for Selenium WebDriver',
                  'Good experience in Xpath on identifying objects.',
                  'Updating framework functions when needed.',
                  'Execution of test scripts for Cross Browser testing.',
                  'Report verification and validation.',
                  'Review of Test Scripts and Execution Scripts',
                  'Reviewing the test reports and preparing the Test summary reports.']
              },
              {
                title: 'CREXENDO',
                description: 'Crexendo Chat & Video calling is an application',
                image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/crexdeo_nrlwlv',
                tech: ['Selenium', 'Java', 'Android', 'iOS', 'Andriod Studio', 'Xcode', 'physical Devices'],
                projectDescription: 'Crexendo Video calling is an application which has ability to user can perform video calls on one to one basis with another Crexendo contact using the Crexendo application.The user can start an instant chat with other Crexendo user on one to one basis using the Crexendo application. The modules for the application like Sign Up, History, Contacts, Voice Calls, Video Calling, Instant Message and Settings.',
                Roles: ['Identifying test cases for Manual Testing.',
                  'Understanding the requirement.',
                  'Preparing test cases using Redmine',
                  'Execution test script for Android and IOS mobiles using Appium.',
                  'Automate using Real devices and emulators.',
                  'Using Appium for mobile automation.',
                  'Report verification and validation',
                  'Reviewing the test Reports and Preparing test summary reports.']
              },
              {
                title: 'Jovia Health Care',
                description: 'Health Fleet is pioneering a new horizon in preventive healthcare and support',
                image: 'https://res.cloudinary.com/do3edwdc3/image/upload/v1/healthFeet_gqklwa',
                tech: ['Selenium IDE', 'Java', 'Selenium Webdriver', 'Funactional Testing'],
                projectDescription: 'Health Fleet is pioneering a new horizon in preventive healthcare and support, one that focuses on individual needs, personal interaction and results Personalized Medical Nutrition and Behavioural Therapy-based health programs Dedicated health counsellors to oversee care and progress Accessible team of cross-functional health specialists committed to each user\'s success Robust, easy-to-use online platform for secure, at-home counselling Affordable care that can scale to meet the varying needs of users Just like the health characteristics of our users, our individualized prevention programs are unique. Each one is created and implemented by a team of highly qualified, highly dedicated healthcare professionals from a range of specialties. This multi-disciplinary approach enables us to meet many user needs and create a balance of one-on-one and group counselling. Our users access their live counselling through high-definition video (or via phone) for privacy and convenience.',
                Roles: ['Identifying test cases for Manual Testing and Automation test cases.',
                  'Understanding the requirement.',
                  'Preparing test scripts using Selenium IDE',
                  'Updating framework functions when needed.',
                  'Execution test script for cross browser testing',
                  'Report verification and validations',
                  'Reviewing the test Reports and Preparing test summary reports']
              }
            ].map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500 transition-colors" onClick={() => handleProjectClick(project)}>
                  <div className="relative h-48">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
                      <a className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
                        <ExternalLink className="w-4 h-4" />
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md">
          <div className="bg-gray-900 p-4 rounded-lg relative overflow-y-auto max-h-[90vh] w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 focus:outline-none rounded-lg bg-blue-600" onClick={closeModal} aria-label="Close Modal">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="project-title">{selectedProject.title}</h2>
            <p className="text-gray-300 mb-6">{selectedProject.projectDescription}</p>
            <h3 className="project-title">Roles & Responsibility:</h3>
            <ul className="list-disc list-inside text-gray-300">
              {selectedProject.Roles.map((role, index) => ( // Corrected variable name to 'role'
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Education Section */}
      <section className="py-20 relative" id="education">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Get In <span className="samplecolor">Education</span>
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
                institution: 'Viswam High School',
                university: 'Board Of Secondary Education, Andhra Pradesh',
                degree: 'SSC - Xth',
                period: '2005-2006',
                grade: '67.10',
                description: "I embarked on my educational journey with enthusiasm. This pivotal year instilled a strong foundation in essential subjects and time management. It was a crucial step toward my academic and personal development, preparing me for the road ahead"
              },
            ].map((edu, index) => (
              <div key={index} className="p-8 bg-black/50 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500 transition-colors">
                <h3 className="text-3xl md:text-3xl font-bold mb-5 bg-gradient-to-r bg-clip-text text-blue-500">{edu.institution}</h3>
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
          <h2 className="text-4xl font-bold mb-12 text-center">
            Contact <span className="samplecolor">Me</span>
          </h2>
          <p className="text-gray-300 mb-9 text-lg text-center">Feel free to reach out to me for any questions or opportunities!</p>

          <div className="max-w-xl mx-auto bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500 transition-colors">
            <form onSubmit={handleSubmit}>

              <div className="text-3xl font-bold mb-6">Email Me 🚀</div>

              <div className="mb-4">
                <input type="email" id="email" name="email" placeholder="Your Email *" required value={formData.email} onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue 500" />
              </div>

              <div className="mb-4">
                <input type="text" id="name" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="mb-4">
                <input type="text" id="subject" name="subject" placeholder="Subject *" required value={formData.subject} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="mb-6">
                <textarea id="message" name="message" placeholder="Message *" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors">Send Message</button>
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
              <a href="#about" className="hover:text-blue-500 transition-colors flex items-center gap-2">Home</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors flex items-center gap-2">Skills</a>
              <a href="#experience" className="hover:text-blue-500 transition-colors flex items-center gap-2">Experience</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors flex items-center gap-2">Projects</a>
              <a href="#education" className="hover:text-blue-500 transition-colors flex items-center gap-2">Education</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors flex items-center gap-2">Contact</a>
            </nav>
          </div>

          <div className="flex items-center justify-center py-4">
            <a href="tel:+91-9444344416" target="_blank" rel="noopener noreferrer" aria-label="Phone" className="mx-2 text-gray-400 hover:text-blue-500"> <Phone className="w-6 h-6" /> </a>
            <a href="mailto:sgk2425@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="mx-2 text-gray-400 hover:text-blue-500"><Mail className="w-6 h-6" /> </a>
            <a href="https://www.linkedin.com/in/gopikrishna-settipalli-sgk2425/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="mx-2 text-gray-400 hover:text-blue-500"> <Linkedin className="w-6 h-6" /> </a>
            <a href="//wa.me/919444344416" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp" className="mx-2 text-gray-400 hover:text-blue-500"> <Whatsapp className="w-6 h-6" /> </a>
            <a href="https://www.instagram.com/sgk2425" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="mx-2 text-gray-400 hover:text-blue-500"> <Instagram className="w-6 h-6" /> </a>
            <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer" aria-label="X" className="mx-2 text-gray-400 hover:text-blue-500"> <Twitter className="w-6 h-6" /> </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="mx-2 text-gray-400 hover:text-blue-500"> <Github className="w-6 h-6" /> </a>
            
          </div>

          <p className="text-gray-400 mt-4">
            © {new Date().getFullYear()} Elevating the Digital Experience!{' '}
            <span className="text-blue-500" src="https://res.cloudinary.com/do3edwdc3/image/upload/v1740486184/MyHeart_jsh3ly.jpg">❤</span> using Automation Testing
          </p>
        </div>
      </footer>


      {/* Scroll Section */}

      <div>
        {/* Scroll to Top Button */}
        {isVisible && (
          <div className="fixed bottom-20 right-8 z-50">
            <button onClick={scrollToTop} className="scrollLevel mb-2" aria-label="Scroll to top">
              <ChevronDown className="w-6 h-6 rotate-180" />
            </button>
          </div>
        )}

        {/* Scroll to Bottom Button */}
        {isVisible && (
          <div className="fixed bottom-8 right-8 z-50 page-percentage">
            <button onClick={scrollToBottom} className="scrollLevel" aria-label="Scroll to bottom">
              <span className="text-sm">{scrollPercentage}%</span>
            </button>
          </div>
        )}

      </div>

    </div>
  );
}

export default App;
