import React from "react"
import heroImg from "../components/assets/images/hero.png"
import heroImgback from "../components/assets/images/hero-shape-purple.png"
import { BsFillLightningChargeFill } from "react-icons/bs"
import {  FaGraduationCap, FaUsers } from "react-icons/fa"
import { About } from "./About"
import { Courses } from "./Courses"
import Contact from './Contact';
import { Blog } from "./Blog"


export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      <Courses />
      <Contact />
      <Blog />
    </>
  )
}
export const HomeContent = () => {
  return (
    
     
    <section className="bg-secondary py-10 h-[92vh] md:h-full">
      <div className="container">
        <div className="flex items-center justify-center md:flex-col">
          <div className="left w-1/2 text-black md:w-full">
            <h1 className="text-4xl leading-tight text-black font-semibold">
              Launch your <br /> new career with a <br /> Professional Certificate
            </h1>
            <h3 className="text-lg mt-3">Unlimited access to all 60+ instructors.</h3>

            <form className="flex items-center max-w-lg mx-auto mt-5">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                Explore
              </button>
            </form>

            <span className="text-[14px]">
              You`re guaranteed to find something that`s right for you.
            </span>
          </div>
          <div className="right w-1/2 md:w-full relative">
            <div className="images relative">
              <img src={heroImgback} alt="" className="absolute top-32 left-10 w-96 md:left-10" />
              <div className="img h-[85vh] w-full">
                <img src={heroImg} alt="" className="h-full w-full object-contain z-20 relative" />
              </div>
            </div>
            <div className="content">
              <button
                className="bg-white shadow-md absolute top-56 left-0 z-30 p-2 flex items-center rounded-md"
                style={{ zIndex: 30 }}
                >
                  <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400">
                    <BsFillLightningChargeFill size={25} />
                  </div>
                  <div className="text flex flex-col items-start px-4">
                    <span className="text-sm text-black">Congratulations</span>
                    <span className="text-[12px]">Your admission completed</span>
                  </div>
                </button>
                <button
                  className="bg-white shadow-md absolute bottom-32 left-48 z-30 p-2 flex items-center rounded-md pr-8"
                  style={{ zIndex: 30 }}
                >
                  <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-blue-400">
                    <FaGraduationCap size={25} />
                  </div>
                  <div className="text flex flex-col items-start px-4">
                    <span className="text-sm text-black">450K</span>
                    <span className="text-[12px]">Assisted Student</span>
                  </div>
                </button>
                <button
                  className="bg-white shadow-md absolute top-56 -right-32 z-30 p-2 flex items-center rounded-md"
                  style={{ zIndex: 30 }}
                >
                  <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400">
                    <FaUsers size={25} />
                  </div>
                  <div className="text flex flex-col items-start px-4">
                    <span className="text-sm text-black">User Experience Class</span>
                    <span className="text-[12px]">Tomorrow is our</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;