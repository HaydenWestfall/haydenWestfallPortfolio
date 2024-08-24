import { Component, inject, Input } from "@angular/core";
import { ThemeService } from "../services/theme.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  themeService = inject(ThemeService);

  navbarLinks = [
    { id: "about", label: "About", route: "/about" },
    { id: "work", label: "Work", route: "/work" },
    { id: "contact", label: "Contact", route: "/contact" },
  ];

  public jumbleLetters(link: any): void {
    const button = document.getElementById(link.id);
    let shuffleCount = 0;

    let shuffleInterval = setInterval(() => {
      if (shuffleCount >= 4) {
        clearInterval(shuffleInterval);
        button!.innerText = link.label;
      } else {
        button!.innerText = this.shuffleArray(button!.innerText.split(""));
        shuffleCount++;
      }
    }, 75);
  }

  private shuffleArray(array: string[]): string {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
  }

  public resetLabel(link: any): void {
    let charArray: string[] = link.label.split("");
    const test = this.shuffleArray(charArray);

    console.log(test);
  }
}
