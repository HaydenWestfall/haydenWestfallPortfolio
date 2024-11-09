export const MissLisaBooks = {
  id: "missLisaBooks",
  index: 5,
  projectName: "MISS LISA BOOKS",
  titleText: "MISS LISA BOOKS MISS LISA BOOKS MISS LISA BOOKS MISS LISA BOOKS",
  headerMockup: "../../assets/missLisaBooks/iphone_tilt.webp",
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
            "Miss Lisa Books is platform for children with a disability who refuse to allow that particular disability to interfere with advancing in life. Lisa, an inspiring entrepreneur, needed a website to share her impactful message and showcase her work. I created a clean, user-friendly single-page application that highlights Lisa's mission, the products she offers, and the essence of her platform.",
          ],
        },
      ],
      preview: {
        screenshot: "../../assets/missLisaBooks/app_preview.webp",
        logo: "../../assets/missLisaBooks/logo.webp",
        url: "https:///www.missLisaBooks.com",
      },
    },
    {
      template: "mobile-section",
      title: "TECHNOLOGIES",
      description: [
        "For this project, I used Angular, a framework I’m highly experienced with, to build a dynamic and responsive site. To enhance the user experience, I incorporated GSAP for seamless animations and Lenis for smooth scrolling. These libraries played a key role in creating an engaging and fluid interaction. Additionally, I optimized all images on the page to ensure fast load times, providing a smooth and efficient experience for users.",
      ],
      imgs: [
        "../../assets/missLisaBooks/iphone_design_1.webp",
        "../../assets/missLisaBooks/iphone_design_2.webp",
        "../../assets/missLisaBooks/iphone_design_3.webp",
      ],
    },
    {
      template: "design-marketing",
      title: "DESIGN",
      description: [
        "Designing for Miss Lisa Books was a departure from my usual projects, which focused on CRUD editor applications and modern, sleek websites. This project challenged me to think creatively and incorporate playful fonts, vibrant colors, and engaging transitions that would resonate with children and reflect the spirit of Miss Lisa’s brand. It was both a rewarding challenge to create a design that is lighthearted yet professional, capturing the essence of Miss Lisa Books.",
        "Choosing the right font was particularly difficult. Chelse-Market, with its playful, handwritten, and slightly imperfect style, was a bold choice I wouldn’t typically consider for other projects. However, it perfectly complemented the brand’s whimsical and child-oriented theme, making it a key element in the design’s success.",
      ],
      fontFamily: "chelsea-market",
      fontName: "CHELSEA MARKET",
      colorScheme: [
        { color: "green", colorName: "GREEN", colorHex: "#537864" },
        { color: "white", colorName: "WHITE", colorHex: "#FFFFFF" },
      ],
      tile2Title: "LESS IS MORE",
      tile2Description: "Simplifying the design to let Maddies work show through images",
      tile2Img: "../../assets/missLisaBooks/iphone_design_focus.webp",
    },
    {
      template: "sub-section",
      title: "CLOSING THOUGHTS",
      description: [
        "Working on Miss Lisa Books was an exciting and rewarding project that allowed me to step outside my usual design and development work. By combining my expertise with Angular and leveraging tools like GSAP and Lenis, I was able to create a dynamic, user-friendly website that brings Lisa’s vision to life. The design process posed a unique challenge, as it required a shift towards a playful, child-focused aesthetic while still maintaining professionalism. From choosing the perfect font to incorporating vibrant colors and smooth animations, every element was carefully crafted to reflect the spirit of Miss Lisa’s brand. The result is a website that not only showcases the platform’s mission but also provides an engaging and enjoyable experience for users of all ages.",
      ],
    },
  ],
};
