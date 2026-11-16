// "You said → I shipped": the build-in-public log on /feedback/pomocat/results.
// Add a new entry at the top whenever feedback turns into a change.
export const POMOCAT_JOURNEY = [
  {
    when: "Nov 2026",
    heard: "Dog people felt left out.",
    shipped: "Added 24 dog breeds, starting with an Aussiedoodle, next to the 19 cats.",
  },
  {
    when: "Nov 2026",
    heard: "The guard cat blocked switching browser tabs.",
    shipped: "The cat now sits below the tab bar, so you can always click away from a distraction.",
  },
  {
    when: "Nov 2026",
    heard: "A Windows tester got locked in with no way out.",
    shipped: "Added a force-quit screen and an emergency pass. Both cost XP, so they're a real decision.",
  },
  {
    when: "Nov 2026",
    heard: "Picking a new song closed the app.",
    shipped: "The window now stays open while you browse music.",
  },
  {
    when: "Nov 2026",
    heard: "Friends on Windows wanted to try it.",
    shipped: "Shipped a Windows version alongside the macOS app.",
  },
] as const;
