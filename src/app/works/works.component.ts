import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { ThemeService } from "../services/theme.service";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { works } from "../works";

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
  featuredProjects = works;

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
