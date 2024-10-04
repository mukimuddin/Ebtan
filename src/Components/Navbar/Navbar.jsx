import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Navbar = () => {
  // ========== Custom State Part
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  // ========== Function Part 
  const handleShow = () => {
    setShow((prev) => !prev); // Toggle show state
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShow(false); // Hide menu if click is outside
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className='navBar pt-[33px]'>
        <div className="container">
          <div className="nav_row flex justify-between">
            <div className="logo_col">
              <img src="images/logo.png" alt="Logo" />
            </div>
            <div className="icon_col relative">
              <HiOutlineBars3BottomLeft onClick={handleShow} className='text-[35px] active:text-brandColor rotate-180 cursor-pointer' />
              <ul
                ref={menuRef}
                className={`absolute top-9 right-[-100px] w-[250px] bg-brandColor flex flex-col gap-5 items-center rounded-[20px] p-[10px] 
                  transition-all duration-300 ease-in-out 
                  ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
              >
                <li><Link to="/" className='text-[22px] font-semibold text-[#fff] font-inter'>Home</Link></li>
                <li><Link to="/" className='text-[22px] font-semibold text-[#fff] font-inter'>About us</Link></li>
                <li><Link to="/" className='text-[22px] font-semibold text-[#fff] font-inter'>Product</Link></li>
                <li><Link to="/" className='text-[22px] font-semibold text-[#fff] font-inter'>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
