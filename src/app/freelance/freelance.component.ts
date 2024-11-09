import { AfterViewInit, Component, HostListener, inject, OnDestroy, OnInit } from "@angular/core";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ThemeService } from "../services/theme.service";
import { MaddieWestEvents } from "./MaddieWestEvents";
import { ActivatedRoute } from "@angular/router";
import { STF } from "./STF";
import { Tradewave } from "./Tradewave";
import { MissLisaBooks } from "./Misslisabooks";
import { Innobuild } from "./Innobuild";
import { Fireshare } from "./Fireshare";
import { works } from "../works";
import { Subscription } from "rxjs";

@Component({
  selector: "app-freelance",
  templateUrl: "./freelance.component.html",
  styleUrl: "./freelance.component.scss",
})
export class FreelanceComponent implements OnInit, AfterViewInit, OnDestroy {
  themeService = inject(ThemeService);
  route = inject(ActivatedRoute);
  initPageSubscription: Subscription = null as any;
  timeline: gsap.core.Timeline = null as any;
  animations: gsap.core.Tween[] = [];
  mediaQueryMatch = false;
  projectShowcases = works;
  projects = [Fireshare, Innobuild, MaddieWestEvents, MissLisaBooks, STF, Tradewave];
  project: any;

  ngOnInit(): void {
    this.themeService.theme = "light";
    this.mediaQueryMatch = window.innerWidth <= 768;
  }

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe((params) => {
      setTimeout(() => {
        const projectId = params.get("projectId");
        this.project = this.projects.find((x: any) => x.id === projectId);
      }, 1000);
    });

    this.initPageSubscription = this.themeService.initPage$.subscribe(() => {
      setTimeout(() => {
        this.init();
      });
    });
  }

  init(): void {
    this.clearAnimations();
    this.timeline = gsap.timeline({ delay: 0.4 });
    this.timeline.fromTo("#project-name-top", { x: -800 }, { x: -200, duration: 6, ease: "power2.out" }, 0);
    this.timeline.fromTo("#project-name-top", { y: "100%" }, { y: 0, duration: 2, ease: "power2.out" }, 0);
    this.timeline.fromTo("#project-name-bottom", { x: -200 }, { x: -800, duration: 6, ease: "power2.out" }, 0);
    this.timeline.fromTo("#project-name-bottom", { y: "100%" }, { y: 0, duration: 2, ease: "power2.out" }, 0);
    this.timeline.fromTo("#mockup", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 }, 1);
    this.timeline.fromTo(
      "#mockup-wrapper",
      { y: "0" },
      {
        y: "-200",
        scrollTrigger: { trigger: ".gsap-scroll-reference", start: "bottom bottom", end: "bottom top", scrub: true },
      }
    );

    for (const section of this.project.sections) {
      if (section.template === "project-header" && section.preview?.url) {
        this.timeline.fromTo(
          "#live-site",
          { y: 200 },
          { y: 0, ease: "power1.out", scrollTrigger: { trigger: "#live-site", start: "top bottom", scrub: true } }
        );
      } else if (section.template === "mobile-section" && window.innerWidth > 768) {
        this.timeline.fromTo(
          "#iphone_mockup_1",
          { y: "5rem" },
          {
            y: "-2.5rem",
            scrollTrigger: { trigger: "#mobile-wrapper", start: "top bottom", end: "bottom top", scrub: true },
          }
        );
        this.timeline.fromTo(
          "#iphone_mockup_3",
          { y: "-5rem" },
          {
            y: "2.5rem",
            scrollTrigger: { trigger: "#mobile-wrapper", start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      } else if (section.template === "design-marketing") {
        this.timeline.fromTo(
          "#tile-phone",
          { y: "125" },
          {
            y: "0",
            scrollTrigger: { trigger: "#tile-phone", start: "top bottom", end: "top: 40%", scrub: true, once: true },
          }
        );
      }
    }
  }

  clearAnimations() {
    if (this.timeline) {
      this.timeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        const element = trigger.vars.trigger; // Get the trigger element
        if (element instanceof HTMLElement && element.id == "contact-btn-footer") {
          return;
        }
        trigger.vars;
        trigger.kill();
      });
      gsap.set("#iphone_mockup_1", { clearProps: "all" });
      gsap.set("#iphone_mockup_3", { clearProps: "all" });
    }
  }

  @HostListener("window:resize", [])
  onResize() {
    if (!this.mediaQueryMatch && window.innerWidth <= 768) {
      this.mediaQueryMatch = true;
      this.init();
      console.log("init small");
    } else if (this.mediaQueryMatch && window.innerWidth > 768) {
      this.mediaQueryMatch = false;
      this.init();
      console.log("init big");
    }
  }

  ngOnDestroy(): void {
    this.initPageSubscription.unsubscribe();
    setTimeout(() => {
      this.clearAnimations();
    }, 750);
  }
}
