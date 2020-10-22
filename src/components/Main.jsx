import React, { useState, Fragment } from "react";
import Search from "./Search";
import Header from "./Header";
import Results from "./Results";
import DetailMovie from "./DetailMovie";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

export default function Main() {
  //almacena el valor del input
  const [valor, setValor] = useState({});
  //almacena el resultado obtenido del primer llamado a la api
  const [results, setResults] = useState([]);
  const [ready, setReady] = useState(true);
  const [error, setError] = useState("");
  //almaceno los datos obtenidos en el segundo llamado a la api (asi puedo extraer la reseña)
  const [selected, setSelected] = useState({});


  //función para tomar el valor del input
  const handleChange = (e) => {
    let valor = e.target.value;
    setValor(valor);
  };

  // función que envia la palabra clave a la api
  const sendInfo = () => {
    setReady(false);
    axios
      .get(`https://www.omdbapi.com/?apikey=db2310a&s=${valor}`)
      .then((data) => {
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

  //función que se ejecuta cuando se le hace click a la imágen, recibe por parámetro el id de "imdbID"
  const openPopup = (id) => {
    axios(`https://www.omdbapi.com/?apikey=db2310a&i=${id}`)
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

  return selected.Title ? (
    <DetailMovie selected={selected} closePopup={closePopup} />
  ) : (
    <Fragment>
      <Header></Header>
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
