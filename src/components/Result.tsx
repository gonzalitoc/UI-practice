import { useEffect, useState } from "react";
import { ResultProps, ResultData } from "../typings";


function Result({ searchText }: ResultProps) {
  const [result, setResult] = useState<ResultData | null>(null)
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${searchText}`)
      .then(data => data.json())
      .then(data => {
        if (data.title && data.extract) {
          setResult(data);
          setError(false);
        } else {
          setResult(null);
          setError(true);
        }
      })
      .catch(() => {
        setResult(null);
        setError(true);
      });
  }, [searchText])

  return (
    <section className="h-full page py-24 ">
      <div className="page--spacing my-24">
        <h3 className="text-5xl font-semibold text-text-color">Search Results:</h3>
        {result && !error && (
          <div className="mt-7">
            <h2 className="text-3xl mt-4 font-bold rounded-xl">{result.title}</h2>
            <p className="text-xl mt-4">{result.extract}</p>
            {result.thumbnail?.source && (
              <img src={result.thumbnail.source} alt={result.title} className="mt-4 w-64" />
            )}
          </div>
        )}

        {error && (
          <div className="text-red-500 text-xl mt-6">
            No se encontró información sobre: <strong>{searchText}</strong>
          </div>
        )}

      </div>
    </section>
  );
}

export default Result;
