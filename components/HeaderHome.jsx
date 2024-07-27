import React from "react";
import HeroSection from "@/components/Home/HeroSection";
import ShiftBackground from "./Home/Ambientbg/ShiftBackground";
import Menu from "./Menu";

export default function HeaderHome() {
  return (
    <header className="sf-container">
      <ShiftBackground />
      <Menu />
      <HeroSection />
    </header>
  );
}
