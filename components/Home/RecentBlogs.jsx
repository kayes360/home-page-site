import { BlogData, CaseData } from "@/data/homeData";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Navigation } from "swiper/modules";
import blog1 from "@/public/images/blog/b1.png";

// Import Swiper styles
import "swiper/css";
export default function RecentBlogs() {
  return (
    <section className="sf-container ">
      <div className="sf-content">
        <p className="flag-text">Recent Blogs</p>
        <div className="flex gap-4">
          <h2 className="pr-[10px]">
            A Compendium of Thought Leadership and Innovation
          </h2>
          <div className="flex gap-3 self-end">
            <FaAngleLeft className="blog-nav-prev cursor-pointer" size={24} />
            <FaAngleRight className="blog-nav-next cursor-pointer" size={24} />
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3.5}
          loop
          className="blog-slider"
          modules={[Navigation]}
          navigation={{
            nextEl: ".blog-nav-prev",
            prevEl: ".blog-nav-next",
          }}
        >
          {BlogData.map((blog) => (
            <SwiperSlide className="blog-slide" key={blog.id}>
              <div className="blog-thumb">
                <Image
                  src={blog.blogImage.src}
                  alt="blog1"
                  width={350}
                  height={275}
                  className="rounded-t-lg"
                />
              </div>
              <div className="blog-content">
                <p className="blog-date">{blog.blogDate}</p>
                <p className="blog-text">{blog.blogText}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
