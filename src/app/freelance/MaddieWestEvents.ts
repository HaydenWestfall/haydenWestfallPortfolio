export const MaddieWestEvents = {
  id: "maddieWestEvents",
  index: 1,
  projectName: "MADDIE WEST EVENTS",
  titleText: "MADDIE WEST EVENTS MADDIE WEST EVENTS MADDIE WEST EVENTS",
  headerMockup: "../../assets/maddieWestEvents/iphone_tilt.webp",
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
            "Maddie West Events, a new wedding and event coordination company established in 2023. This project was both challenging and rewarding. Up until now, my career had focused primarily on designing analytic CRUD applications and modern, functional websites. Maddie West Events was a complete departure from my usual style and prior experience. Maddie was deeply involved in the design process and had a clear vision for what she wanted her website to embody.",
            "This project also marked my first time building a site from scratch using vanilla JavaScript, HTML, and SCSS. I developed a custom Webpack configuration to optimize the build and incorporated the Lenis and GSAP libraries, which I’ve since used in many other projects. Both tools added a dynamic, visually engaging feel to the site that really brought Maddie's vision to life.",
          ],
        },
      ],
      preview: {
        screenshot: "../../assets/maddieWestEvents/app_preview.webp",
        logo: "../../assets/maddieWestEvents/logo.webp",
        url: "https:///www.maddiewestevents.com",
      },
    },
    {
      template: "mobile-section",
      title: "TECHNOLOGIES",
      description: [
        "For this project, I chose to work with vanilla JavaScript, HTML, and SCSS, building everything from the ground up with a custom Webpack configuration. This approach was a significant undertaking compared to using a framework like React or Angular, which handle many aspects of the setup and build process automatically.",
        "Developing without a framework gave me a deep understanding of how web applications are structured and optimized, from bundling assets to managing dependencies, but it also highlighted why frameworks exist—they save time and reduce complexity. While this experience was invaluable for learning about the underlying mechanics of modern web development, it's not something I’d recommend unless there’s a specific need. Frameworks are popular for good reason; they streamline development and allow you to focus on building features, rather than reinventing the wheel.",
      ],
      imgs: [
        "../../assets/maddieWestEvents/iphone_design_1.webp",
        "../../assets/maddieWestEvents/iphone_design_2.webp",
        "../../assets/maddieWestEvents/iphone_design_3.webp",
      ],
    },
    {
      template: "design-marketing",
      title: "DESIGN",
      description: [
        "In designing Maddie West Events, I aimed for a minimalistic aesthetic that would let Maddie’s work speak through the imagery. I chose the Didot Italic font, which brought an elegant, cursive-like touch without being overly ornate. Its refined look perfectly complemented the clean, simple layout, adding sophistication to the overall design while keeping the focus on Maddie’s visuals. This approach allowed the website to feel both modern and timeless, creating a subtle yet impactful backdrop for her portfolio.",
        "Mobile-first design is a powerful approach that prioritizes streamlined, essential elements for smaller screens, creating a clean and intuitive user experience that scales naturally to larger devices. For Maddie West Events, starting with a mobile-first mindset helped me craft a minimalist, focused design that reflected the brand’s essence without clutter. This approach made it easier to expand to larger screens and ensured a smooth, scalable development process.",
      ],
      fontFamily: "didot-italic",
      fontName: "DIDOT-ITALIC",
      colorScheme: [
        { color: "white", colorName: "WHITE", colorHex: "#FFFFFF" },
        { color: "black", colorName: "BLACK", colorHex: "#000000" },
      ],
      tile2Title: "LESS IS MORE",
      tile2Description: "Simplifying the design to let Maddies work show through imagery.",
      tile2Img: "../../assets/maddieWestEvents/iphone_design_focus.webp",
    },
    {
      id: "conclusion",
      template: "sub-section",
      title: "CLOSING THOUGHTS",
      description: [
        "Working on Maddie West Events was a uniquely challenging and rewarding experience that pushed me to expand my skills in both design and development. Embracing a mobile-first approach allowed me to create a clean, focused layout that gracefully adapted to all screen sizes, ensuring a seamless user experience. The design process was equally intentional; selecting the Didot Italic font added a touch of elegance, allowing Maddie’s work to shine through with minimal distraction.",
        "Building this project from scratch with vanilla JavaScript, HTML, and SCSS—without relying on a framework—was a valuable learning journey. By setting up a custom Webpack configuration, I gained a solid understanding of the intricacies involved in structuring and optimizing web applications. However, this experience also underscored the efficiency and convenience that frameworks like React and Angular bring to a project. While developing from the ground up provided a wealth of knowledge, frameworks certainly have their place in making development faster and more manageable.",
        "Ultimately, this project broadened my perspective on both design and development, reinforcing the importance of balancing creativity with functionality. It was a rewarding journey that taught me new skills and strengthened my appreciation for the tools that make building modern applications efficient and enjoyable.",
      ],
    },
  ],
};
