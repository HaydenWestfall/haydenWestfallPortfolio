import { Component, OnInit } from "@angular/core";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "app-contact2",
  templateUrl: "./contact2.component.html",
  styleUrl: "./contact2.component.scss",
})
export class Contact2Component implements OnInit {
  direction = -1;
  slider = 0;
  xPos = 0;

  constructor() {
    gsap.registerPlugin(ScrollTrigger, Draggable);
  }

  ngOnInit(): void {
    gsap.to(document.getElementById("name-slider"), {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (this.direction = e.direction * -1),
      },
      x: "-500px",
    });

    requestAnimationFrame(this.animate);
  }

  animate = () => {
    if (this.xPos < -100) {
      this.xPos = 0;
    } else if (this.xPos > 0) {
      this.xPos = -100;
    }
    gsap.set(document.getElementById("primary"), { xPercent: this.xPos });
    gsap.set(document.getElementById("secondary"), { xPercent: this.xPos });
    requestAnimationFrame(this.animate);
    this.xPos += 0.015;
  };
}
