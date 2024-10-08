

export default function PlantNavBar () {

    return (

        <>
            {/*remember to fix the hamburger button*/}

            <nav className="bg-[#3CB371] border-gray-200 shadow-md">
                <div
                    className="max-w-screen-md mx-8 flex flex-wrap items-center justify-between md:container md:mx-auto pt-8 pb-8">
                    <a href="/frontend/public" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span
                            className="self-center text-3xl md:text-5xl text-[#f7b8b7] font-semibold whitespace-nowrap italic">Plant Whisperer</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#3CB371]">
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-white md:text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0  ">Home</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-white md:text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 ">Search</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-white md:text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 ">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
