import { AfterViewInit, Component, ElementRef, inject, OnInit, Renderer2 } from "@angular/core";
import { ThemeService } from "../theme.service";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "app-projects-two",
  templateUrl: "./projects-two.component.html",
  styleUrl: "./projects-two.component.scss",
})
export class ProjectsTwoComponent implements AfterViewInit {
  themeService = inject(ThemeService);

  featuredProjects = [
    {
      label: "GEARHEAD",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Technical Lead | Commercial",
      link: "/work/gearHead",
      showcase: "../../assets/maddie_west_showcase.png",
      hover: false,
    },
    {
      label: "MADDIE WEST EVENTS",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Design + Dev | Freelance",
      link: "/work/maddieWestEvents",
      showcase: "../../assets/stf_showcase.png",
      hover: false,
    },
    {
      label: "TRADEWAVE",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Technical Lead | Commercial",
      link: "/work/tradeWave",
      showcase: "../../assets/maddie_west_showcase.png",
      hover: false,
    },
    {
      label: "STF",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Design + Dev | Freelance",
      link: "/work/stf",
      showcase: "../../assets/stf_showcase.png",
      hover: false,
    },
    {
      label: "THIS PORTFOLIO",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Design + Dev | Freelance",
      link: "/work/stf",
      showcase: "../../assets/maddie_west_showcase.png",
      hover: false,
    },
    {
      label: "FIRESHARE",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Developer | Commercial",
      link: "/work/stf",
      showcase: "../../assets/stf_showcase.png",
      hover: false,
    },
    {
      label: "MISS LISA BOOKS",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Design + Dev | Freelance",
      link: "/work/stf",
      showcase: "../../assets/maddie_west_showcase.png",
      hover: false,
    },
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {
    gsap.registerPlugin(ScrollTrigger, Draggable);
  }

  ngAfterViewInit(): void {
    this.themeService.theme = "dark";
  }

  isIntersecting(status: boolean, index: number) {
    console.log("Element #" + index + " is intersecting " + status);
  }
}
