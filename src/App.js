import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, toggleSidebar] = useState(false);
  return (
    <div>
      {/*Navbar*/}
      <div className="sticky top-0 z-50">
        <div>
          <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
              <div className="container-fluid flex">
                <button
                  className="text-gray-300 hover:text-gray-700 focus:text-gray-700 mr-4 mt-1"
                  type="button"
                  onClick={() => toggleSidebar(!isOpen)}
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0
                                        76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16
                                        7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837
                                        0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    />
                  </svg>
                </button>

                <a className="text-xl text-black font-semibold">Menu</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen min-w-full">
        {/*Sidebar*/}
        <div
          className={`w-80 h-full shadow-md bg-white px-1 absolute collapse collapse-horizontal
                transform ${
                  isOpen
                    ? "translate-x-0 ease-out transition-medium"
                    : "-translate-x-full ease-in transition-medium"
                }`}
        >
          <ul className="relative">
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Sidenav link 1
              </a>
            </li>
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Sidenav link 2
              </a>
            </li>
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Sidenav link 2
              </a>
            </li>
          </ul>
        </div>

        {/*content*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3 py-3 min-w-full min-h-max">
          <div className="md:col-span-2 block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Understanding Powered Enterprise
            </h5>
            <p className="font-normal text-gray-700">
              Powered Enterprise is an outcome driven business transformation
              solution that combines deep functional knowledge, proven delivery
              capability and cloud technologies and robotic process automation
              to drive sustainabile change, rising performance and lasting
              value.
            </p>

            <iframe
              className=" lg:h-96 md:h-64 w-full aspect-video mt-2 lg:mt-5"
              src="https://www.youtube.com/embed/vUt1aaLxLuY"
            />
          </div>
          <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Firm Priorities
            </h5>
            <ul className="mt-3 lg:mt-5">
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Advisory Strategy
                  </a>
                </div>
              </li>

              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a className="ml-3 tracking-wide font-medium " href="#">
                    Accelerate 2025
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Consulting Client Promise
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Flagship Stories
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Flex with Purpose
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Team Resources
            </h5>
            <ul className="mt-3 lg:mt-5">
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Source
                  </a>
                </div>
              </li>

              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a className="ml-3 tracking-wide font-medium " href="#">
                    Devlivery Model Overview
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Team of Choice
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Powered Knowledge Mgmt
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Powered FAQ
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    PES (Tool of Choice)
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Learning & Development
            </h5>
            <p className="font-normal text-gray-700">
              We’ve developed a list of courses to help you achieve success in
              your role as an Engagement Partner. For a more in-depth overview
              of our courses, visit the KPMG website.
            </p>
            <button
              type="button"
              class="w-full inline-block mt-2 lg:mt-5 px-6 py-2 border-2 border-gray-600 text-black-600 font-bold text-xs 
              leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Go to Learning & Development
            </button>
          </div>
          <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Powered Evolution
            </h5>
            <p className="font-normal text-gray-700">
              Powered Evolution sustains client investment in the Target
              Operating Model (TOM) by keeping it refreshed after
              implementation. This ensures that clients continously improve and
              extend capabilities and capacity as their business evolves.
            </p>
          </div>

          <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Powered Resources
            </h5>
            <ul className="mt-3 lg:mt-5 overflow-y-auto xl:h-80 md:h-64">
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    The Powered Method
                  </a>
                </div>
              </li>

              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a className="ml-3 tracking-wide font-medium " href="#">
                    Powered Devlivery Toolkits
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Powered Sales Toolkit
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Powered Insights (TOM)
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Powered Marketing
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Flex with Purpose
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Flex with Purpose
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Flex with Purpose
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Success Stories/Industry Info
            </h5>
            <ul className="mt-3 lg:mt-5 ">
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Powered Easy Button Devlivery Toolkit
                  </a>
                </div>
              </li>

              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a className="ml-3 tracking-wide font-medium " href="#">
                    Powered Flaghship Stories
                  </a>
                </div>
              </li>
              <li className="mt-3 lg:mt-5">
                <div class="flex items-center flex-row hover:text-sky-500">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  <a
                    className="ml-3 tracking-wide font-medium hover:text-sky-500"
                    href="#"
                  >
                    Submit Win Story
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
