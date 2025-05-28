import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed dark:bg-gray-900 dark:text-white top-0 w-full h-[90px] bg-white text-black z-50 px-6 md:px-[160px] py-[25px] flex items-center justify-between shadow-sm">
      <a
        href="#"
        className="border border-black dark:border-white w-[40px] h-[40px] flex items-center justify-center text-lg font-medium"
      >
        J
      </a>

      {/*  Mobile Toggle (Checkbox Hack) */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <label for="menu-toggle" className="md:hidden cursor-pointer">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex items-center gap-5 text-sm font-light">
        <a href="#about" className="hover:bg-gray-200 px-3 py-1 rounded-sm">
          about
        </a>
        <a
          href="#experience"
          className="hover:bg-gray-200 px-3 py-1 rounded-sm"
        >
          experience
        </a>
        <a href="#project" className="hover:bg-gray-200 px-3 py-1 rounded-sm">
          project
        </a>
        <a href="#contact" className="hover:bg-gray-200 px-3 py-1 rounded-sm">
          contact
        </a>
      </nav>

      {/* Action Buttons (Desktop) */}
      <div className="hidden md:flex items-center text-sm gap-4">
        <button className="border border-gray-300 px-3 py-1 rounded hover:border-black transition">
          Resume
        </button>
        <button className="border border-gray-300 px-3 py-1 rounded hover:border-black transition">
          Hire Me
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="absolute top-[90px] left-0 w-full bg-white shadow-md px-6 py-4 flex-col gap-4 text-sm font-light hidden peer-checked:flex md:hidden">
        <a href="#about" className="hover:bg-gray-100 px-2 py-1 rounded">
          about
        </a>
        <a href="#experience" className="hover:bg-gray-100 px-2 py-1 rounded">
          experience
        </a>
        <a href="#project" className="hover:bg-gray-100 px-2 py-1 rounded">
          project
        </a>
        <a href="#contact" className="hover:bg-gray-100 px-2 py-1 rounded">
          contact
        </a>
        <hr className="my-2" />
        <button className="border border-gray-300 px-3 py-1 rounded hover:border-black transition">
          Resume
        </button>
        <button className="border border-gray-300 px-3 py-1 rounded hover:border-black transition">
          Hire Me
        </button>
      </div>
    </header>
  );
};

export default Navbar;
