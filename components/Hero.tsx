"use client";

import MagicButton from "./ui/MagicButton"
import dynamic from 'next/dynamic'
import { TextGenerateEffect } from "./ui/TextGenerate"
import { FaLocationArrow } from "react-icons/fa"
import { motion } from "motion/react"
import { globeConfig, sampleArcs } from "@/data/index"

const World = dynamic(() => import("./ui/Globe").then((m) => m.World), {
  ssr: false,
});

const Hero = () => {
  return (
    <header className='pb-20 pt-36 h-full max-w-7xl w-full'>
      <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
          <div className="flex justify-start my-20 z-20 absolute top-20 left-0 sm:top-0 sm:left-50 sm:justify-center">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-center">
              <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Can&apos;t make it? We got you
              </h2>
              
              <TextGenerateEffect 
                className="text-[40px] md:text-5xl lg:text-6xl"
                words="CrowdGate"
              />
              <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Buy/Sell your tickets fast, safe & easy.
              </p>

              <a href="#about">
                <MagicButton 
                  title="Get started"
                  icon={<FaLocationArrow />}
                  position='right'
                /> 
              </a>
            </div>
          </div>
          <div className="absolute w-full bottom-0 inset-x-0 h-40 pointer-events-none select-none from-transparent z-40" />
          <div className="absolute w-full top-50 left-0 h-full md:h-full z-10">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
          <div className="absolute bottom-0 right-0 z-20">
            <p className="tracking-widest text-xs text-center text-blue-100 max-w-80">
              Your new favorite platform for all things entertainment, coming in 2025.
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </header>
  )
}

export default Hero