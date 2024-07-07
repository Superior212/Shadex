import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MemoLogo from "@/icons/Logo";
import { NavIcon, NavLinks } from "@/lib/data";
import { ShopContext } from "@/context/Shop-Context";
import { ShopContextType } from "@/types";

const NavBar = () => {
  const { getTotalItems } = useContext(ShopContext) as ShopContextType;
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string | undefined) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div>
      {/* Mobile */}
      <nav className="md:hidden bg-white p-2 flex items-center justify-between py-4 px-2 w-full fixed">
        <Link className="text-white font-bold" to="/">
          <MemoLogo className="w-20 h-16" />
        </Link>
        <div className="flex items-center">
          {NavIcon.slice(0, 2).map((icon, index) => (
            <Button
              key={index}
              className="hover:bg-transparent bg-transparent"
              onClick={() => handleNavigation(icon.path)}>
              <img src={icon.icon} className="h-6 w-6" />
              {icon.title === "cart" && getTotalItems() > 0 && (
                <div className=" flex items-center justify-center absolute top-[2rem] right-[3.2rem] text-center w-4 h-4 bg-red-500 text-white rounded-[50%] p-1 text-xs">
                  {getTotalItems()}
                </div>
              )}
            </Button>
          ))}
          <Menu
            className="h-8 w-8 text-black cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {/* Desktop */}
      <nav className="hidden md:flex bg-white mx-auto p-2 items-center justify-between sm:shadow-md py-0 px-[3rem] w-full fixed z-10">
        <Link className="text-white font-bold" to="/">
          <MemoLogo className="md:w-28 md:h-24" />
        </Link>
        <div>
          {NavLinks.map((link, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive ? "text-[#00A181]  mx-6" : "text-[#3A3A3A] mx-6"
              }
              to={link.path}>
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className="flex gap-x-8">
          {NavIcon.map((icon, index) => (
            <Button
              key={index}
              className="hover:bg-transparent bg-transparent"
              onClick={() => handleNavigation(icon.path)}>
              <img src={icon.icon} className="h-6 w-6" />
              {icon.title === "cart" && getTotalItems() > 0 && (
                <div className=" flex items-center justify-center absolute top-[2rem] right-[3.7rem] text-center w-4 h-4 bg-red-500 text-white rounded-[50%] p-1 text-xs">
                  {getTotalItems()}
                </div>
              )}
            </Button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <main>
          <div className="md:hidden">
            <div className="flex flex-col items-start space-y-5 bg-[#DFF4F0] w-full h-[40vh] z-20 absolute top-0 left-0 pt-20">
              {NavLinks.map((link, index) => (
                <Link
                  key={index}
                  className="text-black mx-6 lato font-[400]"
                  to={link.path}>
                  {link.title}
                </Link>
              ))}

              {/* <div className="flex gap-x-12">
                {NavIcon.map((icon, index) => (
                  <div key={index} className="relative">
                    <Button
                      className="hover:bg-transparent bg-transparent"
                      onClick={() => handleNavigation(icon.path)}>
                      <img src={icon.icon} className="h-6 w-6" />
                      {icon.title === "cart" && getTotalItems() > 0 && (
                        <div className=" flex items-center justify-center absolute top-1 right-3 text-center w-4 h-4 bg-red-500 text-white rounded-[50%] p-1 text-xs">
                          {getTotalItems()}
                        </div>
                      )}
                    </Button>
                  </div>
                ))}
              </div> */}
              <div
                onClick={toggleMenu}
                className="w-10 h-10 absolute top-0 right-3 rounded-full border-[#292D32] border flex items-center justify-center">
                <X className="h-4 w-4 text-black cursor-pointer" />
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default NavBar;
