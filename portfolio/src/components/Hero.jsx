import React from 'react';
import { ChevronsDown } from 'lucide-react';
// import { ChevronDoubleDownIcon } from '@heroicons/react/16/solid';

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-[934px] bg-white pt-[150px] pb-[150px] px-[255px] flex flex-col items-center justify-center gap-[100px] relative top-[90px] text-center"
    >
      {/* Text Content */}
      <div>
        <h1 className="text-5xl font-light text-black mb-4">
          Hi, I’m <span className="font-normal">John Smith</span>
        </h1>
        <p className="text-gray-600 text-base">I design and build things.</p>
      </div>

      {/* Down Arrow Icon */}
      <div>
        <a href="#about">
          {/* <ChevronDoubleDownIcon className="animate-bounce text-black" /> */}
            <ChevronsDown size={24} className="animate-bounce text-black" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
