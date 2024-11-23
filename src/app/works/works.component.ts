import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { ThemeService } from "../services/theme.service";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { works } from "../works";
import { Subscription } from "rxjs";

@Component({
  selector: "app-works",
  templateUrl: "./works.component.html",
  styleUrl: "./works.component.scss",
})
export class WorksComponent implements AfterViewInit, OnDestroy {
  themeService = inject(ThemeService);
  initPageSubscription: Subscription = null as any;
  direction = -1;
  animationFrameId: number | null = null;
  rotatePos = 0;
  scrollTimeline = gsap.timeline({});
  featuredProjects = works;

  ngAfterViewInit(): void {
    this.initPageSubscription = this.themeService.initPage$.subscribe(() => {
      this.initializeWorks();
      setTimeout(() => {
        const duration = 0.7;
        const timeline = gsap.timeline({ delay: 0.375 });
        timeline.from("#title-text", { y: 250, duration: duration, ease: "circ.out" });
        timeline.from("#header-accent", { y: 375, duration: duration, ease: "circ.out" }, `-=${duration}`);
        // timeline.from("#works-wrapper", { y: 500, duration: duration, ease: "circ.out" }, `-=${duration}`);
      });
    });
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

  isIntersecting(status: boolean, index: number) {}

  ngOnDestroy(): void {
    this.initPageSubscription.unsubscribe();

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
