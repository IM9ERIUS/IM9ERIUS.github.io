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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Please click PDF for a digital version of my CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-return-to-study-and-goals-for-2026",
        
          title: "Return to Study and Goals for 2026",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-creation-of-the-im9erius-github-page-amp-amp-first-ctf-walkthrough",
          title: 'Creation of the IM9ERIUS Github Page &amp;amp;amp; First CTF Walkthrough!',
          description: "",
          section: "News",},{id: "news-return-to-study-and-completion-of-projects",
          title: 'Return to study and completion of projects!',
          description: "",
          section: "News",},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-wazuh-home-lab-installation",
          title: 'Wazuh Home Lab Installation',
          description: "Walkthrough of the creation of my SIEM homelab",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-honey-pot-installation-cowrie",
          title: 'Honey Pot Installation (Cowrie)',
          description: "Blue Team Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Cowrie_Install/";
            },},{id: "projects-honey-pot-demonstration-cowrie",
          title: 'Honey Pot Demonstration (Cowrie)',
          description: "Walkthrough of Cowrie useage",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Cowrie_Walkthrough/";
            },},{id: "projects-htb-sherlock-packet-puzzle",
          title: 'HTB Sherlock Packet Puzzle',
          description: "Blue Team CTF",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Packet_Puzzle/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%79%61%6E%64%61%76.%62%72%6F%77%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/IM9ERIUS", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ryan-brown-549a5a241", "_blank");
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
