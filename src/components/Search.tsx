import type { SearchProps } from "../typings";

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const { value, onInputChange, onSubmit } = props;

  return (
    <section className="search pt-20 pb-28 bg-bsea-bg max-xs:pt-7 max-xs:pb-14">
      <div className="page page--spacing ">
        <div className="max-w-w-720 w-full text-center  mx-auto my-0">
          <div className=" text-black font-normal text-7xl mb-4 max-xs:text-4xl max-sm:text-5xl max-lg:text-6xl max-xs:mb-2 ">
            Enter what you want to search for?
          </div>
          <form
            className="h-full flex justify-center relative flex-col w-full items-center"
            onSubmit={onSubmit}
          >
            <input
              className="relative w-full border outline-none rounded border-black p-4 text-black max-xs:p-2"
              type="text"
              name="texto"
              placeholder="Search"
              value={value}
              onChange={onInputChange}
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
  );
};
export default Search;
