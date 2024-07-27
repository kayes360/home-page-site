import React from "react";

export default function ThreeSixtyScope() {
  return (
    <section className="sf-container">
      <div className="sf-content">
        <p className="flag-text">360 Scope</p>
        <h2>
          Designed For You To Get <br /> More Simple
        </h2>


        <div className="mt-[60px] ml-[80px]">
        <video
          className="w-full   "
          width="320"
          height="240"
          controls
          muted
          preload="none"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      </div>

      
    </section>
  );
}
