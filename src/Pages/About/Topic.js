import React from "react";
import { useParams } from "react-router-dom";
import TreeForm from "../TreeForm";
import TreePage from "../TreePage";
import Gallery from "./Gallery";
import Story from "./Story";
import Pickers from "./Pickers";
import Growers from "./Growers";

import { Text, H1, H2, P, Grid } from "@actionishope/shelley";
import { classes as grid } from "@actionishope/shelley/styles/default/grid.st.css";

export default function Topic() {
  let { topicId } = useParams();

  const AboutContent = () => {
    if (topicId === "story") {
      return <Story />;
    } else if (topicId === "pickers") {
      return <Pickers />;
    } else if (topicId === "growers") {
      return (
        <Grid tag="main" role="main" variant={1} formatted>
          <Growers />
          <TreeForm />
          <TreePage />
        </Grid>
      );
    }
    // Need to add more info for Recipients and Gallery
    else if (topicId === "recipients") {
      return (
        <>
          <p>Recipients Info</p>
        </>
      );
    } else if (topicId === "gallery") {
      return (
        <>
          <Gallery />
        </>
      );
    }
  };

  return AboutContent();
  // <div>
  //   <h3>{AboutContent()}</h3>
  //   {/* <h3>{topicId}</h3> */}
  // </div>
}
