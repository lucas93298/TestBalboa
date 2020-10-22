import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

export default function Search({ handleChange, sendInfo, ...props }) {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <TextField
          {...props}
          style={{
            width: "60%",
            border: "1px solid black",
            background: "white",
            marginTop: "30px",
          }}
          label="Title"
          onChange={handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Button
          onClick={sendInfo}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Find
        </Button>
      </Grid>
    </Grid>
  );
}
