import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  scrollTimeline = gsap.timeline({});
  animationFrameId: number = 0;
  direction = -1;
  slider = 0;
  xPos = 0;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeContact();
    }, 1000);
  }

  initializeContact(): void {
    console.log("CREATED");
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
    // Let cover animation cover the page before killing all animations
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
