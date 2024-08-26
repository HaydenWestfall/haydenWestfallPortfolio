import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./routing/app-routing.module";
import { ContactComponent } from "./contact/contact.component";
import { SvgIconComponent } from "./svg-icon/svg-icon.component";
import { ParallaxButtonDirective } from "./directives/parallax-button.directive";
import { CoverComponent } from "./cover/cover.component";
import { ProjectsTwoComponent } from "./projects-two/projects-two.component";
import { IntersectionDirective } from "./directives/intersection.directive";
import { FreelanceComponent } from "./freelance/freelance.component";
import { ShowcaseComponent } from "./showcase/showcase.component";
import { Contact2Component } from './contact2/contact2.component';

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
    CoverComponent,
    ProjectsTwoComponent,
    IntersectionDirective,
    FreelanceComponent,
    ShowcaseComponent,
    Contact2Component,
  ],
  imports: [BrowserAnimationsModule, FormsModule, RouterOutlet, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
