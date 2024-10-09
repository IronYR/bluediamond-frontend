import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const NavItem = ({text, link}) => {
  return (
    <>
      <li className="mt-5 lg:mt-0">
        <NavLink
          to={"/"+link}
          className="px-2 py-6 text-sm leading-[22px] text-gray-500 hover:text-blue-500 md:px-3 lg:px-6"
        >
          {text}
          {/* <span className="hidden lg:inline"> templates </span> */}
        </NavLink>
      </li>
    </>
  );
};
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [["Services", "services"],["Industries", "industries"], ["Featured Insights", "blog"], ["About","about"]]
  return (
    <section>
      <div className="container">
        <div className="flex flex-col p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <Link
              to="/"
              className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out lg:pr-8"
            >
              bluediamond.ai
            </Link>
            <button
              className="rounded-lg focus:outline-none lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="size-8">
                {open ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav
            className={`${
              open ? "flex" : "hidden"
            } grow flex-col lg:flex lg:flex-row lg:justify-end`}
          >
            <ul className="list-none space-y-2 lg:inline-flex lg:items-center lg:space-y-0">
              {navItems.map(([text, link]) => (
                <NavItem key={link} text={text} link={link} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
