import React, { useState,useRef } from "react";

import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";



const BentoTilt =({children,className=''})=>{
  const [transformStyle,setTransformStyle] = useState("")
  const itemRef = useRef()

  const handleMouseMove = (e) =>{
    if(!itemRef.current) return 

    const {left,top,width,height} = itemRef.current.getBoundingClientRect()

    const relativeX = (e.clientX -left)/ width
    const relativeY = (e.clientY -top)/ height

    const tiltX = (relativeY - 0.5) * 30
    const tiltY = (relativeX - 0.5) * -30 

    const newTransformStyle = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg )scale3d(0.95,0.98,0.98)`




    setTransformStyle(newTransformStyle)

  }

  const handleMouseLeave =() =>{
    setTransformStyle('')
  }

  return (
    <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform:transformStyle}}>
      {children}
    </div>
  )
}

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the MetaGame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse youself in a rich and ever-expanding universe where in
            vibrant array of products coverage into an interconnected overlay
            expreience on your world
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md  md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </BentoTilt>
        <div className="grid h-[125vh]   grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            />{" "}
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 ms:ms-0  ">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 me-14 md:col-span-1 ms:me-0  ">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            />
          </BentoTilt>
          <div className="bento-tilt_2 ">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>
          <div className="bento-tilt_2">
            <video
              src="/videos/feature-5.mp4"
              loop
              autoPlay
              muted 
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
