export default {
  navigationBar: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    experience: "Expérience",
    contact: {
      subLink: "Envoyez-moi un message",
    },
  },

  heroSection: {
    greeting: "Bonjour, Je suis ",
    description:
      "Étudiant en informatique passionné par le développement front-end. En troisième année, j'explore de nouvelles idées et repousse les limites créatives pour offrir des expériences uniques.",
    heroContactCTA: "Contactez Moi",
    heroLearnCTA: "En Savoir Plus",
    postTitle: "Développeur Front-End",
  },

  about: {
    title: "À propos de moi",
    description:
      "Apprenez à me connaître : mon parcours, mes passions et ce qui m’inspire dans la tech.",
    backgroundCard: {
      title: "Mon Parcours",
      firstParagraph:
        "Étudiant en informatique à HEI, passionné par la création de solutions innovantes grâce au code. Mon parcours a commencé par une curiosité pour la technologie et est devenu une passion pour le développement.",
      secondParagraph:
        "Je suis passionné par le développement de sites web où les utilisateurs se sentent à l'aise, créant des interfaces intuitives et faciles à naviguer, en alliant ergonomie et design.",
    },
    activitiesAndInterestsCard: {
      title: "Activités & Centres d'intérêt",
    },
    profilePictureCard: {
      availabilityDescription: "Disponible pour un stage ou une alternance.",
    },
  },

  skills: {
    title: "Compétences Techniques & Frameworks",
    description:
      "Un résumé détaillé de mes compétences techniques et des outils avec lesquels je travaille.",
    cards: {
      programmingLanguagesTitle: "Langages de programmation",
      frameworkAndLibrariesTitle: "Frameworks & Bibliothèque",
      devToolsTitle: "Outils et environnements de programmation",
    },
  },

  projects: {
    title: "Projets réalisés",
    description:
      "Une présentation de mes réalisations récentes, mettant en avant mes compétences en développement front-end et technologies web.",
    firstProject: {
      description:
        "Mon premier site, réalisé pour un examen, utilisant HTML et CSS pour présenter des lieux à Madagascar et ailleurs.",
    },
    secondProject: {
      description:
        "Ce site est conçu pour gérer efficacement la vente de billets pour des événements, comme un spectacle.",
      isFeatured: "Contributeur",
    },
  },

  experience: {
    title: "Parcours académique et professionnel",
    description:
      "Un aperçu de mon parcours académique et de mon expérience professionnelle dans le domaine de la tech.",
    academicPath: {
      title: "Parcours académique",
      cardTitle: "Licence en informatique",
      courseSubject:
        "Programmation orientée objet, Algorithmes et structures de données, Systèmes de gestion de bases de données, Développement web et mobile, Informatique en nuage, Ingénierie logicielle, Analyse de données.",
    },
    professionalPath: {
      title: "Parcours professionnel",
      cardTitle: "Étudiant à la recherche d'un stage / alternance",
      cardSubtitle: "Je cherche ma première opportunité professionnelle",
      cardDescription: "Dans les plus brefs délais",
      cardContent: {
        firstDescription: "Poste en alternance en tant que ",
        postDescription: "Développeur Front-End",
        secondDescription: "Temps de travail : ",
        schedule: "22 heures par semaine",
        lastDescription: "Disponible pour du ",
        firstCondition: "télétravail ",
        keyword: "et ",
        lastCondition: "une disponibilité le week-end",
      },
    },
  },

  contact: {
    title: "Restons en contact",
    description:
      "Toujours partant pour discuter d'opportunités et de projets technologiques.",
    contactForm: {
      title: "Envoyez-moi un message",
      description:
        "Complétez le formulaire ci-dessous, je vous répondrai dans les plus brefs délais.",
      fields: {
        placeholder: {
          email: "votre.email@exemple.com",
          name: "Votre nom",
          subject: "De quoi souhaitez-vous discuter ?",
          message: "Parlez-moi de votre projet ou dites juste 👋",
        },
        label: {
          name: "Votre nom",
          subject: "Objet",
        },
        errors: {
          fullName: "Au moins 5 caractères",
          emailAddress: "Adresse e-mail invalide",
          subject: "Au moins 10 caractères",
          message: "Au moins 30 caractères",
        },
      },
      successfullySendToast: {
        title: "Message envoyé avec succès !",
        description: "Merci pour votre message. Je vous répondrai bientôt.",
      },
      failSendingToast: {
        title: "Oups !",
        description:
          "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard.",
      },
      sendButton: {
        title: "Envoyer",
      },
    },
    contactDetails: {
      title: "Informations de contact",
      description: "N'hésitez pas à me contacter par l'un de ces moyens",
      location: "Localisation",
    },
    socialNetworks: {
      title: "Suivez-moi",
      description:
        "Retrouvez-moi sur les réseaux sociaux et découvrez mes réalisations récentes",
    },
    resume: {
      title: "Vous souhaitez voir mon CV ?",
      buttonContent: "Téléchargez mon CV",
    },
  },

  footer: {
    inspiration: "Inspiré par Radiant-Wizard, merci à lui 🙏",
    description:
      "© 2025 Miharisoa. Conçu avec React, Next.js, ShadCN UI et Tailwind CSS.",
  },
} as const;
