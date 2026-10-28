/**
 * Slow, luxurious smooth scroll with easeInOutCubic easing
 * specifically tuned for editorial web applications.
 */
export function slowSmoothScrollTo(
  targetSelector: string,
  duration = 900,
  offset = 56
) {
  let targetElement: HTMLElement | null = null;

  if (targetSelector === "/" || targetSelector === "#" || targetSelector === "#about") {
    targetElement = document.getElementById("about") || document.body;
  } else if (targetSelector.startsWith("#")) {
    targetElement = document.querySelector(targetSelector);
  }

  if (!targetElement) return;

  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  const elementRect = targetElement.getBoundingClientRect();
  const targetPosition =
    targetElement === document.body
      ? 0
      : Math.max(0, elementRect.top + startPosition - offset);
  const distance = targetPosition - startPosition;

  // If already at target, no animation needed
  if (Math.abs(distance) < 4) return;

  let startTime: number | null = null;

  // easeInOutCubic for a silky, gentle start and soft decelerated stop
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
