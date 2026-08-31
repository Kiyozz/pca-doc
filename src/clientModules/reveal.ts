import type { ClientModule } from "@docusaurus/types";

/* Reveals `.pca-reveal` elements as they enter the viewport.
 *
 * The hidden state lives in custom.css behind `.pca-js`, a class an inline
 * head script sets before the first paint - so nothing flashes, and with
 * JavaScript off the page renders as if none of this existed. */

const shown = "pca-reveal--in";

let observer: IntersectionObserver | null = null;
let listening = false;

function watch(): void {
  // a document that loads hidden - a background tab, a restored session -
  // is not rendered, and an observer on it delivers nothing at all. Nothing
  // would ever be revealed, so pick the work up again when it is shown.
  if (!listening) {
    listening = true;
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        watch();
      }
    });
  }

  const targets = document.querySelectorAll(`.pca-reveal:not(.${shown})`);

  if (targets.length === 0) {
    return;
  }

  // nothing to observe with: show everything rather than nothing. Reduced
  // motion is not handled here - the observer still runs, and the stylesheet
  // drops the travel and keeps the fade.
  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add(shown));

    return;
  }

  observer ??= new IntersectionObserver(
    (entries, self) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }

        entry.target.classList.add(shown);
        // one shot: scrolling back up must not play it again
        self.unobserve(entry.target);
      }
    },
    {
      // The bottom is pulled in: a sliver at the very edge of the screen
      // does not count as visible yet.
      //
      // The top is pushed far out so that everything above the viewport
      // counts as intersecting. A fast scroll jumps elements straight from
      // below the screen to above it, and since neither position
      // intersects, no threshold is crossed and the callback never runs -
      // they would stay at opacity 0 until scrolled back to.
      rootMargin: "9999px 0px -8% 0px",
    },
  );

  targets.forEach((target) => observer?.observe(target));
}

export default {
  onRouteDidUpdate() {
    // called from a layout effect, so the route's DOM is already committed.
    // Deliberately not deferred to requestAnimationFrame: that never fires
    // in a background tab, and every element would sit at opacity 0 until
    // the tab is focused
    watch();
  },
} satisfies ClientModule;
