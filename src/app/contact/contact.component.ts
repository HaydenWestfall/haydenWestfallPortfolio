import { AfterViewChecked, AfterViewInit, Component, inject, OnDestroy, OnInit } from "@angular/core";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ThemeService } from "../services/theme.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  private readonly _service = inject(ThemeService);
  initPageSubscription: Subscription = null as any;
  scrollTimeline = gsap.timeline({});
  animationFrameId: number = 0;
  direction = -1;
  slider = 0;
  xPos = 0;

  ngAfterViewInit(): void {
    this.initPageSubscription = this._service.initPage$.subscribe(() => {
      this.initializeContact();
      if (!this._service.isPopState) {
        setTimeout(() => {
          const duration = 0.7;
          const timeline = gsap.timeline({ delay: 0.275 });
          timeline.from("#contact-header", { y: 250, duration: duration, ease: "circ.out" });
          timeline.from("#contact-main", { y: 300, duration: duration, ease: "circ.out" }, `-=${duration}`);
        });
      }
    });
  }

  initializeContact(): void {
    this.scrollTimeline.to(document.getElementById("email-slider"), {
      scrollTrigger: {
        trigger: document.getElementById("email-slider"),
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (this.direction = e.direction * -1),
      },
      x: "-500px",
    });

    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  animate = () => {
    if (this.xPos < -100) {
      this.xPos = 0;
    } else if (this.xPos > 0) {
      this.xPos = -100;
    }
    gsap.set(document.getElementById("email-primary"), { xPercent: this.xPos });
    gsap.set(document.getElementById("email-secondary"), { xPercent: this.xPos });
    this.animationFrameId = requestAnimationFrame(this.animate);
    this.xPos += 0.015;
  };

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
