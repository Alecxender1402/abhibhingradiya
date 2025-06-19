"use client";

export function UnifiedBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-white -z-10 dark:hidden" />
      <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-sky-200/30 via-blue-300/20 to-slate-800 -z-10" />
    </>
  );
}
