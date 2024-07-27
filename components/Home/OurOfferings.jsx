import Image from "next/image";
import React from "react";
import pinnedImageOne from "@/public/images/pinsection/s1.jpg";
import pinnedImageTwo from "@/public/images/pinsection/s2.webp";
import pinnedImageThree from "@/public/images/pinsection/s3.png";
import pinnedImageFour from "@/public/images/pinsection/s4.jpg";
export default function OurOfferings() {
  return (
    <section className="sf-container">
      <div className="sf-content">

        {/* <div className="flex items-center">
          <div className="">
            <p className="flag-text">Our Offerings</p>
            <h2>Code That Knows You</h2>
            <div className="text-gray-400 ml-20 mt-20 max-w-[60%]">
              Our sophisticated software solutions are meticulously engineered
              to comprehend and anticipate your unique business requirements,
              seamlessly embedding themselves within your operational
              frameworks. Through the application of advanced algorithms and
              bespoke functionalities, our code evolves in concert with your
              organizational dynamics, ensuring a personalized and intuitive
              experience that not only meets but exceeds your operational
              aspirations.
            </div>
          </div>

          <Image
            src={pinnedImageOne}
            height={400}
            width={400}
            alt="pinnedimage"
            className="size-96 mt-[120]"
          />
        </div> */}

        {/* <div className="flex items-center">
          <div className="">
            <p className="flag-text">Our Offerings</p>
            <h2>Unlocking Frontier Tech</h2>
            <div className="text-gray-400 ml-20 mt-20 max-w-[60%]">
            In our pursuit of innovation, "Unlocking Frontier Tech" epitomizes
              our commitment to navigating the cutting edge of technology. By
              harnessing the potential of emerging technologies such as
              artificial intelligence, blockchain, and quantum computing, we
              deliver solutions that transcend conventional boundaries. Our
              expertise lies in transforming these avant-garde advancements into
              pragmatic applications, tailored to enhance your business
              operations. Through meticulous research and sophisticated
              development, we unveil the untapped possibilities within frontier
              tech, empowering your organization to stay ahead in an
              ever-evolving digital landscape. 
            </div>
          </div>

          <Image
            src={pinnedImageTwo}
            height={400}
            width={400}
            alt="pinnedimage"
            className="size-96 mt-[120]"
          />
        </div> */}
        {/* <div className="flex items-center">
          <div className="">
            <p className="flag-text">Our Offerings</p>
            <h2>Strategies That Do Wonders</h2>
            <div className="text-gray-400 ml-20 mt-20 max-w-[60%]">
            Our approach to crafting meticulous, data-driven plans that propel
              businesses towards unparalleled success. Our team of experts
              delves deep into market analysis, harnessing predictive algorithms
              and advanced analytics to uncover hidden opportunities and
              potential pitfalls. By integrating cutting-edge methodologies with
              a profound understanding of industry dynamics, we design
              strategies that are not only innovative but also robust and
              adaptable. These bespoke strategies are meticulously tailored to
              align with your unique business objectives, ensuring sustainable
              growth and a competitive edge. With our guidance, witness your
              business strategies transform into powerful catalysts for
              exceptional results.
            </div>
          </div>

          <Image
            src={pinnedImageThree}
            height={400}
            width={400}
            alt="pinnedimage"
            className="size-96 mt-[120]"
          />
        </div> */}


        <div className="flex items-center">
          <div className="">
            <p className="flag-text">Our Offerings</p>
            <h2>Decisions Made Easy</h2>
            <div className="text-gray-400 ml-20 mt-20 max-w-[60%]">
            Our commitment to simplifying the intricacies of business
              decision-making through sophisticated tools and expert insights.
              Leveraging advanced data analytics, machine learning, and
              predictive modeling, we provide you with clear, actionable
              intelligence derived from complex datasets. Our methodologies
              distill multifaceted information into comprehensible insights,
              enabling you to make informed decisions with confidence. By
              integrating comprehensive data visualization and real-time
              reporting, we ensure that critical information is at your
              fingertips, transforming uncertainty into clarity. Trust in our
              expertise to streamline your decision-making processes, empowering
              you to steer your business with precision and insight.
            </div>
          </div>

          <Image
            src={pinnedImageFour}
            height={400}
            width={400}
            alt="pinnedimage"
            className="size-96 mt-[120]"
          />
        </div>
      
     
        
      </div>
    </section>
  );
}
