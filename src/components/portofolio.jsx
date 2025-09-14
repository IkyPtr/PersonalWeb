import React, { useState, useEffect } from 'react';

// --- Ikon SVG ---
// Kumpulan ikon sebagai komponen agar mudah digunakan
const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const CertificateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
        19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.75 
        1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.57z"/>
    </svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.03-.02-2.02-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.07-.73.08-.72.08-.72 
        1.18.08 1.8 1.21 1.8 1.21 1.05 1.79 2.76 1.27 3.43.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.27.45-2.31 1.2-3.13-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.2a11.07 11.07 0 0 1 2.9-.39c.99 0 1.99.13 2.92.39 2.2-1.51 3.17-1.2 
        3.17-1.2.64 1.58.24 2.75.12 3.04.75.82 1.2 1.86 1.2 3.13 0 4.45-2.69 5.42-5.25 5.71.42.36.8 1.08.8 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"/>
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 
        7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-2.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"/>
    </svg>
);

// --- Komponen Halaman ---

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">
                <a href="#" className="text-xl font-bold text-white">Rezki Saputra</a>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#work" className="text-gray-300 hover:text-white transition-colors">Work</a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                    <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">Let's Talk</button>
                </div>

                {/* Mobile toggle */}
                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setIsOpen((v) => !v)}
                    className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            <div id="mobile-menu" className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t border-white/10`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 space-y-2">
                    <a href="#work" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white transition-colors">Work</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white transition-colors">Contact</a>
                    <button onClick={() => setIsOpen(false)} className="w-full bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">Let's Talk</button>
                </div>
            </div>
        </nav>
    );
};

const Hero = () => {
    const words = ["driven by Design.", "driven by Teamwork.", "driven by Leadership."];
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentWord(words[index]);
    }, [index]);

    return (
        <section className="min-h-[70vh] flex items-center text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <p className="text-base sm:text-lg text-gray-300 mb-4">Hello! I'm Rezki.</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Rezki Saputra (aka Iky Ptr) — Turning data and ideas into experiences that inspire
                    <span className="relative">
                        {currentWord}
                        {/* <span className="absolute bottom-0 left-0 w-2 h-full bg-white animate-pulse"></span> */}
                    </span>
                </h1>

                <p className="text-base sm:text-lg text-gray-400 mt-6 max-w-xl">
                    A multidisciplinary IT student with strong mathematical skills and leadership experience, focusing on leveraging data science to create impactful digital solutions.
                </p>
                <a href="#contact">
                    <button
                        className="mt-8 bg-black text-white font-semibold py-3 px-6 rounded-lg flex items-center hover:bg-gray-800 transition-colors"
                    >
                        Let's Talk <span className="ml-2">→</span>
                    </button>
                </a>

            </div>
        </section>
    );
};

const About = () => {
    const skills = {
        "Web Development": ["React", "TypeScript", "Node.js", "Supabase"],
        "Data": ["SQL", "Excel", "Tableau", "Python", "Data Visualization", "Oracle"],
        "Design": ["Figma"]
    };

    const languages = {
        "English": "Intermediate",
        "Indonesian": "Native",
        "Malay (Bahasa Melayu)": "Native",

    };

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white scroll-mt-24 rounded-3xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* About Me */}
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 border-b border-white/20 pb-3">About Me</h2>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            I'm an IT student at Caltex Riau Polytechnic with good mathematical skills,
                            leadership, and a growing interest in data science—bringing a different
                            perspective to software development and problem-solving.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            My background has trained me in analytical thinking and teamwork,
                            which I now apply to building practical and impactful digital solutions.
                        </p>
                        <button className="mt-4 bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                            View Resume →
                        </button>
                    </div>

                    {/* Skills & Languages */}
                    <div className="space-y-8">
                        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 border-b border-white/20 pb-3">Skills</h2>
                            {Object.entries(skills).map(([category, list]) => (
                                <div key={category} className="mb-6">
                                    <h3 className="text-lg font-semibold text-indigo-400 mb-3">{category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {list.map(item => (
                                            <span
                                                key={item}
                                                className="bg-indigo-500/20 text-indigo-300 py-1 px-4 rounded-full text-sm hover:bg-indigo-500/30 transition"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                            <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-3">Languages</h3>
                            {Object.entries(languages).map(([lang, level]) => (
                                <div
                                    key={lang}
                                    className="flex justify-between items-center text-gray-300 mb-3 border-b border-gray-700/30 pb-2"
                                >
                                    <span>{lang}</span>
                                    <span className="text-sm text-gray-400">{level}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const Experience = () => {
    const experiences = [
        {
            role: "Member of PENDIRISTEK Department",
            company: "HIMA ITSA · Politeknik Caltex Riau",
            period: "Sep 2024 - Present · Pekanbaru, Riau, Indonesia",
            tasks: [
                "Contributed to supporting the academic welfare of Informatics students.",
                "Assisted in solving academic issues through discussions and guidance.",
                "Managed and distributed exam materials as study references.",
                "Organized study classes and technology seminars to broaden student knowledge.",
                "Built teamwork in executing departmental programs.",
            ],
        },
        {
            role: "Volunteer (Public Speaking & Community Engagement)",
            company: "Ikatan Da’i Indonesia (IKADI) · Part-Time",
            period: "Mar 2024 - Present · Rumbai, Riau, Indonesia",
            tasks: [
                "Contributed to community religious and educational activities, including delivering sermons, teaching, and supporting community programs.",
            ],
        },
        {
            role: "Head of Internal Department",
            company: "UKMI Ar-Ruhul Jadid",
            period: "Nov 2024 - Jul 2025 · Pekanbaru, Riau, Indonesia",
            tasks: [
                "Led the Internal Department in maintaining solidarity and harmony among members and management.",
                "Coordinated conflict resolution and built synergy with other campus organizations.",
                "Developed programs to strengthen collaboration, communication, and member bonding.",
                "Enhanced leadership and team management skills through organizational activities.",
            ],
        },
        {
            role: "Member of Internal Department",
            company: "UKMI Ar-Ruhul Jadid",
            period: "Feb 2024 - Oct 2024 · Pekanbaru, Riau, Indonesia",
            tasks: [
                "Built strong relationships among members and management.",
                "Supported internal issue resolution and maintained coordination with other campus organizations.",
                "Developed communication, leadership, and teamwork skills.",
            ],
        },
        {
            role: "Qur’an Teacher (TPA/TPQ)",
            company: "Masjid Al Ikhlas · Full-Time",
            period: "Aug 2022 - Aug 2023 · Kampar, Riau, Indonesia",
            tasks: [
                "Guided children in reading and understanding the Qur’an.",
                "Taught tajwid, daily prayers, and Islamic values.",
                "Fostered discipline and created an engaging, enjoyable learning environment.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white scroll-mt-24 rounded-3xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 border-b border-white/20 pb-4">Experience</h2>

                <div className="relative border-l-2 border-gray-700 pl-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-12 relative">
                            {/* Card */}
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                                <div className="flex items-center gap-3 mb-2">
                                    <BriefcaseIcon className="h-6 w-6 text-indigo-400" />
                                    <h3 className="text-lg sm:text-xl font-semibold">{exp.role}</h3>
                                </div>
                                <p className="text-gray-300">{exp.company}</p>
                                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    {exp.tasks.map((task, i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const SelectedWorks = () => {
    const works = [
        {
            title: "Insurance Claim Fraud Detection – Data Warehouse Project",
            date: "Okt 2024 - Des 2024",
            institution: "Politeknik Caltex Riau",
            desc: [
                "Designed and implemented a data warehouse system to detect potential fraud in insurance claim datasets.",
                "Performed ETL processes (Extract, Transform, Load) to clean and integrate messy competition datasets.",
                "Built fact and dimension tables to support multidimensional analysis.",
                "Applied OLAP operations (slice, dice, drill-down, roll-up) for trend and anomaly detection.",
                "Developed interactive dashboards for visualizing claim patterns and detecting irregularities."
            ],
            tools: ["Python", "SQL", "Tableau Prep", "OLAP"],
            result: "Converted unusable raw datasets into a structured data warehouse that enabled faster fraud detection and provided clear visual insights for decision-making.",
            skills: ["Ilmu Data", "Tableau", "Python", "CSS", "Data Warehousing", "Data Visualization", "HTML", "Kerja tim"]
        },
        {
            title: "CyberHive – Sistem Manajemen Laboratorium JTI PCR",
            date: "Okt 2024 - Des 2024",
            institution: "Politeknik Caltex Riau",
            desc: [
                "Developed a web-based laboratory management system (CyberHive) to replace manual administration with digital processes.",
                "Recorded user attendance in real-time, reducing administrative workload and minimizing errors.",
                "Enabled fast reporting of equipment damage and tracked repair status.",
                "Managed inventory data online with accuracy and real-time monitoring.",
                "Integrated digital logbook for facility condition tracking (monitor, keyboard, mouse, network).",
                "Simplified lab booking with approval workflows and usage history tracking."
            ],
            tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
            result: "Improved efficiency in lab management, reduced manual errors, accelerated repair response times, and optimized lab utilization with transparent, technology-based administration.",
            skills: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS", "Bootstrap", "Team Leadership", "Project Management", "Kerja tim"]
        },
        {
            title: "Redesigning Sikad UIR – Enhancing User Experience through UI/UX",
            date: "Mar 2025 - Jun 2025",
            institution: "Politeknik Caltex Riau",
            desc: [
                "Involved in a software engineering project for Sikad UIR, the academic system at Universitas Internasional Riau.",
                "Simplified navigation and menus for better usability.",
                "Designed a clean, responsive interface optimized for both desktop and mobile.",
                "Enhanced user flows for academic processes like course registration and grade management.",
                "Implemented technical solutions using modern frontend and backend frameworks."
            ],
            result: "Demonstrated that good UI/UX is not just about aesthetics—it’s a crucial part of software engineering that improves user productivity and satisfaction.",
            skills: ["User Interface Design", "Creative Problem Solving", "Software Engineering", "Kerja tim"]
        },
        {
            title: "Turbocharge – The Power Behind Speed",
            date: "Apr 2025 - Jul 2025",
            institution: "Politeknik Caltex Riau",
            desc: [
                "Created a 2-minute short animation introducing turbocharger technology in cars, inspired by the Need for Speed franchise.",
                "Explained history, working mechanism, pros & cons of turbochargers.",
                "Visualized concepts using the iconic BMW M3 GTR."
            ],
            result: "Educated general audiences about automotive technology in a fun, light, and visually engaging way.",
            skills: ["Rendering", "3D Modeling", "Animation"]
        },
        {
            title: "Cafenity Cafe – Online Reservation System",
            date: "Mei 2025 - Jul 2025",
            institution: "Politeknik Caltex Riau",
            desc: [
                "Developed a web-based reservation system that allows customers to book café seats online.",
                "Designed frontend using React with clean, responsive UI.",
                "Integrated Supabase for authentication, DB management, and real-time data storage.",
                "Acted as Project Manager, coordinating tasks and ensuring smooth teamwork."
            ],
            tools: ["React", "Supabase", "JavaScript"],
            result: "Delivered a functional prototype with efficient reservation handling and admin management.",
            skills: ["Front-End Development", "React.js", "Web Design", "Database Design", "Project Management", "Team Leadership", "Kerja tim"]
        }
    ];

    return (
        <section id="work" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white scroll-mt-24 rounded-3xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10">Selected Works</h2>
                <div className="grid grid-cols-1 gap-10">
                    {works.map(work => (
                        <div key={work.title} className="bg-white/5 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{work.title}</h3>
                            <p className="text-gray-400 text-sm mb-2">{work.date} · {work.institution}</p>
                            <ul className="list-disc list-inside text-gray-300 mb-3 space-y-1">
                                {work.desc.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                            {work.result && (
                                <p className="text-green-400 font-semibold mb-3">Result: {work.result}</p>
                            )}
                            {work.tools && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {work.tools.map(tool => (
                                        <span key={tool} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-md text-sm">{tool}</span>
                                    ))}
                                </div>
                            )}
                            <div className="flex flex-wrap gap-2">
                                {work.skills.map(skill => (
                                    <span key={skill} className="bg-white/10 text-gray-200 px-3 py-1 rounded-md text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Certifications = () => {
    const certs = [
        {
            name: "MTCNA – MikroTik Certified Network Associate",
            issuer: "MikroTik",
            date: "Jul 2025"
        },
        {
            name: "CCNA: Switching, Routing, and Wireless Essentials",
            issuer: "Cisco",
            date: "Jan 2025"
        },
    ];

    return (
        <section id="certifications" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white scroll-mt-24 rounded-3xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10">Licenses & Certifications</h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {certs.map(cert => (
                        <div key={cert.name} className="flex items-start">
                            <CertificateIcon />
                            <div>
                                <h3 className="font-bold text-lg">{cert.name}</h3>
                                <p className="text-gray-400">{cert.issuer}</p>
                                <p className="text-sm text-gray-500">Diterbitkan {cert.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const GetInTouch = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white scroll-mt-24 rounded-3xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let’s Connect</h2>
                <p className="text-gray-400 mb-8">
                    Whether you have a project in mind, want to collaborate, or just say hi — I’d love to hear from you.
                </p>
                <div className="space-y-4 text-gray-300">
                    <div className="flex items-center space-x-4">
                        <MailIcon />
                        <a href="mailto:rezkisaputra.work@gmail.com" className="hover:text-white">
                            rezkisaputra.work@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <LinkedinIcon />
                        <a href="https://www.linkedin.com/in/rezki-saputra-ptr" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            LinkedIn
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <GithubIcon />
                        <a href="https://github.com/IkyPtr" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            GitHub
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <InstagramIcon />
                        <a href="https://www.instagram.com/iky_ptr_" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};


const Footer = () => (
    <footer className="text-gray-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} Rezki Saputra. All rights reserved.</p>
        </div>
    </footer>
);



// --- Komponen Aplikasi Utama ---
export default function App() {
    return (
        <div className="bg-[#0B0B0F] min-h-screen font-sans">
            {/* Elemen Latar Belakang Gradien (fixed agar menutupi seluruh halaman) */}
            <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-80 -z-10 pointer-events-none"></div>

            {/* Konten Utama */}
            <div className="relative z-10">
                <Navbar />
                <main>
                    <Hero />
                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {/* Wrapper dengan efek glass */}
                        <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                            <About />
                        </div>
                        <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                            <Experience />
                        </div>
                        <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                            <SelectedWorks />
                        </div>
                        <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                            <Certifications />
                        </div>
                        <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                            <GetInTouch />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
