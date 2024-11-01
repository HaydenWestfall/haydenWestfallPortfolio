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
  contactButtonAnimation: any = null;
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
          label: "LINKED IN",
          link: "https://www.linkedin.com/in/haydenwestfall/",
        },
        {
          label: "GITHUB",
          link: "https://github.com/HaydenWestfall",
        },
        {
          label: "INSTAGRAM",
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
      if (window.innerWidth >= 768) {
        this.initAnimation();
      }
    }, 1000);
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(event: any) {
    this.hideFooter = window.scrollY ? true : false;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    if (window.innerWidth < 768) {
      this.killAnimation();
    } else {
      this.initAnimation();
    }
  }

  initAnimation() {
    const element = document.getElementById("contact-btn-footer");
    this.contactButtonAnimation = gsap.fromTo(
      element,
      { y: 200, x: -200 },
      {
        y: 0,
        x: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          scrub: true,
        },
      }
    );
  }

  killAnimation(): void {
    if (this.contactButtonAnimation) {
      this.contactButtonAnimation.kill();
      this.contactButtonAnimation = null;
    }
  }

  backToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
