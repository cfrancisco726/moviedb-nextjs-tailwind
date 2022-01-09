import Thumbnail from "./Thumbnail";

function Results({ results }) {
  // console.log("results", results);

  return (
    <div>
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {results.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
        <h1>thumbnail</h1>
      </div>
    </div>
  );
}

export default Results;
