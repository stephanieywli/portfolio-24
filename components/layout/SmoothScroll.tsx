"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroller({ children }: any) {
  return <ReactLenis root>{children}</ReactLenis>;
}
