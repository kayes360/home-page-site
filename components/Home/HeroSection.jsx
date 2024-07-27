"use client";
import React from "react";
import MicrosoftAzure from "@/public/client/microsoft-azure.png";
import AWS from "@/public/client/aws.png";
import Accenture from "@/public/client/accenture.png";
import GoogleCloud from "@/public/client/google-cloud.png";
import Image from "next/image";
import ShiftBackground from "./Ambientbg/ShiftBackground";

export default function HeroSection() {
  return (
    <>
        <div className="sf-content pt-[100px]">
            <p className="text-base text-gray-400">We Are Softograph</p>
            <h1 className="text-7xl mt-10 mb-[100px] leading-[1.4]">Innovation through Intelligent Solutions</h1>
        </div>
   
      <div className="sf-content sf-header clients pb-[60px]">
        <p className="text-gray-400 text-sm mb-4">
          Trusted by data teams at world's leading companies
        </p>
        <div className="flex gap-4">
          <Image
            src={MicrosoftAzure}
            height={150}
            width={200}
            alt="top-client"
            className="h-auto w-[85px] me-5"
          />
          <Image
            src={AWS}
            height={150}
            width={200}
            alt="top-client"
            className="h-auto  w-[40px] me-5"
          />
          
          <Image
            src={GoogleCloud}
            height={150}
            width={200}
            alt="top-client"
            className="h-auto w-[145px] me-5"
          />
          <Image
            src={Accenture}
            height={150}
            width={200}
            alt="top-client"
            className="h-auto w-[76px] me-5"
          />
        </div>
      </div>
    </>
  );
}
