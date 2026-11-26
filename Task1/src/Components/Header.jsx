
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `pb-2 text-[11px] tracking-[2px] transition-colors ${
      isActive
        ? "border-b border-black text-black"
        : "border-b border-transparent text-gray-500 hover:text-black"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block py-3 text-sm tracking-[2px] ${
      isActive ? "text-black font-medium" : "text-gray-500"
    }`;

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-[#f8f5f0] border-b border-[#e8e1d8] relative z-50">

      <div className="min-h-20 px-5 md:px-10 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg
            className="w-7 h-7 text-[#b89b83]"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="18"
              y="2.2"
              width="22.34"
              height="22.34"
              transform="rotate(45 18 2.2)"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M18 9.2L20.1 15.9L26.8 18L20.1 20.1L18 26.8L15.9 20.1L9.2 18L15.9 15.9L18 9.2Z"
              stroke="currentColor"
              strokeWidth="0.95"
            />
            <circle cx="18" cy="18" r="1.4" fill="currentColor" />
          </svg>

          <div>
            <h1 className="text-2xl tracking-[8px] font-serif">MAHI</h1>
            <p className="text-[8px] tracking-[2px]">
              MAISON DE BEAUTÉ
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={navClass}>HOME</NavLink>
          <NavLink to="/products" className={navClass}>PRODUCTS</NavLink>
          <NavLink to="/about" className={navClass}>ABOUT US</NavLink>
        </nav>

        {/* Right Text */}
        <p className="hidden md:block text-xs tracking-[2px] text-gray-500">
          BOTANICAL BEAUTY HOUSE
        </p>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#29231f] p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-[#f8f5f0] border-t border-[#e8e1d8] shadow-md px-6 py-5">

          <NavLink
            to="/"
            end
            className={mobileNavClass}
            onClick={closeMenu}
          >
            HOME
          </NavLink>

          <NavLink
            to="/products"
            className={mobileNavClass}
            onClick={closeMenu}
          >
            PRODUCTS
          </NavLink>

          <NavLink
            to="/about"
            className={mobileNavClass}
            onClick={closeMenu}
          >
            ABOUT US
          </NavLink>

          <p className="text-[9px] tracking-[3px] text-gray-400 mt-5 pt-4 border-t border-[#e8e1d8]">
            BOTANICAL BEAUTY HOUSE
          </p>

        </nav>
      )}

    </header>
  );
}

export default Header;
