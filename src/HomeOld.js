import LinksCard from "./LinksCard";

const industryInfoLinks = [
    { title: "Powered Easy Button Delivery Toolkit", icon: "fas fa-headset" }
]

function HomeOld() {
    return (<div className="grid px-2 py-2 grid-rows-2 sm:grid-rows-1 grid-cols-4 gap-4 min-h-screen">
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
    );
}
