import { MdExpandLess } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      {" "}
      {/* Static Navbar */}
      <nav className="bg-gray-100 shadow-sm px-5 mt-5 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
          <span className="text-2xl font-bold text-gray-800">SAOR</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-black text-sm font-semibold hover:text-gray-900 flex items-center gap-1"
          >
            Home{" "}
            <span className="text-xl rotate-180">
              <MdExpandLess />
            </span>
          </a>
          <a
            href="#"
            className="text-black text-sm font-semibold hover:text-gray-900"
          >
            About
          </a>
          <a
            href="#"
            className="text-black text-sm font-semibold hover:text-gray-900 flex items-center gap-1"
          >
            Portfolio{" "}
            <span className="text-xl rotate-180">
              <MdExpandLess />
            </span>
          </a>
          <a
            href="#"
            className="text-black  font-semibold text-sm hover:text-gray-900 flex items-center gap-1"
          >
            Pages{" "}
            <span className="text-xl rotate-180">
              <MdExpandLess />
            </span>
          </a>
          <a
            href="#"
            className="text-black text-sm font-semibold hover:text-gray-900 flex items-center gap-1"
          >
            Blog{" "}
            <span className="text-xl rotate-180">
              <MdExpandLess />
            </span>
          </a>
          <a
            href="#"
            className="text-black text-sm font-semibold hover:text-gray-900"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 border border-gray-300 rounded">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-medium flex items-center gap-2">
            Get A Quote
            <span className="rotate-45">↗</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
