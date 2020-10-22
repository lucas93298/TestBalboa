import React from "react";
import Result from './Result'


function Results({results, data, openPopup}) {
  return (
          <section className="results">
            {results.map(e => (
              <Result key={e.imdbID} id={e.imdbID} result={e} data={data} openPopup={openPopup}></Result>
            ))}
          </section>

  );
}

export default Results;
