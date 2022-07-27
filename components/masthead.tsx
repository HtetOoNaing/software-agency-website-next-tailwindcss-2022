import React from "react";
import Image from "next/image";

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/TheWorldNeedsHeroesDC.mp4" type="video/mp4" />
      </video>
      <div className="flex-grow-0 pt-10 transition-opacity duration-1000">
        <Image
          src="/assets/logo.png"
          width={60}
          height={55}
          alt="logo"
        />
      </div>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex flex-col items-center justify-center">
        <h1 className="mb-6 text-4xl xl:text-5xl">DC</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>World's Greatest Super Heroes</span>
        </h2>
      </div>
    </div>
  );
};

export default Masthead;
