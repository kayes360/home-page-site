import React from "react";

export default function CTASection() {
  return (
    <section className="sf-container">
      {/* Section Title */} 
      <div className="sf-content">
        <p className="flag-text">
        Let's Talk</p>
        <h2>
        Innovation and Excellence in Action
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="col-span-1 max-w-full md:max-w-xl justify-self-end">
          <p className="font-light">
            Our sophisticated software solutions are meticulously engineered to
            comprehend and anticipate your unique business requirements,
            seamlessly embedding themselves
          </p>
        </div>
        <div className="col-span-1 justify-self-start md:justify-self-end mt-10 md:mt-0">
          <button className="border rounded-lg px-8 py-4 ">
            CONTACT SALES
          </button>
        </div>
      </div>
    </section>
  );
}

 