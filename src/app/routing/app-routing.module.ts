import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { ProjectsTwoComponent } from "../projects-two/projects-two.component";
import { FreelanceComponent } from "../freelance/freelance.component";
import { Contact2Component } from "../contact2/contact2.component";

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled",
};

export const routes: Routes = [
  { path: "", component: HomeComponent, data: { animation: "Route1Page" } },
  { path: "about", component: AboutComponent, data: { animation: "Route2Page" } },
  { path: "work", component: ProjectsTwoComponent, data: { animation: "Route3Page" } },
  { path: "work/:projectId", component: FreelanceComponent, data: { animation: "Route4Page" } },
  { path: "contact", component: Contact2Component, data: { animation: "Route4Page" } },
  { path: "**", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
