import { GithubIcon, Upload } from 'lucide-react'
import React from 'react'

const Project = () => {
  return (
    <section id="project" className="w-[1440px] h-[1424px] pt-[120px] pr-[255px] pb-[120px] pl-[255px] bg-[#F2F2F2] flex flex-col gap-[100px] mx-auto">
      {/* Featured Project Title */}
      <div className="relative w-full flex items-center justify-center">
        <hr className="absolute left-0 right-0 border-t border-black" />
        <h2 className="bg-[#F2F2F2] px-4 text-[24px] font-medium z-10">Featured Project</h2>
      </div>

      {/* Featured Projects */}
      <div className="flex flex-col gap-10">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="bg-gray-300 w-full md:w-1/2 h-[150px] py-28" />
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-medium">Project Name</h3>
            <p className="text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis. Vivamus facilisis ligula id fringilla gravida.</p>
            <hr className="my-2 border-black w-full" />
            <div className="mt-2 text-sm flex gap-3">
                    <span>HTML</span>
                    <span>CSS</span> 
                    <span>JS</span> 
                    <span>Figma</span>
                    <span>React</span>
            </div>
            <div className="mt-1 flex gap-2 text-xl">
              <span><GithubIcon size={20} /></span>
              <span><Upload size={20} /></span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
          <div className="bg-gray-300 w-full md:w-1/2 h-[150px] py-28" />
          <div className="w-full md:w-1/2 text-right">
            <h3 className="text-3xl font-medium">Project Name</h3>
            <p className="text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis. Vivamus facilisis ligula id fringilla gravida.</p>
            <hr className="my-2 border-black w-full" />
            <div className="w-full text-right items-end">
                <div className="mt-2 text-sm flex gap-3">
                        <span>HTML</span>
                        <span>CSS</span> 
                        <span>JS</span> 
                        <span>Figma</span>
                        <span>React</span>
                </div>
                <div className="mt-1 flex gap-2 text-xl">
                <span><GithubIcon size={20} /></span>
                <span><Upload size={20} /></span>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Project Title */}
      <div className="relative w-full flex items-center justify-center">
        <hr className="absolute left-0 right-0 border-t border-black" />
        <h2 className="bg-[#F2F2F2] px-4 text-[24px] font-medium z-10">Other Project</h2>
      </div>

      {/* Other Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className="flex gap-4 mb-6">
            <div className="bg-gray-300 w-[80px] h-[80px] p-12" />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-medium mb-3">Project Name</h3>
                <p className="text-xs mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis.</p>
              </div>
              <div>
                <hr className="my-2 border-black w-full" />
                <div className="text-xs flex gap-3 mt-2">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JS</span>
                </div>
                <div className="mt-1 flex gap-2 text-xl">
                  <span><GithubIcon size={20} /></span>
                  <span><Upload size={20} /></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project