import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./routing/app-routing.module";
import { SvgIconComponent } from "./svg-icon/svg-icon.component";
import { ParallaxButtonDirective } from "./directives/parallax-button.directive";
import { WorksComponent } from "./works/works.component";
import { IntersectionDirective } from "./directives/intersection.directive";
import { FreelanceComponent } from "./freelance/freelance.component";
import { ShowcaseComponent } from "./showcase/showcase.component";
import { HideOnScrollDirective } from "./directives/hide-on-scroll.directive";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    SvgIconComponent,
    ParallaxButtonDirective,
    WorksComponent,
    IntersectionDirective,
    FreelanceComponent,
    ShowcaseComponent,
    HideOnScrollDirective,
    WorksComponent,
  ],
  imports: [FormsModule, RouterOutlet, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
