import React from 'react';

export default function SplineComponent() {
  return (
    <section className="relative w-full pb-28 ">
      
      {/* 3D Globe Background - Adjusted Position */}
      <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
        <div>
          <img 
            src='/logo final-2.gif' 
            className='h-[300px] md:h-[700px] object-contain' 
            alt="Globe animation"
          />
        </div>
      </div>
 
      
      <div className="relative z-10 flex flex-col items-center justify-start px-4 md:px-10">
   <div className=" marquee-container">
  <h1 className="marquee-text ">
    <span className="text-white">We</span>
    <span className="item"> can</span>
    <span className="text-white"> make</span>
    <span className="item"> your</span>
    <span className="text-white"> business</span>
    <span className="item"> global</span>
    {/* Duplicate for seamless looping */}
    <span className="text-white"> We</span>
    <span className="item"> can</span>
    <span className="text-white"> make</span>
    <span className="item"> your</span>
    <span className="text-white"> business</span>
    <span className="item"> global</span>
     <span className="text-white"> We</span>
    <span className="item"> can</span>
    <span className="text-white"> make</span>
    <span className="item"> your</span>
    <span className="text-white"> business</span>
    <span className="item"> global</span>
    
  </h1>
</div>
        
        <div className="relative w-[300px] md:w-[800px] h-[150px] md:h-[550px] mb-8">
          <svg viewBox="0 0 500 250" className="w-full h-full">
            <path id="curve" d="M 50 200 Q 250 0 450 200" fill="transparent" />
            <text fontSize="31" fill="white">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                choose your business industry
              </textPath>
            </text>
          </svg>
        </div>
        
      
        
        <div className="flex justify-between w-full  px-4 md:px-10">
          <div className="flex flex-col gap-3 text-left text-xs md:text-xl font-semibold">
            <p>IMS (ONLINE TEACHING)</p>
            <p>E-COMMERCE</p>
            <p>BLOGGING</p>
            <p>FINANCIAL</p>
          </div>
          <div className="flex flex-col gap-3 text-right text-xs md:text-xl font-semibold">
            <p>NEWS WEBSITE</p>
            <p>PORTFOLIO</p>
            <p>CORPORATE</p>
          </div>
        </div>
      </div>
    </section>
  );
}