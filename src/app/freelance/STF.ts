export const STF = {
  id: "stf",
  projectName: "STF",
  titleText: "STF STF STF STF STF STF STF STF STF STF STF ",
  headerMockup: "../../assets/stf/iphone_tilt.png",
  headerInfo: [
    { title: "SERVICES", description: ["UI/UX Design", "Developer", "Branding + Marketing"] },
    { title: "INDUSTRY / ROLE", description: ["Freelance", "Sole Designer", "Sole Developer"] },
    { title: "TECH STACK", description: ["Angular", "Figma"] },
  ],
  bg: ["#ff7e5f", "#feb47b"],
  fg: "#333547",
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
          template: "sub-section",
          title: "OVERVIEW",
          description: [
            "Spieles Troutwine and Fout (STF) is an established insurance group with a legacy of providing dependable coverage for over 60 years. In 2021, three separate insurance agencies merged to form STF, marking a new chapter in their history. I was brought on board to craft the brand identity, design the website, and manage the Google Ads campaign for the newly formed entity. From conceptualizing the logo and color palette to designing the website, every aspect of STF's brand was meticulously crafted by me to reflect their commitment to excellence.",
          ],
        },
      ],
      preview: {
        screenshot: "../../assets/stf/app_preview.png",
        logo: "../../assets/stf/logo.png",
        url: "https:///www.stf-ins-group.com",
      },
    },
    {
      template: "mobile-section",
      title: "MOBILE FIRST DESIGN",
      description:
        "Great UI/UX design is all about creating seamless, intuitive experiences that delight users. In today’s fast-paced world, mobile-first design is a game-changer—starting with the smallest screens ensures that your design is not only sleek and responsive but also prioritizes the essentials. When you get it right on mobile, you’re set to captivate users across all devices.",
      imgs: [
        "../../assets/stf/iphone_design_1.png",
        "../../assets/stf/iphone_design_2.png",
        "../../assets/stf/iphone_design_3.png",
      ],
    },
    {
      template: "design-marketing",
      title: "DESIGN + MARKETING",
      description: [
        "A serious challenges changing my mindset from sleek modern design to elegant and timeless which was the requirement for this wedding site. Maddie wanted a simple and elegant website that represented her business and quality of work for day of coordinating and events.",
        "Here are some aspects of the design that were used. A typeface that screams elegant with a color scheme that is as simple as it gets.",
      ],
      fontFamily: "helios-antique",
      fontName: "HELIOS ANTIQUE",
      colorScheme: [
        { colorName: "BLUE", colorHex: "#1D243C" },
        { colorName: "ORANGE", colorHex: "#EE6C23" },
      ],
      tile2Title: "LESS IS MORE",
      tile2Description: "Simplifying the design to let Maddies work show through images",
      tile2Img: "../../assets/stf/iphone_design_focus.png",
    },
    {
      template: "sub-section",
      title: "JOURNAL",
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
