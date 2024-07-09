import { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchHeaderOpen, setSearchHeaderOpen] = useState<boolean>(false);

  const preview: React.CSSProperties = {
    visibility: isSearchHeaderOpen ? "visible" : "hidden",
    width: isSearchHeaderOpen ? "auto" : "0",
  };

  return (
    <header className="bg-black h-h-88">
      <section className="flex justify-between items-center h-full page page--spacing">
        <div className="flex items-center">
          <a
            className=""
            title="Go to goabstract.com"
            href="https://www.goabstract.com"
          >
            <svg
              className="w-32 max-xs:w-28"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 51"
              preserveAspectRatio="xMinYMid slice"
            >
              <g className="" fill="#fff">
                <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
                <circle cx="21.24" cy="29.58" r="4.96"></circle>
              </g>
              <g className="" fill="#fff">
                <path
                  className=""
                  d="M70.9 28.81c2.37-6.59 3.32-9.26 4.19-12 1.26 3.92 2.56 7.58 4.08 12zM72.54 12L62.33 38.91h5.22l2.17-6.29h10.63l2.13 6.29h5.26L77.91 12z"
                ></path>
                <path
                  className=""
                  d="M98.43 35.56c-2.82 0-4.46-2.33-4.46-6.37 0-3.62 1.91-5.9 4.61-5.9 2.55 0 4.12 2.32 4.12 6.13 0 4-1.64 6.14-4.27 6.14m-4.34-13.07V12h-4.46v26.9h4.27v-2.47a6.31 6.31 0 0 0 5.63 2.86c4.69 0 7.81-3.66 7.81-9.87s-2.85-9.87-7.31-9.87a7.3 7.3 0 0 0-5.94 2.94z"
                ></path>
                <path
                  className=""
                  d="M116.71 22.8a4.77 4.77 0 0 1 4.29 2.67l3.32-2.25a8.44 8.44 0 0 0-7.48-3.82c-4.69 0-7.36 2.75-7.36 5.73s1.87 4.61 4.81 5.53l2 .65c2.86.91 3.51 1.45 3.51 2.71s-1.07 2-3 2a5.34 5.34 0 0 1-4.84-3.09l-3.47 2.29a9.35 9.35 0 0 0 8.12 4.27c4.73 0 7.67-2.56 7.67-6.07 0-3-1.91-4.61-5.26-5.68l-2-.61c-2.44-.76-3-1.3-3-2.44s.92-1.87 2.82-1.87"
                ></path>
                <path
                  className=""
                  d="M133.3 23.52h3.7V20h-3.7v-6.2h-4.44l-.08 6.2h-3v3.57h3v10.4a5.92 5.92 0 0 0 1.07 4c.77.92 2 1.38 3.9 1.38a13.24 13.24 0 0 0 3.32-.43v-3.59a5.51 5.51 0 0 1-1.83.35c-1.38 0-1.94-.69-1.94-2.64z"
                ></path>
                <path
                  className=""
                  d="M143.77 20h-4.27v19h4.5v-8.88a7.63 7.63 0 0 1 1-4.36 4.43 4.43 0 0 1 4-1.89 6.15 6.15 0 0 1 1.64.25V20a5.3 5.3 0 0 0-1.64-.3 5.44 5.44 0 0 0-5.26 3.18z"
                ></path>
                <path
                  className=""
                  d="M163.54 30.93a5.57 5.57 0 0 1-.84 3 4.61 4.61 0 0 1-4 2c-2 0-2.9-1-2.9-2.4a2.34 2.34 0 0 1 1.64-2.33 18.72 18.72 0 0 1 6.07-1.15zm4.25-4c0-3-.4-4.54-1.58-5.65s-3.09-1.83-5.69-1.83c-4.85 0-7.91 2.29-8.21 6.42l4.28.38c.23-2.1 1.26-3.29 3.59-3.29a3.65 3.65 0 0 1 2.63.81 3 3 0 0 1 .73 2.29v1c-3 .19-6.68.72-8.55 1.56a5.25 5.25 0 0 0-3.48 5.08c0 3.4 2.45 5.57 5.92 5.57a7.63 7.63 0 0 0 6.22-2.71c.41 1.9 1.75 2.61 4.14 2.61a6.21 6.21 0 0 0 2-.31V36c-1.73.31-2-.7-2-2.18z"
                ></path>
                <path
                  className=""
                  d="M175.35 29.31c0-4.23 2-6.17 4.57-6.17 1.8 0 3.17.84 3.7 3.35l4-1.37A7.33 7.33 0 0 0 180 19.4c-5.69 0-9.27 3.78-9.27 10s3.51 10.06 9 10.06c4.31 0 6.83-2.28 7.93-5.45l-4-1.37a3.51 3.51 0 0 1-3.7 3.09c-2.86-.01-4.61-2.22-4.61-6.42z"
                ></path>
                <path
                  className=""
                  d="M196.23 23.52h3.67V20h-3.67v-6.2h-4.44l-.08 6.2h-3v3.57h3v10.4a5.92 5.92 0 0 0 1.07 4c.77.92 2 1.38 3.9 1.38a13.24 13.24 0 0 0 3.32-.43v-3.59a5.51 5.51 0 0 1-1.83.35c-1.38 0-1.94-.69-1.94-2.64z"
                ></path>
              </g>
            </svg>
            <img
              src="/hc/theming_assets/01HZH4D4XDDYSK70D51BKJEBMH"
              alt="Logo"
              className="logo h-0"
            />
          </a>
          <a
            href="#"
            className="font-light  text-white pl-3 pt-1 pb-1 text-2xl border-l-2 border-solid border-white block hover:underline ml-4 max-xs:text-xl max-xs:pl-1 max-xs:ml-2"
          >
            Help Center
          </a>
        </div>
        <div className="flex items-center lg:hidden ">
          <button onClick={() => setSearchHeaderOpen(!isSearchHeaderOpen)}>
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              viewBox="0 0 24 24"
            >
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            </svg>
          </button>
          <div
            className="space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen((prev: boolean) => !prev)}
          >
            {isNavOpen ? (
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <>
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-8 bg-white"></span>
              </>
            )}
          </div>
        </div>

        <div className="justify-center items-center gap-4 hidden space-x-8 lg:flex">
          <form style={preview}>
            <input
              name="query"
              id="query"
              placeholder="Search"
              className="outline-none w-265 font-light py-2.5 px-5 border-solid border-transparent border rounded-lg text-xl"
            />
          </form>
          <a
            onClick={() => setSearchHeaderOpen(!isSearchHeaderOpen)}
            href="#"
            className="bg-bs-bg text-white border-solid border-white border rounded-lg font-light text-2xl py-2 px-5"
          >
            Submit a request
          </a>
          <a
            href="#"
            className="bg-bl-bg text-white hover:text-bl-bg transition-all duration-700 hover:bg-white rounded-lg font-light text-2xl py-2 px-8"
          >
            Sign in
          </a>
        </div>
      </section>
      {isNavOpen && (
        <div className="lg:hidden  bg-bs-bg absolute w-full pb-11 pt-11 z-50">
          <div className="flex flex-col items-center">
            <a
              href="#"
              className=" text-white transition-colors duration-300 block pb-4 hover:text-header-color-text font-light text-2xl border-b border-header-color-text text-center w-96"
            >
              Submit a request
            </a>

            <a
              href="#"
              className="text-white transition-colors duration-300 hover:text-header-color-text  pt-4  rounded-lg font-light text-2xl "
            >
              Sign in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
