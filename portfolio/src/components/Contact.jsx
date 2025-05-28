import { GithubIcon, Linkedin } from "lucide-react"

const Contact = () => {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="w-full max-w-[1440px] h-[520px] pt-[120px] px-[255px] bg-white dark:bg-gray-900 dark:text-white flex flex-col items-center gap-[73px] mx-auto"
    >
      {/* Contact Title */}
      <div className="relative w-full flex items-center justify-center">
        <hr className="absolute left-0 right-0 border-t border-black dark:border-white" />
        <h2 className="bg-[#FFFFFF] dark:bg-gray-900 dark:text-gray-200 px-4 text-[24px] font-medium z-10">Contact</h2>
      </div>

      {/* Details */}
      <div className="text-center w-[550px] h-[283px] flex flex-col items-center gap-[120px]">
        <div className="w-full text-md font-medium">
          <p className="mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
                               amet vestibulum felis. Vivamus facilisis ligula id fringilla gravida.</p>
          <button className="border border-gray-400 px-3 py-1 rounded text-sm hover:border-black transition">
            Write Message
          </button>
        </div>

        <div className="flex gap-4">
            <span><GithubIcon size={28} className="text-gray-500" /></span>
            <span><Linkedin size={28} className="text-gray-500" /></span>
        </div>
        
      </div>
    </section>
  )
}

export default Contact