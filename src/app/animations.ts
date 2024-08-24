import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const routeAnimation = trigger("routeAnimations", [
  transition("* <=> *", [
    query(":enter, :leave", style({}), { optional: true }),
    group([
      // Delay 1s to allow the cover animation to cover the whole screen
      query(":leave", [animate("0ms 1000ms ease")], { optional: true }),
      query(":enter", [animate("0ms 1000ms ease")], { optional: true }),
    ]),
  ]),
]);

export const coverAnimation = trigger("coverAnimation", [
  // Animate the cover animation onto the screen and back off
  transition(":enter", [
    style({ transform: "translateY(-100%)" }),
    animate("1000ms cubic-bezier(0.87, 0, 0.13, 1)", style({ transform: "translateY(0%)" })),
  ]),
  transition(":leave", [
    style({ transform: "translateY(0)" }),
    animate("1000ms cubic-bezier(0.87, 0, 0.13, 1)", style({ transform: "translateY(100%)" })),
  ]),
]);
