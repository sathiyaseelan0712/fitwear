import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium relative px-4 sm:px-8">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {['/', '/collection', '/about', '/contact'].map((path, index) => {
          const label = ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][index];
          return (
            <li key={label}>
              <NavLink to={path} className="flex flex-col items-center gap-1 group">
                <p>{label}</p>
                <hr className="w-2/4 border-none h-1.5 bg-gray-700 group-hover:block hidden" />
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* Right Section: Search, Profile, Cart, Menu */}
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search Icon"
        />

        {/* Profile */}
        <div className="relative group">
          <img
            onClick={() => {
              if (!token) navigate('/login');
            }}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="Profile Icon"
          />
          {token && (
            <div className="hidden group-hover:block absolute right-0 pt-4 bg-white shadow-md rounded">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart Icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu Icon"
        />
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white transition-all duration-300 ease-in-out overflow-hidden z-50 ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 border-b">
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Close Icon" />
            <p>Back</p>
          </div>
          {['/', '/collection', '/about', '/contact'].map((path, index) => {
            const label = ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][index];
            return (
              <NavLink
                key={label}
                to={path}
                onClick={() => setVisible(false)}
                className="py-3 px-6 border-b"
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
