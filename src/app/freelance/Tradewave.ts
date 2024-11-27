export const Tradewave = {
  id: "tradewave",
  index: 2,
  projectName: "TRADEWAVE",
  titleText:
    "TRADEWAVE TRADEWAVE TRADEWAVE TRADEWAVE TRADEWAVE TRADEWAVE TRADEWAVE TRADEWAVE TRADEWAVE TRADEWAVE TRADEWAVE",
  headerMockup: "../../assets/tradewave/mockup.webp",
  headerInfo: [
    { title: "SERVICES", description: ["UI/UX Design/Development", "Backend Design/Development", "Devops"] },
    { title: "INDUSTRY / ROLE", description: ["Commerical", "Technical Lead"] },
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
            "As the technical lead for Tradewave, a comprehensive finance application, I was brought in mid-project to guide it from a stalled state to successful completion. Tradewave enables users to effectively manage transactions and investments, offering a dashboard for high-level insights along with detailed tables and customizable charts for deeper analysis. The application features an advanced filtering system to support complex data queries, as well as an import function for seamless integration of historical transactions.",
            "Initially, the project aimed to adapt an existing company application, but I quickly recognized this approach wasn’t suitable. The user interface, data models, and workflows didn’t align with the new use case. After proposing a prototype that better fit Tradewave purpose, I received approval to move forward with the updated design, which resonated strongly with users. From there, I led the full development and deployment, bringing Tradewave to completion over the following nine months.",
          ],
        },
      ],
      preview: {
        screenshot: "../../assets/tradewave/app_preview.webp",
        logo: "../../assets/tradewave/logo.webp",
      },
    },
    {
      id: "uiuxDesign",
      template: "sub-section",
      title: "UI/UX DESIGN",
      description: [
        "As the lead designer for Tradewave, I developed a fresh, modern user interface that was highly praised by our customers. In my initial discussions with the Tradewave team, it became clear that while they had a strong grasp of their data needs, they lacked a clear vision for how it should be presented to users. This gave me a unique opportunity to exercise creativity and design a new user interface from the ground up.",
        "I had the privilege of engaging directly with users to understand their needs and usage patterns. From these conversations, I compiled a list of requirements that reflected features users genuinely wanted—an essential factor in the success of my design.",
        "A key insight was the common use case of repeated queries, where users frequently returned to check the status of specific data points. This inspired the creation of the Dashboard, providing at-a-glance information on tickers, financial events, and analytics. I also proposed a 'Query Manager' feature to allow users to save common queries and even set one to apply automatically upon application load.",
        "Tradewave’s advanced filtering system is another standout feature. Users can chain filters together for precise querying across multiple attributes, with this query chain persisting across tabs. This design minimizes clicks and streamlines data exploration for a seamless experience.",
      ],
    },
    {
      id: "design_marketing",
      template: "sub-section",
      title: "BACKEND",
      description: [
        "The Tradewave backend is powered by a REST API built with Spring Boot, interfacing with a MongoDB datastore. I adopted a documentation-first approach to the design, initially defining all POJOs and endpoints through an OpenAPI specification. By leveraging OpenAPI Generator, I was able to generate code directly from our OpenAPI specification, a process I have successfully implemented on numerous projects and would highly recommend.",
        "Using OpenAPI Generator significantly streamlined development, providing us with POJOs, Spring controllers, and client APIs right out of the box. This approach eliminated the need to manually create boilerplate code, resulting in substantial time savings and a more efficient workflow for the development team. For database interactions, we utilized the MongoDB Spring Data plugin, which seamlessly integrated with our backend.",
        "Given the complexity of Tradewave’s data, which includes complex data types and embedded documents, the MongoDB queries required advanced handling. I developed several MongoDB aggregation pipelines to efficiently query the dataset and transform the output into exactly what was required. These aggregation pipelines were critical for delivering features like lazy loaded paginated results and optimized projections for creating charts with hundreds of thousands of records. The success of Tradewave heavily relied on these sophisticated data manipulation techniques.",
      ],
    },
    {
      id: "cicd",
      template: "sub-section",
      title: "CI/CD",
      description: [
        "I was fortunately involved in Tradewave from its inception through to its delivery to a production environment. Designed for the cloud, this application features a fully automated deployment pipeline utilizing GitLab runners. In our setup, the cloud environment consists of an AWS instance orchestrated by Kubernetes and managed by ISTIO.",
        "The automated CI/CD pipelines for Tradewave handle the entire process—from building the frontend and backend services, to running tests, performing quality scans with SonarQube, and ultimately generating distributable Docker images. These images are then pushed to a container registry monitored by ArgoCD. Our Argo configuration is designed to track changes in the container registry and automatically redeploy updates to our test environment. This automated process has significantly reduced human error, enhanced team productivity, and streamlined the deployment process.",
      ],
    },
  ],
};
