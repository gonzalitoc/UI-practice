import { ResultProps } from "../typings";

function Result(props: ResultProps) {
  const { searchText } = props;
  return (
    <section className="h-full page py-24 ">
      <div className="page--spacing my-24">
        <h3 className="text-5xl font-semibold">Search Results:</h3>
        <p className="text-3xl mt-7">{searchText}</p>
      </div>
    </section>
  );
}

export default Result;
