"use client";

import About from "@/components/Home/About";

import CTASection from "@/components/Home/CTASection";
import CaseStudiesSection from "@/components/Home/CaseStudiesSection";
import HowWeWork from "@/components/Home/HowWeWork";
import OurOfferings from "@/components/Home/OurOfferings";
import RecentBlogs from "@/components/Home/RecentBlogs";
import ThreeSixtyScope from "@/components/Home/ThreeSixtyScope";
import OurSolutions from "@/components/Home/OurSolutions";
import HeaderHome from "@/components/HeaderHome";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <About />
      <CaseStudiesSection />
      <OurOfferings/>
      <ThreeSixtyScope />
      <HowWeWork />
      <RecentBlogs />
      <OurSolutions />
    </>
  );
}
