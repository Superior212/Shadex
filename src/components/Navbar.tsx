import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import MemoLogo from "@/icons/Logo";
import { NavICon, NavLinks } from "@/lib/data";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Mobile */}
      <nav className="md:hidden bg-white p-2 flex items-center justify-between py-4 px-2 w-full md:rounded-bl-[50px] md:rounded-br-[50px]">
        <Link className="text-white font-bold" to="/">
          <MemoLogo className="w-20 h-16" />
        </Link>
        <div className="flex items-center">
          {NavICon.slice(0, 2).map((icon, index) => (
            <Button key={index} className="hover:bg-transparent bg-transparent">
              <icon.icon className="h-6 w-6 text-black" />
            </Button>
          ))}
          <Menu
            className="h-8 w-8 text-black cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {/* Desktop */}
      <nav className="hidden md:flex bg-white mx-auto p-2 items-center justify-between sm:shadow-md py-0 px-[3rem] w-full">
        <Link className="text-white font-bold" to="/">
          <MemoLogo className="md:w-28 md:h-28" />
        </Link>
        <div>
          {NavLinks.map((link, index) => (
            <Link key={index} className="text-black mx-6" to={link.path}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-x-8">
          {NavICon.map((icon, index) => (
            <Button key={index} className="hover:bg-transparent bg-transparent">
              <icon.icon className="h-6 w-6" />
            </Button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <main>
          <div className="md:hidden">
            <div className="flex flex-col items-start space-y-5 bg-[#DFF4F0] w-full h-screen z-20 absolute top-0 left-0 pt-20">
              {NavLinks.map((link, index) => (
                <Link key={index} className="text-black mx-6" to={link.path}>
                  {link.title}
                </Link>
              ))}

              <div className="flex gap-x-12">
                {NavICon.map((icon, index) => (
                  <Button
                    key={index}
                    className="hover:bg-transparent bg-transparent">
                    <icon.icon className="h-6 w-6" />
                  </Button>
                ))}
              </div>
              <div
                onClick={toggleMenu}
                className="w-10 h-10 absolute top-0 right-3 flex items-center justify-center">
                <X className="h-8 w-8 text-black cursor-pointer" />
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default NavBar;
