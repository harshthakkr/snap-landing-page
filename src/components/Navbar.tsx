import logo from "../images/logo.svg";
import hamburger from "../images/icon-menu.svg";
import iconTodo from "../images/icon-todo.svg";
import iconCalendar from "../images/icon-calendar.svg";
import iconReminders from "../images/icon-reminders.svg";
import iconPlanning from "../images/icon-planning.svg";
import iconClose from "../images/icon-close-menu.svg";
import iconArrowDown from "../images/icon-arrow-down.svg";
import iconArrowUp from "../images/icon-arrow-up.svg";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  return (
    <div className="relative flex justify-between items-center mb-16">
      {isOpen && (
        <div
          className={`md:hidden block absolute right-0 top-0 bg-white pl-4 shadow-xl w-48 pb-3 rounded-xl`}
        >
          <div className="flex justify-end mb-5">
            <img
              src={iconClose}
              className="cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 cursor-pointer">
              <p onClick={() => setShowFeatures(!showFeatures)}>Features</p>
              {!showFeatures && <img src={iconArrowDown} />}
              {showFeatures && <img src={iconArrowUp} />}
            </li>
            {showFeatures && (
              <ul className="flex flex-col gap-3 ml-6">
                <li className="flex gap-3 items-center cursor-pointer">
                  <img src={iconTodo} />
                  <p>Todo List</p>
                </li>
                <li className="flex gap-3 items-center cursor-pointer">
                  <img src={iconCalendar} />
                  <p>Calendar</p>
                </li>
                <li className="flex gap-3 items-center cursor-pointer">
                  <img src={iconReminders} />
                  <p>Reminders</p>
                </li>
                <li className="flex gap-3 items-center cursor-pointer">
                  <img src={iconPlanning} />
                  <p>Planning</p>
                </li>
              </ul>
            )}
            <li className="flex items-center gap-3 cursor-pointer">
              <p onClick={() => setShowCompany(!showCompany)}>Company</p>
              {!showCompany && <img src={iconArrowDown} />}
              {showCompany && <img src={iconArrowUp} />}
            </li>
            {showCompany && (
              <ul className="flex flex-col gap-3 ml-6">
                <li className=" cursor-pointer">History</li>
                <li className=" cursor-pointer">Our Team</li>
                <li className=" cursor-pointer">Blog</li>
              </ul>
            )}
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">About</li>
          </ul>
        </div>
      )}
      <img src={logo} alt="logo" />
      <ul className="hidden md:block md:flex text-med-gray font-medium justify-between gap-8 lg:gap-16">
        <li className="relative cursor-pointer hover:text-almost-black flex items-center gap-1 lg:gap-3">
          <p onClick={() => setShowFeatures(!showFeatures)}>Features</p>
          {!showFeatures && <img src={iconArrowDown} />}
          {showFeatures && <img src={iconArrowUp} />}
          {showFeatures && (
            <ul className="absolute top-10 right-0 space-y-3 shadow-2xl rounded-xl w-40 p-6">
              <li className="flex gap-3 items-center">
                <img src={iconTodo} />
                <p>Todo List</p>
              </li>
              <li className="flex gap-3 items-center">
                <img src={iconCalendar} />
                <p>Calendar</p>
              </li>
              <li className="flex gap-3 items-center">
                <img src={iconReminders} />
                <p>Reminders</p>
              </li>
              <li className="flex gap-3 items-center">
                <img src={iconPlanning} />
                <p>Planning</p>
              </li>
            </ul>
          )}
        </li>
        <li className="relative cursor-pointer hover:text-almost-black flex items-center gap-1 lg:gap-3">
          <p onClick={() => setShowCompany(!showCompany)}>Company</p>
          {!showCompany && <img src={iconArrowDown} />}
          {showCompany && <img src={iconArrowUp} />}
          {showCompany && (
            <ul className="absolute top-10 right-0 space-y-3 w-32 shadow-2xl rounded-xl p-6">
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          )}
        </li>
        <li className="cursor-pointer hover:text-almost-black">Careers</li>
        <li className="cursor-pointer hover:text-almost-black">About</li>
      </ul>
      <div className="flex gap-3">
        <button className="hidden md:block px-2 lg:px-6 py-3 font-medium text-med-gray hover:text-almost-black">
          Login
        </button>
        <button className="hidden md:block px-6 py-3 font-medium text-med-gray hover:text-almost-black border-2 border-med-gray rounded-2xl hover:border-almost-black">
          Register
        </button>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
        <img src={hamburger} />
      </button>
    </div>
  );
};

export default Navbar;
