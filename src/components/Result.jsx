import Card from "@material-ui/core/Card";
import React from "react";

function Result({result,openPopup,id,data}) {
    return (
          <Card style={{maxWidth: "290px", marginBottom: "50px", boxShadow: "3px 3px 34px 5px rgba(0,0,0,0.75)"}}>
          <img onClick={() => openPopup(id)}  src={result.Poster}/>
          <h3 style={{textAlign: "center"}}>{result.Title}</h3>
          </Card>
      );
    }

export default Result;