import { Component, inject, OnInit } from "@angular/core";
import { ThemeService } from "../theme.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent implements OnInit {
  themeService = inject(ThemeService);
  workHistory = [
    {
      position: "Software Engineer III",
      location: "Northrop Grumman",
      timeframe: "2024 - Current",
    },
    {
      position: "Software Engineer II",
      location: "Northrop Grumman",
      timeframe: "2022 - 2024",
    },
    {
      position: "Software Engineer I",
      location: "Northrop Grumman",
      timeframe: "2020 - 2022",
    },
    {
      position: "Associate SE (Intern)",
      location: "Northrop Grumman",
      timeframe: "2018 - 2020",
    },
    {
      position: "Student",
      location: "Wright State University",
      timeframe: "2017 - 2019",
    },
  ];

  listItems = [
    {
      title: "Design",
      description:
        "With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)",
    },
    {
      title: "Development",
      description:
        "With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)",
    },
    {
      title: "Deployment",
      description:
        "With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)",
    },
  ];

  accolades = [
    {
      image: "../../assets/accolades/aws.png",
      title: "AWS Certified Developer",
      expiration: "2021-2024",
      description:
        "Acquiring the AWS Developer certificate gave me the foundational knowledge I needed to contribute to cloud deployments through Kubernetes.",
    },
    {
      divider: true,
    },
    {
      image: "../../assets/accolades/security-clearence.png",
      title: "TS/SCI Security Clearence",
      expiration: "2024 - 2029",
      description:
        "Having a Top Secret/SCI security Clearance has allowed me to support customer meetings on site, better understand project requirements, and support project deployments.",
    },
    {
      divider: true,
    },
    {
      image: "../../assets/accolades/csm.png",
      title: "Certified Scrum Master",
      expiration: "Lifetime",
      description:
        "Since earning my Scrum Master certification, I've successfully led agile teams, improved project efficiency, and ensured timely, high-quality delivery on multiple projects.",
    },
  ];

  ngOnInit(): void {
    this.themeService.theme = "dark";
  }
}
