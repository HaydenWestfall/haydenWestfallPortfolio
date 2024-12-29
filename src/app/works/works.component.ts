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
  private readonly _service = inject(ThemeService);
  initPageSubscription: Subscription = null as any;
  direction = -1;
  animationFrameId: number | null = null;
  rotatePos = 0;
  scrollTimeline = gsap.timeline({});

  showcaseProjects = works;
  hoverIndex: number | null = null;

  ngAfterViewInit(): void {
    this.initPageSubscription = this._service.initPage$.subscribe(() => {
      this.initializeWorks();
      if (!this._service.isPopState) {
        setTimeout(() => {
          const duration = 0.6;
          const timeline = gsap.timeline({ delay: 0.375 });
          timeline.from("#title-text", { y: 250, duration: duration, ease: "circ.out" });
          timeline.from("#header-accent", { y: 300, duration: duration, ease: "circ.out" }, `-=${duration}`);
          timeline.from("#works-wrapper", { y: 350, duration: duration, ease: "circ.out" }, `-=${duration}`);
        });
      }
    });
  }

  initializeWorks(): void {
    this._service.theme = "dark";
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
    this.scrollTimeline.to("#spark", {
      scale: "1.3",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "none",
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
  }
}
