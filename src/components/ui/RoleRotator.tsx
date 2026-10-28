"use client";

import React, { useState, useEffect } from "react";

const ROLES = ["engineer", "architect", "designer"];

export function RoleRotator() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(ROLES[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    // If paused, hold the current word for 2.2s before deleting
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(timeout);
    }

    const currentRole = ROLES[roleIndex];

    // When typing completes, pause to let the user read
    if (!isDeleting && charIndex === currentRole.length) {
      setIsPaused(true);
      return;
    }

    // When deleting completes, switch to next role
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }

    // Typing speed vs deleting speed
    const typingDelay = isDeleting ? 45 : 85;
    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, roleIndex]);

  return (
    <p className="mt-2 sm:mt-3 text-base sm:text-lg font-mono text-text-muted flex items-center min-h-[1.75rem]">
      <span>junior software&nbsp;</span>
      <span className="text-accent-green font-semibold">
        {ROLES[roleIndex].substring(0, charIndex)}
      </span>
      <span className="inline-block text-accent-green font-bold animate-pulse ml-0.5 select-none">
        _
      </span>
    </p>
  );
}
