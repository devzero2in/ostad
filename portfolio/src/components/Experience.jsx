import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="w-[1440px] h-[732px] pt-[120px] pr-[255px] pb-[120px] pl-[255px] bg-white flex flex-col gap-[50px]">
      {/* <div className="w-full flex justify-center">
        <h2 className="text-[36px] font-medium text-center relative">
          Experience
          <span className="absolute left-0 right-0 top-1/2 border-t border-black -z-10"></span>
        </h2>
      </div> */}
      {/* Title */}
        <div className="flex items-center justify-center mb-[10px]">
            <div className="w-full border-t border-black"></div>
            <h2 className="mx-4 text-2xl font-medium text-center whitespace-nowrap">Experience</h2>
            <div className="w-full border-t border-black"></div>
        </div>

      <div className="flex flex-col gap-[50px] md:flex-row md:justify-between">
        {/* Left Experience */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="w-full md:w-[260px] border-r border-black pr-6">
            <h3 className="text-[24px] font-medium">Job Title</h3>
            <p className="text-sm">Company Name</p>
            <p className="text-sm mt-2">Apr 2018 - Dec 2022</p>
          </div>
          <ul className="text-sm space-y-2 list-disc pl-4">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula</li>
          </ul>
        </div>
      </div>

        <div className="flex flex-col gap-[50px] md:flex-row md:justify-between">
            {/* Right Experience */}
            <div className="flex flex-col md:flex-row-reverse gap-8 w-full">
                <ul className="text-sm space-y-2 list-disc pl-4 md:order-2">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula</li>
                </ul>
                <div className="w-full md:w-[260px] border-l border-black pl-6 md:order-1">
                    <h3 className="text-[24px] font-medium">Job Title</h3>
                    <p className="text-sm">Company Name</p>
                    <p className="text-sm mt-2">Apr 2018 - Dec 2022</p>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Experience