import {useState} from "react"
import './App.css';


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

                {/*content*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3 py-3 min-w-full">

                    <div
                        className="md:col-span-2 block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy
                            technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700">Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>

                        <iframe className="lg:h-80 md:h-64 w-full aspect-video " src="https://www.youtube.com/embed/vUt1aaLxLuY"/>
                    </div>
                    <div
                        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy
                            technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700">Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                    <div
                        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy
                            technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700">Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                    <div
                        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy
                            technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700">Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>1</li>
                            <li>7</li>
                            <li>7</li>
                        </ul>
                    </div>
                    <div
                        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy
                            technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700">Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                    <div
                        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy
                            technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700">Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                    <div
                        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy
                            technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700">Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>


                </div>
            </div>
        </div>

    );
}

export default App;
