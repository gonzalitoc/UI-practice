export default function Search() {
  return (
    <section className="search pt-20 pb-28 bg-bsea-bg ">
      <div className="page page--spacing ">
        <div className="max-w-w-720 w-full text-center  mx-auto my-0">
          <div className=" text-black font-normal text-7xl mb-4 ">How can we help?</div>
          <form className="h-full flex justify-center  relative flex-col w-full items-center ">
            <input
              className=" relative w-full border outline-none rounded border-black p-4 text-black"
              type="text"
              name="texto"
              placeholder="Search"
              id=""
            />
            <svg
              className="absolute right-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </form>
        </div>
      </div>
    </section>
  )
}
