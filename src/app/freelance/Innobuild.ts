export const Innobuild = {
  id: "innobuild",
  projectName: "INNOBUILD",
  titleText: "INNOBUILD  INNOBUILD  INNOBUILD  INNOBUILD  INNOBUILD  INNOBUILD  INNOBUILD",
  headerMockup: "../../assets/innobuild/macbook_tilted.png",
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
            "Innobuild is a cutting-edge construction management platform designed to streamline and optimize the various aspects of construction projects. By leveraging a model-agnostic approach, Innobuild provides construction companies with a comprehensive toolset to manage inventory, blueprints, tools, and employees efficiently and adaptively.",
          ],
        },
        {
          id: "careerDevelopment",
          template: "sub-section",
          title: "CAREER DEVELOPMENT",
          description: [
            "Working on this application gave me valuable exposure to the world of Scrum. As a developer on a full Scrum team, I gained insight into the entire agile lifecycle. I was involved in several high-impact tasks, including implementing a history tracking feature, developing a comprehensive workflow, and adding multimedia support.",
            "One of the most notable aspects of this experience was collaborating with a professional UI/UX team. This opportunity allowed me to observe and learn from experienced designers as they assisted me in redesigning the entire UI of SPABOK. Being part of this process was eye-opening, as I was able to witness firsthand how professional UI/UX personnel approach design challenges.",
            "The UI/UX team, though unfamiliar with our application, provided valuable advice and best practices during our design reviews. I served as the liaison between the Scrum team and the UI/UX team, ensuring that their recommendations were effectively integrated into our application. This role allowed me to contribute significantly to creating a visually appealing, user-friendly, and functionally robust application.",
          ],
        },
      ],
      preview: {
        screenshot: "../../assets/innobuild/app_preview.png",
        logo: "../../assets/innobuild/logo.png",
      },
    },
    {
      id: "uiuxDesign",
      template: "sub-section",
      title: "UI/UX DESIGN",
      description: [
        "The Innobuild user interface is built using the Angular framework and features a model-driven design. This innovative approach means that the entire UI is dynamically generated based on data from the database. For example, when users switch between different views, such as designs or employees, the backend supplies the frontend with a model that determines which columns to display and which actions can be performed on each row.",
        "Because the UI is driven by data, Innobuild offers remarkable flexibility. If new attributes are introduced in future blueprints, they can be seamlessly incorporated into the model, and the UI will automatically adjust to render these new elements. This dynamic capability ensures that Innobuild remains adaptable as the company's needs, designs, and data evolve, providing a robust and scalable solution that grows alongside the business.",
      ],
    },
    {
      id: "design_marketing",
      template: "sub-section",
      title: "BACKEND",
      description: [
        "The Innobuild backend is powered by a suite of RESTful Spring Boot microservices that interact seamlessly with a MongoDB datastore. I joined the project a few years after its initial development, so I didn’t participate in the initial architectural design but benefited from the groundwork laid by previous engineers.",
        "During my time on the team, I developed a new microservice dedicated to tracking the history of records. This involved using a JSON diff library to compare incoming create or patch objects, store the differences in the history collection, and update the entity. Given the model-agnostic nature of the application—where data structures can change unpredictably—I ensured that the history tracking logic was as robust as possible to handle various edge cases and maintain comprehensive record-keeping.",
      ],
    },
    {
      id: "cicd",
      template: "sub-section",
      title: "CI/CD",
      description: [
        "From inception to production, I played a key role in the development and deployment of Gearhead. Designed for the cloud, the application leverages a fully automated CI/CD pipeline powered by GitLab runners. Our cloud environment is hosted on an AWS instance, orchestrated by Kubernetes, and managed by Istio, ensuring robust scalability and reliability.",
        "The CI/CD pipelines for Gearhead are engineered to handle every step of the deployment process. They build both the frontend and backend services, run comprehensive tests, and conduct quality scans using SonarQube. Once these steps are completed, distributable Docker images are generated and pushed to a container registry. This registry is continuously monitored by ArgoCD, which is configured to detect changes and automatically redeploy updates to our test environment. This automation has significantly reduced human error, boosted team productivity, and streamlined our deployment process, ensuring that updates are delivered quickly and efficiently.",
      ],
    },
    {
      template: "next-project",
      nextProject: [
        {
          label: "STF",
          description:
            "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
          role: "Design + Dev | Freelance",
          link: "/work/stf",
          showcase: "../../assets/stf/app_showcase.png",
          hover: false,
        },
      ],
    },
  ],
};
