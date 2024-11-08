import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { WorksComponent } from "../works/works.component";
import { FreelanceComponent } from "../freelance/freelance.component";
import { ContactComponent } from "../contact/contact.component";

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled",
};

export const routes: Routes = [
  { path: "", component: HomeComponent, data: { animation: "Route1Page" } },
  { path: "about", component: AboutComponent, data: { animation: "Route2Page" } },
  { path: "work", component: WorksComponent, data: { animation: "Route3Page" } },
  { path: "work/:projectId", component: FreelanceComponent, data: { animation: "Route4Page" } },
  { path: "contact", component: ContactComponent, data: { animation: "Route5Page" } },
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
