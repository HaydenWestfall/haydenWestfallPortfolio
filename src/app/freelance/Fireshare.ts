export const Fireshare = {
  id: "fireshare",
  index: 0,
  projectName: "FIRESHARE",
  titleText: "FIRESHARE FIRESHARE FIRESHARE FIRESHARE FIRESHARE FIRESHARE",
  headerMockup: "../../assets/innobuild/innobuild_macbook.png",
  headerInfo: [
    { title: "SERVICES", description: ["UI/UX Design/Development", "Backend Design/Development", "Devops"] },
    { title: "INDUSTRY / ROLE", description: ["Commerical", "SCRUM team developer"] },
    { title: "TECH STACK", description: ["Angular", "Spring Boot", "MongoDB", "Kubernetes"] },
  ],
  bg: ["#271212", "#512728"],
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
          title: "OVERVIEW",
          description: [
            "Fireshare is a cutting-edge automotive repair management platform designed to transform the auto care industry. It provides essential tools that auto shops rely on daily, making it easy to manage appointments, access comprehensive service records, and leverage data analytics to optimize shop performance. This was the first project where I stepped into the role of technical lead. Leading Fireshare early in my career was both challenging and rewarding, reinforcing my approach to growth through hands-on experience. This project helped me discover my passion for UI/UX design, develop my skills in time and task management, and gain experience with production deployments.",
            "During initial client meetings, our customers had clear functional requirements but no vision for the user interface. This opened the door for my first experience with Figma—a tool I’ve used ever since. I created wireframes that we reviewed with clients, which ultimately led to a fully realized UI design before development even began.",
            "As technical lead, I learned how to balance team tasks, prioritize key milestones, and adapt timelines as the project evolved. By breaking down development into manageable phases and maintaining open communication, I ensured the team stayed aligned and on track, meeting our goals efficiently.",
            "Fireshare was also the first application deployed to our company's shared cloud environment, a process that required close collaboration with the cloud team. Working through deployment challenges deepened my understanding of Kubernetes, Istio, and our deployment architecture, experience I later applied to other projects.",
          ],
        },
      ],
      preview: {
        screenshot: "../../assets/fireshare/app_preview.png",
        logo: "../../assets/fireshare/logo.png",
      },
    },
    {
      id: "uiuxDesign",
      template: "sub-section",
      title: "UI/UX DESIGN",
      description: [
        "As the lead designer for Fireshare, I crafted a user interface that garnered high praise from our customers. In my initial discussions with the Fireshare team, it became clear that while they had a strong grasp of the UI's functional needs, they lacked a vision for its visual presentation. This provided me with a unique opportunity to unleash my creativity and design the application from a blank slate.",
        "With minimal prior UI design experience, I sought out a tool that would facilitate a more collaborative design process with our customers. This search led me to Figma, an exceptional team collaboration tool that enables users to create interactive prototypes. The ability for customers to actively participate in the design process from the ground up was well-received, and as a result, many other teams within the company adopted Figma as their go-to design tool. This shift not only enhanced customer engagement but also allowed for the seamless sharing of design components across company which helped better establish our brand.",
        "The user interface was developed using the Angular framework and adhered closely to the Figma prototype that had been approved by our customers. The dashboard's analytic view provides users with critical ‘information at a glance,’ showcasing pre-selected trends they are interested in tracking. These trends display numeric data over a set period, comparing it to the previous period to highlight percentage increases and decreases. The application also includes ‘Scheduled’ and ‘Archived’ pages, each featuring a table for their respective categories—upcoming appointments and past appointments. Fully CRUD-enabled, the application allows users to manage appointments and refer back to a comprehensive history log.",
      ],
    },
    {
      id: "design_marketing",
      template: "sub-section",
      title: "BACKEND",
      description: [
        "The Fireshare backend is powered by a suite of RESTful Spring Boot microservices, seamlessly interfacing with a MongoDB datastore. Adopting a documentation-first approach, I began by defining all endpoints through an OpenAPI specification. By leveraging OpenAPI Generator, we continuously generated code directly from our spec—a practice I’ve successfully implemented across multiple projects and highly recommend.",
        "This Spring Boot microservice architecture exemplifies the strength of modular, scalable design. By breaking down the application's functionality into five distinct microservices, each with a unique purpose, we created a highly encapsulated system where services operate independently yet harmoniously within the broader ecosystem. This design enhances maintainability, scalability, and resource efficiency while enabling faster deployment cycles. The clear separation of concerns allows each microservice to be developed, tested, and deployed in isolation, minimizing the risk of system-wide issues and allowing for targeted optimizations.",
        "Our microservices interface seamlessly with MongoDB, leveraging its flexibility to handle complex data types and dynamic schemas. To meet the specific needs of various UI views, I developed several MongoDB aggregation pipelines that transform and reshape data to fit each use case. For example, when users view data analytics charts, we focus on numeric axis counts to provide clear insights, while table views require detailed attribute displays for user interaction. These pipelines are essential for converting nested and complex data structures into the precise formats required by different UI components, ensuring that our application delivers tailored data in exactly the right shape for optimal user experience.",
      ],
    },
    {
      id: "cicd",
      template: "sub-section",
      title: "CI/CD",
      description: [
        "From inception to production, I played a key role in the development and deployment of Fireshare. Designed for the cloud, the application leverages a fully automated CI/CD pipeline powered by GitLab runners. Our cloud environment is hosted on an AWS instance, orchestrated by Kubernetes, and managed by Istio, ensuring robust scalability and reliability.",
        "The CI/CD pipelines for Fireshare are engineered to handle every step of the deployment process. They build both the frontend and backend services, run comprehensive tests, and conduct quality scans using SonarQube. Once these steps are completed, distributable Docker images are generated and pushed to a container registry. This registry is continuously monitored by ArgoCD, which is configured to detect changes and automatically redeploy updates to our test environment. This automation has significantly reduced human error, boosted team productivity, and streamlined our deployment process, ensuring that updates are delivered quickly and efficiently.",
      ],
    },
  ],
};
