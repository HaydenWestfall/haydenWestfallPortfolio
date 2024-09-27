import { AfterViewInit, Component, inject, OnInit } from "@angular/core";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ThemeService } from "../services/theme.service";
import { MaddieWestEvents } from "./MaddieWestEvents";
import { ActivatedRoute } from "@angular/router";
import { STF } from "./STF";
import { TradeShark } from "./Tradeshark";
import { MissLisaBooks } from "./Misslisabooks";
import { Gearhead } from "./Gearhead";
import { Fireshare } from "./Fireshare";

@Component({
  selector: "app-freelance",
  templateUrl: "./freelance.component.html",
  styleUrl: "./freelance.component.scss",
})
export class FreelanceComponent implements OnInit {
  projectName = "MADDIE WEST EVENTS MADDIE WEST EVENTS MADDIE WEST EVENTS";
  animations: gsap.core.Tween[] = [];

  project: any;

  projectOverview = [
    { title: "SERVICES", description: ["UI/UX Design", "Branding + Marketing", "Customer Communication"] },
    { title: "INDUSTRY / ROLE", description: ["Freelance", "Sole Designer", "Sole Developer"] },
    { title: "TECH STACK", description: ["Javascript", "HTML / SCSS", "Custom Webpack Configuration"] },
  ];

  colorScheme = [
    { color: "white", colorName: "WHITE", colorHex: "#FFFFFF" },
    { color: "black", colorName: "BLACK", colorHex: "#000000" },
  ];

  nextProject = {
    label: "STF",
    description:
      "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
    role: "Design + Dev | Freelance",
    link: "/work/stf",
    showcase: "../../assets/stf_showcase.png",
    hover: false,
  };

  themeService = inject(ThemeService);
  route = inject(ActivatedRoute);

  constructor() {
    gsap.registerPlugin(ScrollTrigger, Draggable);
  }

  ngOnInit(): void {
    this.themeService.theme = "light";
    this.route.paramMap.subscribe((params) => {
      setTimeout(() => {
        console.log("chaning");
        const projectId = params.get("projectId");
        if (projectId === "maddieWestEvents") {
          this.project = MaddieWestEvents;
        } else if (projectId === "stf") {
          this.project = STF;
        } else if (projectId === "missLisaBooks") {
          this.project = MissLisaBooks;
        } else if (projectId === "gearHead") {
          this.project = Gearhead;
        } else if (projectId === "fireshare") {
          this.project = Fireshare;
        } else if (projectId === "tradeshark") {
          this.project = TradeShark;
        }
        setTimeout(() => {
          this.init();
        });
      }, 1000);
    });
  }

  init(): void {
    const tl = gsap.timeline({ delay: 0.75 });

    tl.fromTo("#project-name-top", { x: -800 }, { x: -200, duration: 6, ease: "power2.out" }, 0);
    tl.fromTo("#project-name-top", { y: "100%" }, { y: 0, duration: 2, ease: "power2.out" }, 0);
    tl.fromTo("#project-name-bottom", { x: -200 }, { x: -800, duration: 6, ease: "power2.out" }, 0);
    tl.fromTo("#project-name-bottom", { y: "100%" }, { y: 0, duration: 2, ease: "power2.out" }, 0);
    tl.fromTo("#mockup", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 }, 1);
    gsap.fromTo(
      "#mockup-wrapper",
      { y: "0" },
      { y: "-200", scrollTrigger: { trigger: "#mockup-wrapper", start: "bottom 55%", scrub: true, markers: true } }
    );

    for (const section of this.project.sections) {
      if (section.template === "project-header") {
        this.animations.push(this.themeService.setupTranslateAnimation("#live-site", 0, 0, 200, 0, "power1.out"));
      } else if (section.template === "macbook") {
        // No animations for this section
      } else if (section.template === "mockup") {
        gsap.fromTo(
          ".mockup",
          { y: "-30%" },
          {
            y: "0",
            scrollTrigger: { trigger: ".mockup", start: "20% bottom", end: "140% top", scrub: true, markers: false },
          }
        );
      } else if (section.template === "mobile-section") {
        // No animations for this section
      } else if (section.template === "design-marketing") {
        gsap.fromTo(
          "#tile-phone",
          { y: "125" },
          {
            y: "0",
            scrollTrigger: {
              trigger: "#tile-phone",
              start: "top bottom",
              end: "top: 40%",
              scrub: true,
              markers: false,
            },
          }
        );
      } else if (section.template === "journal-section") {
        // No animations for this section
      } else if (section.template === "next-project") {
        // No animations for this section
      } else if (section.template === "sub-section") {
        // No animations for this section
      }
    }

    // gsap.fromTo(
    //   "#iphone_mockup_1",
    //   { marginTop: "5rem" },
    //   {
    //     top: "-5rem",
    //     scrollTrigger: {
    //       trigger: "#iphone_mockup_1",
    //       start: "top bottom",
    //       end: "bottom top",
    //       scrub: true,
    //       markers: false,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   "#iphone_mockup_3",
    //   { marginTop: "0" },
    //   {
    //     marginTop: "0",
    //     scrollTrigger: {
    //       trigger: "#iphone_mockup_3",
    //       start: "top bottom",
    //       end: "bottom top",
    //       scrub: true,
    //       markers: false,
    //     },
    //   }
    // );
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    console.log(element);
    if (element) {
      const yOffset = -100; // Adjust this value to your desired offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}
