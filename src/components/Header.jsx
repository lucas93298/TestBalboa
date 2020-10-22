import React from "react";
import { FormControl, InputLabel, Select, Grid } from "@material-ui/core";

function Header({ searchGenre }) {
  return (
    <Grid>
      <FormControl>
        <InputLabel style={{ color: "white" }} htmlFor="age-native-simple">
          Genre
        </InputLabel>
        <Select native style={{ background: "white" }} onChange={searchGenre}>
          <option value="Action">Action</option>
          <option value="Horror">Horror</option>
          <option value="Adventure">Adventure</option>
          <option value="Thriller">Thriller</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
        </Select>
      </FormControl>
    </Grid>
  );
}

export default Header;
