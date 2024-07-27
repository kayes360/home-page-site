import React from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CaseData } from "@/data/homeData";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";

export default function CaseStudiesSection() {
  return (
    <section className="sf-container">
      <div className="sf-content">
        <p className="flag-text">Case Studies</p>
        <div className="flex gap-4">
          <h2 className="pr-[10px]">
            Softograph organize your Information and Knowledge System's
            components.
          </h2>

          <div className="flex gap-3 self-end">
            <FaAngleLeft className="case-nav-prev cursor-pointer" size={24} />
            <FaAngleRight className="case-nav-next cursor-pointer" size={24} />
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3.5}
          loop
          className="case-slider"
          modules={[Navigation]}
          navigation={{
            nextEl: ".case-nav-prev",
            prevEl: ".case-nav-next",
          }}
        >
          {CaseData.map((caseData) => (
            <SwiperSlide className="case-slide" key={caseData.id}>
              <Link href="#">
                <h4>{caseData.caseTitle}</h4>
                <Image
                  src={caseData.caseImage.src}
                  alt="case-oneasddd"
                  height={250}
                  width={200}
                  className="h-auto min-w-full"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin 
// git push -u origin main
