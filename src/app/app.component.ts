import { Component, HostListener, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import Lenis from "lenis";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "haydenWestfall";
  hideMessage = false;

  ngOnInit(): void {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(event: any) {
    this.hideMessage = window.scrollY ? true : false;
  }
}
