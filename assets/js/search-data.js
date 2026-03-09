// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Please find below the list of my research publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research and innovation projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses, lectures, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "I had great honor to collaborate with and/or mentor many curious students!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Below is a summary of my resume. You can also download the full version (currently only available in French) by clicking on the PDF download button at the top of the page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-earned-my-french-engineering-diploma-msc-from-telecom-sudparis-with-high-honors-ranked-4th-out-of-220",
          title: 'Earned my french engineering diploma (MSc) from Telecom SudParis with high honors, ranked...',
          description: "",
          section: "News",},{id: "news-started-a-new-position-as-doctoral-researcher-at-telecom-sudparis-in-the-samovar-lab-and-the-armedia-team",
          title: 'Started a new position as Doctoral Researcher at Telecom SudParis in the SAMOVAR...',
          description: "",
          section: "News",},{id: "news-awareded-in-the-young-researcher-contest-at-ieee-ehb-conference",
          title: 'Awareded in the Young Researcher Contest at IEEE EHB conference.',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-esmac-2024-in-oslo-norway-an-enhanced-characterization-of-gait-deviations-in-hemiparesis-by-combining-knee-and-ankle-kinematics",
          title: 'Paper accepted at ESMAC 2024 in Oslo, Norway: An enhanced characterization of gait...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-ieee-ipta-2024-in-rabat-morocco-gait-deviation-assessment-from-signal-to-image-analysis",
          title: 'Paper accepted at IEEE IPTA 2024 in Rabat, Morocco: Gait Deviation Assessment: From...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-in-the-computers-in-biology-and-medicine-journal-gait-asymmetry-assessment-through-eigen-gait-components-on-dissimilarity-maps-and-a-novel-gait-quality-measure-for-characterizing-pathological-gait-based-on-hidden-markov-models",
          title: 'Two papers accepted in the Computers in Biology and Medicine journal: Gait asymmetry...',
          description: "",
          section: "News",},{id: "news-i-obtained-my-phd-in-signal-image-automation-and-robotics-from-the-institut-polytechnique-de-paris-prepared-at-telecom-sudparis",
          title: 'I obtained my PhD in Signal, Image, Automation, and Robotics from the Institut...',
          description: "",
          section: "News",},{id: "news-started-a-new-position-as-postdoctoral-researcher-in-the-scool-team-at-centre-inria-de-l-université-de-lille-france-led-by-prof-philippe-preux",
          title: 'Started a new position as Postdoctoral Researcher in the Scool team at Centre...',
          description: "",
          section: "News",},{id: "news-gave-an-invited-talk-at-the-scool-team-seminar-in-lille-france-spatiotemporal-characterization-of-gait-kinematics-in-motor-impairments",
          title: 'Gave an invited talk at the Scool team seminar in Lille, France —...',
          description: "",
          section: "News",},{id: "news-started-a-new-position-as-associate-professor-at-imt-nord-europe-within-the-hide-division-of-ceri-sn",
          title: 'Started a new position as Associate Professor at IMT Nord Europe, within the...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%6F%72%65%6E%7A%6F.%68%65%72%6D%65%7A@%69%6D%74-%6E%6F%72%64-%65%75%72%6F%70%65.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lorenzohermez", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/lorenzo-hermez", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-5974-9428", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Lorenzo-Hermez/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qdDOXpYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
