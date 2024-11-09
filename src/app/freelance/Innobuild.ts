export const Innobuild = {
  id: "innobuild",
  index: 3,
  projectName: "INNOBUILD",
  titleText: "INNOBUILD  INNOBUILD  INNOBUILD  INNOBUILD  INNOBUILD  INNOBUILD  INNOBUILD",
  headerMockup: "../../assets/innobuild/mockup.webp",
  headerInfo: [
    { title: "SERVICES", description: ["UI/UX Design/Development", "Backend Design/Development", "Devops"] },
    { title: "INDUSTRY / ROLE", description: ["Commerical", "Technical Lead"] },
    { title: "TECH STACK", description: ["Angular", "Spring Boot", "MongoDB", "Kubernetes"] },
  ],
  bg: ["#273A51", "#122127"],
  fg: "#ffffff",
  sections: [
    {
      template: "project-header",
      title: "OVERVIEW",
      disclaimer: true,
      subSections: [
        {
          id: "overview",
          template: "sub-section",
          description: [
            "Innobuild is a cutting-edge construction management platform designed to streamline and optimize the various aspects of construction projects. By leveraging a model-agnostic approach, Innobuild provides construction companies with a comprehensive toolset to manage inventory, blueprints, tools, and employees efficiently.",
            "My time on this project gave me valuable exposure to the world of Scrum. As a developer on a full Scrum team, I gained insight into the entire agile lifecycle. I was involved in several high-impact tasks, including implementing a history tracking feature, developing a comprehensive workflow, and adding multimedia support.",
            "One of the most notable aspects of this experience was collaborating with a professional UI/UX team. This opportunity allowed me to observe and learn from experienced designers as they assisted me in designing the Innobuild application. Being part of this process was eye-opening, as I was able to witness firsthand how professional UI/UX personnel approach design challenges.",
            "The UI/UX team, though unfamiliar with our application, provided valuable advice and best practices during our design reviews. I served as the liaison between the Scrum team and the UI/UX team, ensuring that their recommendations were effectively integrated into our application. This role allowed me to contribute significantly to creating a visually appealing, user-friendly, and functionally robust application.",
          ],
        },
      ],
      preview: {
        screenshot: "../../assets/innobuild/app_preview.webp",
        logo: "../../assets/innobuild/logo.webp",
      },
    },
    {
      id: "uiuxDesign",
      template: "sub-section",
      title: "UI/UX DESIGN",
      description: [
        "The Innobuild user interface is built using the Angular framework and features a model-driven design. This innovative approach means that the entire UI is dynamically generated based on data from the database. For example, when users switch between different views, such as designs or employees, the backend supplies the frontend with a model that determines which columns to display and which actions can be performed on each row.",
        "Since the UI is driven by data, Innobuild offers remarkable flexibility. If new attributes are introduced in future blueprints, they can be seamlessly incorporated into the model, and the UI will automatically adjust to render these new elements. This dynamic capability ensures that Innobuild remains adaptable as the company's needs, designs, and data evolve, providing a robust and scalable solution that grows alongside the business.",
      ],
    },
    {
      id: "design_marketing",
      template: "sub-section",
      title: "BACKEND",
      description: [
        "The Innobuild backend is powered by a suite of RESTful Spring Boot microservices that interact seamlessly with a MongoDB datastore. Although I joined the project a few years into its development and didn’t participate in the initial architectural design, I benefited from the solid foundation established by previous engineers.",
        'While on the team, I developed a new microservice dedicated to tracking record histories. This involved using a JSON diff library to compare incoming create or patch requests, store the differences in a history collection, and update the entity accordingly. By storing only the diffs, I enabled entities to be reconstructed to any given point in time, which was essential for implementing a "restore" feature. I could take the initial "commit" of a record and recursively apply patches to restore it to any prior state. Given the model-agnostic nature of the application, where data structures can change unpredictably, I designed the history tracking logic to be highly robust, ensuring reliable record-keeping across various edge cases.',
      ],
    },
  ],
};
