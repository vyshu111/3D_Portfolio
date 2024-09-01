import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ?  "text-red-400":"text-indigo-400"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-red-400": "text-indigo-400"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
