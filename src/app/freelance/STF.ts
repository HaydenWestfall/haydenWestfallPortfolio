export const STF = {
  id: "stf",
  index: 4,
  projectName: "STF",
  titleText:
    "STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF STF",
  headerMockup: "../../assets/stf/iphone_tilt.webp",
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
            "Spieles Troutwine and Fout (STF) is an established insurance group with a legacy of providing dependable coverage for over 60 years. In 2021, three separate insurance agencies merged to form STF, marking a new chapter in their history. I was brought on board to craft the brand identity, design the website, and manage a Google Ad campaign for the newly formed entity.",
            "To streamline development and dedicate more time to STF's brand identity and digital strategy, I chose to build the site using Angular, a familiar framework I knew would support the site's technical needs while allowing me to grow in other areas. This approach enabled me to focus on creating a cohesive logo, structuring the website for optimal SEO, and managing a targeted Google Ads campaign. By leveraging Angular, I ensured a smooth and efficient process, leaving me free to refine STF's online presence and help establish them as a trusted, modernized brand in the insurance market.",
          ],
        },
      ],
      preview: {
        screenshot: "../../assets/stf/app_preview.webp",
        logo: "../../assets/stf/logo.webp",
        url: "https:///www.stf-ins-group.com",
      },
    },
    {
      template: "mobile-section",
      title: "TECHNOLOGIES",
      description: [
        'When designing the STF website, I went with a familiar technology in Angular. The only requirement from the client was to include an element of animation or movement on the landing page to capture users\' attention. To meet this, I implemented a dynamic animation that brings the hero text into view while simultaneously drawing an SVG circle around the words "low cost." This subtle yet engaging animation serves to highlight the company’s key value proposition.',
        "Beyond that, the website itself is modern, with a clean layout and intuitive navigation. A clear call-to-action button is strategically placed throughout the site, guiding visitors to easily request a quote for their insurance needs, ensuring that the site is both visually appealing and conversion-focused.",
      ],
      imgs: [
        "../../assets/stf/iphone_design_1.webp",
        "../../assets/stf/iphone_design_2.webp",
        "../../assets/stf/iphone_design_3.webp",
      ],
    },
    {
      template: "design-marketing",
      title: "DESIGN",
      description: [
        "For STF’s brand identity, I explored multiple logo concepts, ultimately collaborating with the team to select a clean, modern “STF” logo that emphasized simplicity and professionalism. This fresh, minimalistic design was not only versatile but also helped the brand appeal to a younger audience, setting them apart from the dated legacy logo. The new logo was designed to be adaptable across digital and physical materials, enhancing its impact on various marketing channels. To showcase its potential, I developed mockups for branded items such as t-shirts, business cards, and other promotional materials, helping the company visualize the logo’s presence across different platforms.",
        "In terms of digital marketing, I crafted and managed a Google Ads campaign that maximized STF’s limited budget by focusing on local targeting and highly relevant keywords. With a fully SEO-optimized website and precise ad targeting, the campaign successfully drove more traffic to the new site, outperforming the traffic of their previous website. This strategic approach not only increased visibility within their target market but also demonstrated the effectiveness of cohesive branding and digital strategy.",
      ],
      fontFamily: "helios-antique",
      fontName: "HELIOS ANTIQUE",
      colorScheme: [
        { colorName: "BLUE", colorHex: "#1D243C" },
        { colorName: "ORANGE", colorHex: "#EE6C23" },
      ],
      tile2Title: "ENGAGING",
      tile2Description: "Simple design and call to actions to give users the information and accessibility needed.",
      tile2Img: "../../assets/stf/iphone_design_focus.webp",
    },
    {
      template: "sub-section",
      title: "CLOSING THOUGHTS",
      description: [
        "Working with Spieles Troutwine and Fout on their rebranding and digital strategy was a rewarding experience that allowed me to blend creative design with practical marketing solutions. From developing a modern logo that appealed to a younger audience to creating an SEO optimized website with engaging animations.",
        "Every step of the project was focused on enhancing STF's online presence. Managing their Google Ads campaign and optimizing the site for SEO helped drive measurable results, demonstrating the power of cohesive branding and targeted digital strategies. This project not only strengthened my skills in design and marketing but also deepened my understanding of how technology and creativity can come together to deliver impactful results for businesses.",
      ],
    },
  ],
};
