import { animate, group, query, state, style, transition, trigger } from "@angular/animations";

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
export const coverAnimation2 = trigger("coverAnimation2", [
  state(
    "initial",
    style({
      transform: "translateY(100%)",
    })
  ),
  state(
    "show",
    style({
      transform: "translateY(0)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translateY(-100%)",
    })
  ),
  transition("initial => show", animate("1000ms cubic-bezier(0.87, 0, 0.13, 1)")),
  transition("show <=> hide", animate("1000ms cubic-bezier(0.87, 0, 0.13, 1)")),
  transition("hide <=> initial", animate("0ms")),
]);
