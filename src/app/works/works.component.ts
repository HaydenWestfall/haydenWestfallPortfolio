import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { ThemeService } from "../services/theme.service";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "app-works",
  templateUrl: "./works.component.html",
  styleUrl: "./works.component.scss",
})
export class WorksComponent implements AfterViewInit, OnDestroy {
  themeService = inject(ThemeService);
  direction = -1;
  animationFrameId: number | null = null;
  rotatePos = 0;
  scrollTimeline = gsap.timeline({});
  featuredProjects = [
    {
      label: "FIRESHARE",
      description:
        "Fireshare is a cutting-edge automotive repair management platform designed to transform the auto care industry. The application delivers essential tools that auto shops rely on daily, enabling seamless management of upcoming appointments, comprehensive access to historical service records, and insightful data analytics to optimize shop performance. Fireshare’s advanced filtering capabilities empower managers and mechanics to swiftly access a vehicle's service history or diagnose recurring issues by referencing previous solutions.",
      role: "Developer | Commercial",
      link: "/work/fireshare",
      showcase: "../../assets/fireshare/app_showcase.png",
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
      label: "TRADEWAVE",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Technical Lead | Commercial",
      link: "/work/tradewave",
      showcase: "../../assets/tradewave/app_showcase.png",
      hover: false,
    },
    {
      label: "INNOBUILD",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Technical Lead | Commercial",
      link: "/work/innobuild",
      showcase: "../../assets/innobuild/app_showcase.png",
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
      label: "MISS LISA BOOKS",
      description:
        "Maddie West Events is a wedding coordination and event planning business based out of Dayton, OH. Maddie wanted a custom website created that enraptured her brand and also provided a unique experience to its users. Something that would leave a lasting impact.",
      role: "Design + Dev | Freelance",
      link: "/work/missLisaBooks",
      showcase: "../../assets/missLisaBooks/app_showcase.png",
      hover: false,
    },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeWorks();
    }, 1000);
  }

  initializeWorks(): void {
    this.themeService.theme = "dark";
    this.scrollTimeline.to(document.getElementById("micro-animation-wrapper"), {
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

  ngOnDestroy(): void {
    setTimeout(() => {
      cancelAnimationFrame(this.animationFrameId as number);

      if (this.scrollTimeline) {
        this.scrollTimeline.kill();
      }

      ScrollTrigger.getAll().forEach((trigger) => {
        const element = trigger.vars.trigger; // Get the trigger element
        if (element instanceof HTMLElement && element.id == "contact-btn-footer") {
          return;
        }
        trigger.vars;
        trigger.kill();
      });
    }, 750);
  }
}
