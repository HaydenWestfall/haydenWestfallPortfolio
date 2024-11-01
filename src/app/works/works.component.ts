import { AfterViewInit, Component, ElementRef, inject, OnInit, Renderer2 } from "@angular/core";
import { ThemeService } from "../services/theme.service";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "app-works",
  templateUrl: "./works.component.html",
  styleUrl: "./works.component.scss",
})
export class WorksComponent implements AfterViewInit {
  themeService = inject(ThemeService);
  direction = -1;
  animationFrameId: number | null = null;
  rotatePos = 0;
  featuredProjects = [
    {
      label: "GEARHEAD",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Technical Lead | Commercial",
      link: "/work/gearHead",
      showcase: "../../assets/stf/app_showcase.png",
      hover: false,
    },
    {
      label: "MADDIE WEST EVENTS",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Design + Dev | Freelance",
      link: "/work/maddieWestEvents",
      showcase: "../../assets/maddieWestEvents/app_showcase.png",
      hover: false,
    },
    {
      label: "TRADESHARK",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Technical Lead | Commercial",
      link: "/work/tradeshark",
      showcase: "../../assets/maddieWestEvents/app_showcase.png",
      hover: false,
    },
    {
      label: "STF",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Design + Dev | Freelance",
      link: "/work/stf",
      showcase: "../../assets/stf/app_showcase.png",
      hover: false,
    },
    {
      label: "PORTFOLIO",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Design + Dev | Freelance",
      link: "/work/stf",
      showcase: "../../assets/maddieWestEvents/app_showcase.png",
      hover: false,
    },
    {
      label: "FIRESHARE",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Developer | Commercial",
      link: "/work/stf",
      showcase: "../../assets/stf/app_showcase.png",
      hover: false,
    },
    {
      label: "MISS LISA BOOKS",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Design + Dev | Freelance",
      link: "/work/missLisaBooks",
      showcase: "../../assets/maddieWestEvents/app_showcase.png",
      hover: false,
    },
  ];

  ngAfterViewInit(): void {
    this.themeService.theme = "dark";
    gsap.to(document.getElementById("micro-animation-wrapper"), {
      scrollTrigger: {
        trigger: document.getElementById("micro-animation-wrapper"),
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (this.direction = e.direction * -1),
      },
      rotate: "-100px",
    });
    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  animate = () => {
    gsap.set(document.getElementById("micro-animation"), { rotate: this.rotatePos });
    this.animationFrameId = requestAnimationFrame(this.animate);
    this.rotatePos += 0.2;
  };

  isIntersecting(status: boolean, index: number) {
    console.log("Element #" + index + " is intersecting " + status);
  }
}
