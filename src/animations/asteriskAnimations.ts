import { gsap } from "gsap";

export type AsteriskAnimation = (target: string) => void;

/**
 * "ChromaSpin"
 * Slides in from the right, then spins slowly while cycling
 * through the full accent color spectrum via hue-rotate.
 */
export const chromaSpin: AsteriskAnimation = (target) => {
  // Entrance
  gsap.fromTo(
    target,
    { opacity: 0, x: 120, rotate: 60, scale: 0.6 },
    { opacity: 1, x: 0, rotate: 0, scale: 1, duration: 1.4, ease: "expo.out", delay: 0.1 }
  );

  // Continuous slow spin
  gsap.to(target, {
    rotate: 360,
    duration: 18,
    ease: "none",
    repeat: -1,
    delay: 1.5,
  });

  // Hue-rotate through full spectrum
  gsap.to(target, {
    filter: "drop-shadow(0 0 16px #C8FF00) hue-rotate(360deg)",
    duration: 8,
    ease: "none",
    repeat: -1,
    delay: 1.5,
  });
};

/**
 * "PulseFloat"
 * Fades in with a gentle scale bloom, then floats up and down
 * while softly pulsing between two accent colors.
 */
export const pulseFloat: AsteriskAnimation = (target) => {
  // Entrance: bloom in from center
  gsap.fromTo(
    target,
    { opacity: 0, scale: 0.3, rotate: -30 },
    { opacity: 1, scale: 1, rotate: 0, duration: 1.6, ease: "elastic.out(1, 0.6)", delay: 0.2 }
  );

  // Floating up/down
  gsap.to(target, {
    y: -18,
    duration: 3,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 1.8,
  });

  // Slow gentle rotation
  gsap.to(target, {
    rotate: 20,
    duration: 5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 1.8,
  });

  // Pulse between violet and cyan glow
  gsap.to(target, {
    filter: "drop-shadow(0 0 24px #00F5D4) hue-rotate(120deg)",
    duration: 3.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 1.8,
  });
};

/**
 * "WarmBreath"
 * Floats in softly like a feather, then breathes in and out with a warm
 * amber-to-pink glow — slow, gentle, and inviting.
 */
export const warmBreath: AsteriskAnimation = (target) => {
  // Entrance: drift in from slightly above, very soft
  gsap.fromTo(
    target,
    { opacity: 0, y: -40, scale: 0.7, rotate: 15 },
    { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 2.2, ease: "power2.out", delay: 0.3 }
  );

  // Very slow, wide breathing scale
  gsap.to(target, {
    scale: 1.12,
    duration: 5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 2.5,
  });

  // Gentle float — barely moves, like resting on water
  gsap.to(target, {
    y: -10,
    duration: 6,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 2.5,
  });

  // Very slow sway left/right
  gsap.to(target, {
    rotate: 12,
    duration: 8,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 2.5,
  });

  // Warm amber → soft pink glow, long and slow
  gsap.fromTo(
    target,
    { filter: "drop-shadow(0 0 10px #FFB703) hue-rotate(0deg)" },
    {
      filter: "drop-shadow(0 0 22px #FF2D78) hue-rotate(40deg)",
      duration: 7,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2.5,
    }
  );
};

export const asteriskAnimations = {
  chromaSpin,
  pulseFloat,
  warmBreath,
} as const;

export type AsteriskAnimationName = keyof typeof asteriskAnimations;
