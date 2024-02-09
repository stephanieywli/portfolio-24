"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroller({ children }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
