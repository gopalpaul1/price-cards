// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-purple-600 px-4">
      <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <span>
          {isOpen === true ? (
            <XMarkIcon className="h-6 w-6 text-purple-800" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-purple-800" />
          )}
        </span>
      </div>
      <ul className={`md:flex items-center absolute md:static duration-500 text-purple-50  bg-purple-600 pl-8 py-4 ${isOpen ? 'top-6': '-top-48'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
