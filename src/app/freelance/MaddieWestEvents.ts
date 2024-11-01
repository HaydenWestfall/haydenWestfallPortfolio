export const MaddieWestEvents = {
  id: "maddieWestEvents",
  projectName: "MADDIE WEST EVENTS",
  titleText: "MADDIE WEST EVENTS MADDIE WEST EVENTS MADDIE WEST EVENTS",
  headerMockup: "../../assets/maddieWestEvents/iphone_tilt.png",
  headerInfo: [
    { title: "SERVICES", description: ["UI/UX Design", "Branding + Marketing", "Customer Communication"] },
    { title: "INDUSTRY / ROLE", description: ["Freelance", "Sole Designer", "Sole Developer"] },
    { title: "TECH STACK", description: ["Javascript", "HTML / SCSS", "Custom Webpack Configuration"] },
  ],
  bg: ["#222222", "#323232"],
  fg: "#ffffff",
  sections: [
    {
      template: "project-header",
      title: "OVERVIEW",
      disclaimer: false,
      tableOfContents: [
        { id: "overview", label: "OVERVIEW" },
        { id: "mobile", label: "MOBILE DESIGN" },
        { id: "design_marketing", label: "DESIGN + MARKETING" },
        { id: "conclusion", label: "CONCLUSION" },
      ],
      subSections: [
        {
          id: "overview",
          template: "sub-section",
          description: [
            "Branding, UI/UX Design, Prototyping, Implementation, and Deployment. Meet Maddie West Events, a new wedding and event coordination company established in 2023. Maddie West Events is a frontend webpage built with Javscript, HTML, SCSS, and Webpack. Madison was in need of a “modern, timeless, and Refined” website that perfectly captured her brand and overall style.",
          ],
        },
      ],
      preview: {
        screenshot: "../../assets/maddieWestEvents/app_preview.png",
        logo: "../../assets/maddieWestEvents/logo.png",
        url: "https:///www.maddiewestevents.com",
      },
    },
    // {
    //   template: "mockup",
    //   img: "../../assets/maddieWestEvents/mockup.jpeg",
    // },
    {
      template: "mobile-section",
      title: "DESIGN CHALLENGES",
      description:
        "A serious challenge changing my mindset from sleek modern design to elegant and timeless which was the requirement for this wedding site. Maddie wanted a simple and elegant website that represented her business and quality of work for day of coordinating and events.",
      imgs: [
        "../../assets/maddieWestEvents/iphone_design_1.png",
        "../../assets/maddieWestEvents/iphone_design_2.png",
        "../../assets/maddieWestEvents/iphone_design_3.png",
      ],
    },
    // {
    //   template: "macbook",
    //   img: "../../assets/maddieWestEvents/macbook_home.png",
    // },
    {
      template: "design-marketing",
      title: "DESIGN + MARKETING",
      description: [
        "A serious challenge changing my mindset from sleek modern design to elegant and timeless which was the requirement for this wedding site. Maddie wanted a simple and elegant website that represented her business and quality of work for day of coordinating and events.",
        "Here are some aspects of the design that were used. A typeface that screams elegant with a color scheme that is as simple as it gets.",
      ],
      fontFamily: "didot-italic",
      fontName: "DIDOT-ITALIC",
      colorScheme: [
        { color: "white", colorName: "WHITE", colorHex: "#FFFFFF" },
        { color: "black", colorName: "BLACK", colorHex: "#000000" },
      ],
      tile2Title: "LESS IS MORE",
      tile2Description: "Simplifying the design to let Maddies work show through images",
      tile2Img: "../../assets/maddieWestEvents/iphone_design_focus.png",
    },
    {
      id: "conclusion",
      template: "sub-section",
      title: "CLOSING THOUGHTS",
      description: [
        "Overall Maddie West Events was an extremely eye opening project for me from a design and implementation aspect. From a design aspect, Overall Maddie West Events was an extremely eye opening project for me from a design and implementation aspect. From a design aspect,",
        "Overall Maddie West Events was an extremely eye opening project for me from a design and implementation aspect. From a design aspect, Overall Maddie West Events was an extremely eye opening project for me from a design and implementation aspect. From a design aspect,",
        "Overall Maddie West Events was an extremely eye opening project for me from a design and implementation aspect. From a design aspect, Overall Maddie West Events was an extremely eye opening project for me from a design and implementation aspect. From a design aspect,",
      ],
    },
    {
      template: "next-project",
      nextProject: [
        {
          label: "GEARHEAD",
          description:
            "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
          role: "Technical Lead | Commercial",
          link: "/work/gearHead",
          showcase: "../../assets/stf/app_showcase.png",
          hover: false,
        },
      ],
    },
  ],
};
