import { Component, inject, OnInit } from "@angular/core";
import { gsap, Power2 } from "gsap";
import { ThemeService } from "../theme.service";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrl: "./work.component.scss",
})
export class WorkComponent implements OnInit {
  themeService = inject(ThemeService);

  projects = [
    {
      name: "Trade Shark",
      role: "Technical Lead",
      stack: "Angular, SpringBoot, MongoDB",
      year: "2022",
      route: "tradeShark",
      position: "professional",
      hover: false,
    },
    {
      name: "Gear Head",
      role: "Technical Lead",
      stack: "Angular, SpringBoot, MongoDB",
      year: "2021",
      route: "gearHead",
      position: "professional",
      hover: false,
    },
    {
      name: "Maddie West Events",
      role: "Project Owner",
      stack: "Javascript, Webpack, HTML, CSS",
      year: "2024",
      route: "maddieWestEvents",
      position: "freelance",
      hover: false,
    },
    {
      name: "Fire Wire",
      role: "Technical Lead",
      stack: "Angular, SpringBoot, MongoDB",
      year: "2023",
      route: "fireWire",
      position: "professional",
      hover: false,
    },
    {
      name: "STF",
      role: "Project Owner",
      stack: "Angular, SpringBoot, MongoDB",
      year: "2022",
      route: "stf",
      position: "freelance",
      hover: false,
    },
    {
      name: "Portfolio",
      role: "Project Owner",
      stack: "Angular",
      year: "2024",
      route: "portfolio",
      position: "freelance",
      hover: false,
    },
    {
      name: "Miss Lisa Books",
      role: "Project Owner",
      stack: "Angular",
      year: "2021",
      route: "missLisaBooks",
      position: "freelance",
      hover: false,
    },
  ];

  shownProjects: any[] = [];

  active = false;

  ngOnInit() {
    this.themeService.theme = "dark";
    this.shownProjects = JSON.parse(JSON.stringify(this.projects));
  }

  filterProjects(filter: any): void {
    this.shownProjects = this.projects.filter((x) => (filter === "all" ? x : x.position === filter));
  }

  mouseEnter(event: any): void {
    gsap.to(event.srcElement, 0.3, { scale: 1.05 });
    // gsap.to(ball, 0.3, { scale: 2 });
    this.active = true;
  }

  mouseLeave(event: MouseEvent): void {
    gsap.to(event.srcElement, 0.3, { scale: 1 });
    // gsap.to(ball, 0.3, { scale: 1 });
    const element: HTMLElement = event.target as HTMLElement;

    gsap.to(document.getElementById(element.children[0].id), 0.3, {
      x: 0,
      y: 0,
    });
    this.active = false;
  }

  mouseMove(event: any): void {
    // parallaxCursor(e, this, 3);
    const element: HTMLElement = event.target as HTMLElement;
    this.callParallax(event, event.currentTarget, event.currentTarget.children[0].id);
  }

  callParallax(e: any, parent: any, attributeId: string): void {
    this.parallaxIt(e, parent, document.getElementById(attributeId), 10);
  }

  parallaxIt(e: any, parent: any, target: any, movement: any): void {
    var boundingRect = parent.getBoundingClientRect();
    var relX = e.pageX - boundingRect.left;
    var relY = e.pageY - boundingRect.top - window.scrollY;

    gsap.to(target, 0.25, {
      x: ((relX - boundingRect.width / 3) / boundingRect.width) * movement,
      y: ((relY - boundingRect.height / 3) / boundingRect.height) * movement,
      ease: Power2.easeOut,
    });
  }

  parallaxCursor(e: any, parent: any, movement: any): void {
    var rect = parent.getBoundingClientRect();
    var relX = e.pageX - rect.left;
    var relY = e.pageY - rect.top;
    // pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
    // pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
    // TweenMax.to(ball, 0.3, { x: pos.x, y: pos.y });
  }
}
