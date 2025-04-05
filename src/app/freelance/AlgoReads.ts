export const AlgoReads = {
  id: "algoReads",
  index: 3,
  projectName: "ALGOREADS",
  titleText: "ALGOREADS ALGOREADS ALGOREADS ALGOREADS ALGOREADS ALGOREADS ALGOREADS ALGOREADS ALGOREADS ALGOREADS",
  headerMockup: "../../assets/algoReads/mockup.png",
  headerInfo: [
    { title: "SERVICES", description: ["Hobby project", "Educational"] },
    { title: "INDUSTRY / ROLE", description: ["Home project", "Sole Developer"] },
    { title: "TECH STACK", description: ["Typescript", "React", "Tailwind CSS"] },
  ],
  bg: ["#327ef6", "#327ef6"],
  fg: "#ffffff",
  sections: [
    {
      template: "project-header",
      title: "OVERVIEW",
      subSections: [
        {
          id: "overview",
          template: "sub-section",
          title: "OVERVIEW",
          description: [
            "AlgoReads is a sleek, modern e-commerce platform designed to showcase my expertise in React and TypeScript. Built as a personal project to test the limits of my React knowledge, AlgoReads simulates a fully functional online bookstore, complete with user authentication, shopping cart management, and a streamlined checkout experience.",
            "Unlike my previous projects, AlgoReads was a self-driven hobby project, giving me complete creative freedom over the design and development process. Built entirely with React, it allowed me to deepen my understanding of state management, component-based architecture, and hooks in a real-world scenario. This hands-on experience reinforced my ability to design scalable frontend applications while refining my approach to clean, maintainable code.",
          ],
        },
      ],
      preview: {
        screenshot: "../../assets/algoReads/app_preview.webp",
        logo: "../../assets/algoReads/logo.webp",
        url: "https://algoreads.netlify.app/",
      },
    },
    {
      template: "mobile-section",
      title: "EXPANDING MY SKILLS",
      description: [
        "I’ve always believed that the best way to grow as a developer is to step outside my comfort zone and learn something new. With AlgoReads, I took it upon myself to dive into React and Tailwind CSS—two technologies I hadn’t used before. Earning my React certification gave me a strong foundation, but building a real project solidified my understanding and allowed me to apply best practices in a hands-on way.",
        "While I’m glad I learned Tailwind CSS and now understand how it works, I found that I prefer the flexibility and readability of traditional CSS over the utility-first approach and long class names. Still, gaining firsthand experience with Tailwind was valuable, as it expanded my perspective on different styling methodologies and gave me another tool I can use when a project calls for it.",
        "Taking on this challenge reinforced my commitment to continuous learning and adaptability—skills that are just as important as technical knowledge in software development.",
      ],
      imgs: [
        "../../assets/algoReads/iphone_design_1.webp",
        "../../assets/algoReads/iphone_design_2.webp",
        "../../assets/algoReads/iphone_design_3.webp",
      ],
    },
    {
      id: "conclusion",
      template: "sub-section",
      title: "CLOSING THOUGHTS",
      description: [
        "Building AlgoReads was a rewarding experience that pushed me to expand my skill set and explore new technologies. Taking on React and Tailwind CSS gave me valuable hands-on experience, reinforcing both my strengths and my preferences when it comes to frontend development. While I enjoyed working with React and solidifying my understanding of component-based architecture, I also discovered that I prefer traditional CSS over Tailwind’s utility-first approach.",
        "More importantly, this project reaffirmed my belief in continuous learning. By stepping outside my usual workflow and challenging myself with new tools, I gained a deeper understanding of modern frontend development while sharpening my problem-solving skills. AlgoReads is more than just a portfolio piece—it’s a testament to my adaptability, curiosity, and dedication to always improving as a developer.",
      ],
    },
  ],
};
