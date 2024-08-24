import { AfterViewInit, Component, HostListener, OnInit } from "@angular/core";
import { gsap, Power2 } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent implements AfterViewInit {
  hideFooter = false;
  footerCategories = [
    {
      label: "SITEMAP",
      type: "routerLinks",
      links: [
        { label: "HOME", link: "/" },
        { label: "ABOUT", link: "/about" },
        { label: "WORK", link: "/work" },
        { label: "CONTACT", link: "/contact" },
      ],
    },
    {
      label: "SOCIALS",
      type: "external-links",
      links: [
        {
          label: "LinkedIn",
          link: "https://www.linkedin.com/in/haydenwestfall/",
        },
        {
          label: "GitHub",
          link: "https://github.com/HaydenWestfall",
        },
        {
          label: "Instagram",
          link: "https://www.instagram.com/haydenwestfall12667/",
        },
      ],
    },
    {
      label: "RESUME",
      type: "external-links",
      links: [
        {
          label: "RESUME DOWNLOAD",
          link: "/assets/hayden_westfall_resume.pdf",
        },
      ],
    },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger, Draggable);

      const element = document.getElementById("contact-btn-footer");
      gsap.fromTo(
        element,
        { y: 200, x: -200 },
        {
          y: 0,
          x: 0, // End position,
          ease: "power1.out", // Ease function
          scrollTrigger: {
            trigger: element, // Element that triggers the animation
            start: "top bottom", // Start the animation when the top of the trigger element is at 80% of the viewport height
            scrub: true,
          },
        }
      );
    }, 1000);
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(event: any) {
    this.hideFooter = window.scrollY ? true : false;
  }
}
