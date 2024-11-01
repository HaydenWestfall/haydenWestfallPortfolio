export const Fireshare = {
  id: "fireshare",
  projectName: "FIRESHARE",
  titleText: "FIRESHARE FIRESHARE FIRESHARE FIRESHARE FIRESHARE FIRESHARE",
  headerMockup: "../../assets/innobuild/innobuild_macbook.png",
  headerInfo: [
    { title: "SERVICES", description: ["UI/UX Design/Development", "Backend Design/Development", "Devops"] },
    { title: "INDUSTRY / ROLE", description: ["Commerical", "SCRUM team developer"] },
    { title: "TECH STACK", description: ["Angular", "Spring Boot", "MongoDB", "Kubernetes"] },
  ],
  bg: ["#27513D", "#122721"],
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
            "As the technical lead on TradeShark, a comprehensive finance application, I was responsible for overseeing the development of a robust platform designed to empower users in managing their transactions and investments effectively. TradeShark integrates sophisticated data analytics capabilities, featuring customizable charts that enable users to visualize and compare various data points dynamically. The application offers multiple views, including a dashboard for high-level insights, as well as detailed table and chart views for in-depth data exploration.",
            "TradeShark's advanced filtering system allows users to refine their data with precision, supporting complex queries such as inclusion, exclusion, combination, or chaining of multiple attributes. Additionally, the application includes an import feature that facilitates the seamless integration of historical transactions, either from prior services or different providers, making TradeShark a comprehensive solution for financial management.",
          ],
        },
        // {
        //   id: "careerDevelopment",
        //   template: "sub-section",
        //   title: "CAREER DEVELOPMENT",
        //   description: [
        //     "TradeShark presented a unique challenge, as I stepped in as the technical lead mid-project. The application had been under development for about six months by a different team, which was eventually disbanded, leaving TradeShark in a state of limbo. I was tasked with reviving the project and steering it towards completion.",
        //     "The original design aimed to repurpose an existing application within the company, a direction I felt was fundamentally flawed. The user interface was not suited for the new requirements, and the data models and user workflows were markedly different from the previous use cases. Recognizing these issues, I obtained approval to spend a few days creating a prototype and wireframe that better aligned with TradeShark's intended purpose.",
        //     "The prototype you see on this page is the result of that effort. Our customers responded positively to the modernized look and feel, which contrasted sharply with the previous design, and they quickly approved the new direction. Following this, I took the lead in the development and deployment of TradeShark, successfully bringing it to completion over the next nine months.",
        //   ],
        // },
      ],
      preview: {
        screenshot: "../../assets/maddieWestEvents/app_preview.png",
        logo: "../../assets/maddieWestEvents/logo.png",
      },
    },
    {
      id: "uiuxDesign",
      template: "sub-section",
      title: "UI/UX DESIGN",
      description: [
        "As the lead designer for TradeShark, I developed a user interface that received high praise from our customers. In my initial discussions with the TradeShark team, it became clear that while they had a strong understanding of their data needs, they lacked a vision for how it should be presented to users. This presented me with a unique opportunity to exercise creativity and design the application from a blank canvas.",
        "I had the privilege of engaging directly with potential users to understand their desired features and usage patterns. From these conversations, I learned that users typically wanted to quickly access the application, check the latest activity in areas of interest, and then exit. This insight led to the creation of the Dashboard, which provides at-a-glance information on specific tickers, financial events, and analytics. Additionally, TradeShark features a 'Query Manager,' enabling users to save common queries and even apply one automatically upon application load.",
        "Another standout feature is the enhanced user experience provided by TradeShark's advanced filtering system. Users can chain filters together for precise querying across multiple attributes, and this query chain persists across tabs within the application, minimizing clicks and streamlining their data exploration.",
      ],
    },
    {
      id: "design_marketing",
      template: "sub-section",
      title: "BACKEND",
      description: [
        "The TradeShark backend is powered by a REST API built with Spring Boot, interfacing with a MongoDB datastore. I adopted a documentation-first approach to the design, initially defining all endpoints through an OpenAPI specification. By leveraging OpenAPI Generator, we were able to generate code directly from our OpenAPI spec, a process I have successfully implemented on numerous projects and would highly recommend.",
        "Using OpenAPI Generator significantly streamlined development, providing us with POJOs, Spring controllers, and client APIs right out of the box. This approach eliminated the need to manually create boilerplate code, resulting in substantial time savings and a more efficient workflow for the development team. For database interactions, we utilized the MongoDB Spring Data plugin, which seamlessly integrated with our backend.",
        "Given the complexity of TradeShark’s data, which includes complex data types and embedded documents, the MongoDB queries required advanced handling. I developed several MongoDB aggregation pipelines to transform the data into the exact formats needed. These pipelines were critical for delivering features like paginated full object results for table views and optimized projections for chart views with hundreds of thousands of records. The success of TradeShark heavily relied on these sophisticated data manipulation techniques.",
      ],
    },
    {
      id: "cicd",
      template: "sub-section",
      title: "CI/CD",
      description: [
        "I was involved in TradeShark from its inception through to its production deployment. Designed for the cloud, this application features a fully automated deployment pipeline utilizing GitLab runners. In our setup, the cloud environment consists of an AWS instance orchestrated by Kubernetes and managed by ISTIO.",
        "The automated CI/CD pipelines for TradeShark handle the entire process—from building the frontend and backend services, to running tests, performing quality scans with SonarQube, and ultimately generating distributable Docker images. These images are then pushed to a container registry monitored by ArgoCD. Our Argo configuration is designed to track changes in the container registry and automatically redeploy updates to our test environment. This automated process has significantly reduced human error, enhanced team productivity, and streamlined the deployment process.",
      ],
    },
    {
      template: "next-project",
      nextProject: [
        {
          label: "MISS LISA BOOKS",
          description:
            "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
          role: "Design + Dev | Freelance",
          link: "/work/missLisaBooks",
          showcase: "../../assets/stf/app_showcase.png",
          hover: false,
        },
      ],
    },
  ],
};
