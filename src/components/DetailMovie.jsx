import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Popup({ selected, closePopup }) {
  const classes = useStyles();
  return (
    <Grid className="container">
      <Grid item xs={6} container>
        <section className="popup">
          <div className="content">
            <h2>{selected.Title}</h2>
            <img src={selected.Poster} />
            <p>{selected.Plot}</p>
            <h5>Actors: {selected.Actors}</h5>

            <Button
              onClick={closePopup}
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Close
            </Button>
          </div>
        </section>
      </Grid>
    </Grid>
  );
}

export default Popup;
