import React, { useState, useEffect } from "react";
// import Fuse from "Fuse.js";
import app from "../../component/Api/app";
import cms from "../../component/Api/cms";

import { Grid, Typography, Paper } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

function DisplaySearch() {
  const [institutions, setInstitutions] = useState([]);

  const checkAndSync = async () => {
    if (app.checkIfCanSync()) {
      const response = await cms.getAllInstitutions();
      setInstitutions(response);
      return;
    }
    const responseString = window.localStorage.getItem("institutions") 
    const response = responseString ? JSON.parse(responseString): []
    setInstitutions(response);
  };
  useEffect(() => checkAndSync(), []);

  const history = useHistory();
  // const navigateTo = () => history.push("/componentURL");
  const goToDetails = (id) => {
    history.push(`/componentURL/${id}`);
  };

  

  return (
    <div>
      {institutions.map(({ id, name, province, photo }) => (
        <Grid item onClick={() => goToDetails(id)} style={{ padding: "0.8rem" }}>
          <Paper variant="outlined">
            <Grid style={{ display: "flex" }}>
              <Grid>
                <img
                  src={photo && photo.url}
                  style={{ width: "300px", marginRight: "40px" }}
                  alt=""
                ></img>
              </Grid>

              <Grid>
                <Typography variant="h5">
                  <h1>{name}</h1>
                  {/* <p>{id}</p> */}
                </Typography>
                <h2>{province}</h2>
                <Link to={`/componentURL/${id}`}>View</Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </div>
  );
}
export default DisplaySearch;
