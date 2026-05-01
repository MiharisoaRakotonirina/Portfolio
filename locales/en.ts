export default {
  navigationBar: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: {
      subLink: "Feel free to contact me",
    },
  },

  heroSection: {
    greeting: "Hi, I'm",
    description:
      "An enthusiastic computer science student focused on crafting delightful front-end experiences. Now in my third year, exploring bold ideas and expanding creative possibilities in tech.",
    heroContactCTA: "Get In Touch",
    heroLearnCTA: "Learn More",
    postTitle: "Front-End developer",
  },

  about: {
    title: "About Me",
    description:
      "Get to know me more — my journey, interests, and what fuels my passion for tech.",
    backgroundCard: {
      title: "My Background",
      firstParagraph:
        "I'm a third-year Computer Science student at HEI, driven by a passion for crafting innovative solutions through code. My journey began with curiosity about technology and has grown into a true love for development.",
      secondParagraph:
        "I'm passionate about developing websites where users feel comfortable, creating interfaces that are intuitive and easy to navigate, focusing on both usability and design.",
    },
    activitiesAndInterestsCard: {
      title: "Activities & Interests",
    },
    profilePictureCard: {
      availabilityDescription: "Available for work-study.",
    },
  },

  skills: {
    title: "Technical Skills & Frameworks",
    description:
      "A detailed summary of my technical expertise and the tools I work with.",
    cards: {
      programmingLanguagesTitle: "Programming Languages",
      frameworkAndLibrariesTitle: "Frameworks & Libraries",
      devToolsTitle: "Developer Tools",
    },
  },

  projects: {
    title: "Completed Projects",
    description:
      "A showcase of my recent work, demonstrating my skills in front-end development and web technologies.",
    firstProject: {
      description:
        "A showcase website presenting tourist destinations in Madagascar and beyond, built with HTML and CSS.",
    },
    secondProject: {
      description:
        "An event ticketing application built as a team project, handling online ticket management and sales.",
      isFeatured: "Featured",
    },
  },

  experience: {
    title: "Education & Professional Path",
    description:
      "A summary of my academic path and professional experience in the tech sector.",
    academicPath: {
      title: "Academic background",
      cardTitle: "Bachelor's Degree in Computer Science",
      courseSubject:
        "Object-Oriented Programming, Algorithms and Data Structures, Database Systems, Web and Mobile Development, Cloud Computing,Software Engineering, Data Analysis.",
    },

    professionalPath: {
      title: "Professional background",
      cardTitle: "Student Seeking Internship",
      cardSubtitle: "Looking for my first professional opportunity",
      cardDescription: "At the earliest possible time",
      cardContent: {
        firstDescription: "Work-study position as a ",
        postDescription: "Front-End Developer",
        secondDescription: "Schedule : ",
        schedule: "22 hours per week",
        lastDescription: "Open to ",
        firstCondition: "remote work ",
        keyword: "and ",
        lastCondition: "weekend availability",
      },
      internshipCard: {
        cardTitle: "Or a Full-Time Internship",
        cardSubtitle: "Minimum 3 months",
        cardContent: {
          firstDescription: "Internship position as a ",
          postDescription: "Front-End Developer",
          secondDescription: "Schedule : ",
          schedule: "Full-time",
          lastDescription: "Open to ",
          firstCondition: "remote work ",
          keyword: "and ",
          lastCondition: "weekend availability",
        },
      },
    },
  },

  contact: {
    title: "Let's connect",
    description: "Always eager to discuss opportunities and tech projects.",
    contactForm: {
      title: "Send Me a Note",
      description: "Complete the form below and I will reply shortly.",
      fields: {
        placeholder: {
          email: "your.email@example.com",
          name: "Your name",
          subject: "What you would like to discuss ? ",
          message: "Tell me about your project or just say 👋",
        },
        label: {
          name: "Your name",
          subject: "Subject",
        },
        errors: {
          fullName: "At least 5 characters",
          emailAddress: "Invalid email address",
          subject: "At least 10 characters",
          message: "At least 30 characters",
        },
      },
      successfullySendToast: {
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      },
      failSendingToast: {
        title: "An error occurred",
        description:
          "There is an error sending your message. Please try again later",
      },
      catchErrorToast: {
        title: "An error occurred",
        description:
          "There was a problem sending your message. Please try again later. If the issue persists, feel free to contact me directly.",
      },
      sendButton: {
        title: "Send Message",
      },
    },
    contactDetails: {
      title: "Contact Details",
      description: "Don't hesitate to contact me via any of these methods",
      location: "Location",
    },
    socialNetworks: {
      title: "Follow me",
      description: "Connect with me on social network and check my latest work",
    },
    resume: {
      title: "Want to check out my resume?",
      buttonContent: "Download my CV",
    },
  },

  footer: {
    inspiration: "Inspired by Radiant-Wizard , thanks to him 🙏",
    description:
      "© 2026 Miharisoa. Built with React, Next.js, ShadCN UI and Tailwind CSS.",
  },

  notFound: {
    title: "Page Not Found 😕",
    message: "Oops! The page you're looking for doesn't exist.",
    returnHome: "Back to the homepage",
  },
} as const;
