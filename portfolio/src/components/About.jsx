import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full bg-[#F2F2F2] py-[120px] px-[20px] md:px-[255px]">
        {/* Title */}
        <div className="flex items-center justify-center mb-[50px]">
            <div className="w-full border-t border-black"></div>
            <h2 className="mx-4 text-2xl font-medium text-center whitespace-nowrap">About Me</h2>
            <div className="w-full border-t border-black"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-10">
            {/* Text Block */}
            <div className="flex-1 text-sm leading-relaxed text-gray-700 space-y-4">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis. 
                Vivamus facilisis ligula id fringilla gravida. Suspendisse ultricies sollicitudin lacus, 
                et rutrum nunc bibendum sed.
            </p>
            <p>
                Donec tincidunt tellus sed libero ultricies, eu semper enim molestie. Etiam lorem quam, 
                tincidunt nec malesuada eu, interdum nec leo. Vestibulum ante ipsum primis in faucibus orci 
                luctus et ultrices posuere cubilia curae; Morbi placerat tortor sed felis tristique.
            </p>
            <p>
                Nunc aliquam magna ut nunc vestibulum, ut dictum nulla sagittis. Cras egestas magna sed nisl 
                pellentesque, sed lobortis felis convallis. Phasellus eget ex at est lobortis iaculis eget non 
                risus. Etiam ultricies at est sit amet condimentum.
            </p>
            </div>

            {/* Image Placeholder */}
            <div className="w-full md:w-[320px] h-[320px] bg-gray-300 rounded-md flex-shrink-0"></div>
        </div>
    </section>

  )
}

export default About