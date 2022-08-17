import {useState} from "react"
import './App.css';
import ExternalLink from "./ExternalLink";
import LinksCard from "./LinksCard";

const industryInfoLinks = [
    { title: "Powered Easy Button Delivery Toolkit", icon: "fas fa-headset" }
]

function App() {
    const [isOpen, toggleSidebar] = useState(true);
    return (
        <div>
            {/*Navbar*/}
            <div className="sticky top-0 z-50">
                <div>

                    <nav
                        className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">

                        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                            <div className="container-fluid flex">
                                <button className="text-gray-300 hover:text-gray-700 focus:text-gray-700 mr-4 mt-1"
                                        type="button"
                                        onClick={() => toggleSidebar(!isOpen)}>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0
                                        76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16
                                        7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837
                                        0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>
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
                <div className={`w-80 h-full shadow-md bg-white px-1 absolute collapse collapse-horizontal
                transform ${
                    isOpen
                        ? "translate-x-0 ease-out transition-medium"
                        : "-translate-x-full ease-in transition-medium"
                }`}
                >
                    <ul className="relative">
                        <li className="relative">
                            <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                               href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Sidenav link 1</a>
                        </li>
                        <li className="relative">
                            <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                               href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Sidenav link 2</a>
                        </li>
                        <li className="relative">
                            <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                               href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Sidenav link 2</a>
                        </li>
                    </ul>
                </div>
                <div>

                </div>
                {/*content*/}
                <div className="grid px-2 py-2 grid-rows-2 sm:grid-rows-1 grid-cols-4 gap-4 min-h-screen">
                    <LinksCard title="Industry Information" links={industryInfoLinks}>

                    </LinksCard>
                    <div className="flex col-span-2 ">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex col-span-2 grow flex-col lg:flex-row ">
                                <div className="block p-6 rounded-lg shadow-lg bg-white ">
                                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's
                                        content.
                                    </p>
                                    <button type="button"
                                            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button
                                    </button>
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's
                                        content.
                                    </p>
                                    <button type="button"
                                            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex  row-span-2">
                        <div className="block p-6 rounded-lg shadow-lg bg-white ">
                            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                            <p className="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <button type="button"
                                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button
                            </button>
                        </div>
                    </div>
                    <div className="flex ">
                        <div className="block p-6 rounded-lg shadow-lg bg-white">
                            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title 2</h5>
                            <p className="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <button type="button"
                                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button
                            </button>
                        </div>
                    </div>
                    <div className="flex col-span-2 ">
                        <div className="flex grow flex-col lg:flex-row  rounded-lg bg-white shadow-lg">

                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.
                                </p>
                                <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                            </div>
                            <img
                                className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
