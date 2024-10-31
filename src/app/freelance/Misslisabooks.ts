export const MissLisaBooks = {
  projectName: "MISS LISA BOOKS",
  titleText: "MISS LISA BOOKS MISS LISA BOOKS MISS LISA BOOKS MISS LISA BOOKS",
  headerMockup: "../../assets/missLisaBooks/iphone_tilt.png",
  headerInfo: [
    { title: "SERVICES", description: ["UI/UX Design", "Branding + Marketing", "Customer Communication"] },
    { title: "INDUSTRY / ROLE", description: ["Freelance", "Sole Designer", "Sole Developer"] },
    { title: "TECH STACK", description: ["Javascript", "HTML / SCSS", "Custom Webpack Configuration"] },
  ],
  bg: ["#537864", "#1F3A2B"],
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
          template: "sub-section",
          title: "OVERVIEW",
          description: [
            "I developed a fun and playful, single-page website for Miss Lisa Books, a children’s book author dedicated to inspiring young readers. The site is designed to be engaging and informative, featuring an introduction to Miss Lisa and her books, a section highlighting the core pillars of her mission—empowering individuals with disabilities, celebrating intervention specialists, and promoting literacy for all children. The layout ensures a seamless browsing experience with easy access to purchase links for the books. This project reflects my ability to create vibrant and user-friendly designs tailored to the needs of clients in the creative and educational sectors.",
          ],
        },
      ],
      preview: {
        screenshot: "../../assets/missLisaBooks/app_preview.png",
        logo: "../../assets/missLisaBooks/logo.png",
        url: "https:///www.missLisaBooks.com",
      },
    },
    {
      template: "mobile-section",
      title: "MOBILE FIRST DESIGN",
      description:
        "I always like to starts simple with mobile designs and build up from there. Here are a few snippets of Maddie West Events on mobile.",
      imgs: [
        "../../assets/missLisaBooks/iphone_design_1.png",
        "../../assets/missLisaBooks/iphone_design_2.png",
        "../../assets/missLisaBooks/iphone_design_3.png",
      ],
    },
    {
      template: "design-marketing",
      title: "DESIGN + MARKETING",
      description: [
        "Working on Miss Lisa Books presented a unique challenge, as it was a departure from my previous experience designing CRUD editor applications and modern/sleek websites. This project required me to shift my focus and think creatively about how to incorporate playful fonts, vibrant colors, and engaging transitions that would appeal to children and reflect the spirit of Miss Lisa's brand. It was both a challenge and a rewarding experience to craft a design that feels lighthearted yet professional, successfully capturing the essence of Miss Lisa Books.",
        "Choosing the right font was particularly challenging. Chelse-Market, with its playful, handwritten, and slightly imperfect style, was not something I would have considered for my previous projects. However, it perfectly complemented the brand's playful nature and the child-oriented theme of the website. It was both a challenge and a rewarding experience to craft a design that feels lighthearted yet professional, successfully capturing the essence of Miss Lisa Books.",
      ],
      fontFamily: "chelsea-market",
      fontName: "CHELSEA MARKET",
      colorScheme: [
        { color: "green", colorName: "GREEN", colorHex: "#537864" },
        { color: "white", colorName: "WHITE", colorHex: "#FFFFFF" },
      ],
      tile2Title: "LESS IS MORE",
      tile2Description: "Simplifying the design to let Maddies work show through images",
      tile2Img: "../../assets/missLisaBooks/iphone_design_focus.png",
    },
    {
      template: "sub-section",
      title: "CLOSING THOUGHTS",
      description: [
        "Overall, Miss Lisa Books was a fun side project that unlocked a new level of creativity for me. I’m incredibly grateful for the opportunity, as it was the first website I launched as a freelance developer. Though the project was short and sweet, being a single-page application, it will always hold a special place in my heart.",
      ],
    },
    {
      template: "next-project",
      title: "GEARHEAD",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Technical Lead | Commercial",
      link: "/work/gearHead",
      showcase: "../../assets/stf/app_showcase.png",
      index: 2,
      hover: false,
    },
  ],
};
