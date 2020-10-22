import React, { useState, Fragment } from "react";
import Search from "./Search";
import Header from "./Header";
import Results from "./Results";
import DetailMovie from "./DetailMovie";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

export default function Main() {
  const [valor, setValor] = useState({});
  const [results, setResults] = useState([]);
  const [ready, setReady] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState({});

  const handleChange = (e) => {
    let valor = e.target.value;
    setValor(valor);
  };

  const sendInfo = () => {
    setReady(false);
    axios
      .get(`http://www.omdbapi.com/?apikey=db2310a&s=${valor}`)
      .then((data) => {
        debugger;
        if (data.data.Error) {
          setError(data.data.Error);
        } else {
          setError("");
          let result = data.data.Search;
          setResults(result.slice(5));
          setReady(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const openPopup = (id) => {
    axios(`http://www.omdbapi.com/?apikey=db2310a&i=${id}`)
      .then(({ data }) => {
        console.log(data);
        setSelected(data);
        setReady(true);
      })
      .catch((err) => console.log(err));
  };
  const closePopup = () => {
    setSelected({});
  };

  const searchGenre = (e) => {
    let select = e.target.value;
  };
  return selected.Title ? (
    <DetailMovie selected={selected} closePopup={closePopup} />
  ) : (
    <Fragment>
      <Header searchGenre={searchGenre}></Header>
      <Search handleChange={handleChange} sendInfo={sendInfo}></Search>
      {ready && error.length === 0 ? (
        <Results
          results={results}
          openPopup={openPopup}
          data={selected}
        ></Results>
      ) : (
        <h1>{error || <CircularProgress color="secondary" />}</h1>
      )}
    </Fragment>
  );
}
