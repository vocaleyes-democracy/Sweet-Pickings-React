import React, { useEffect } from "react";
import { connect } from "react-redux";
import TreeList from "../Components/TreeList";
import Map from "../Components/Map";
import { getTreeData } from "../redux/actions.js";

import clsx from "clsx";
import { Grid } from "@actionishope/shelley";
import { classes as grid } from "@actionishope/shelley/styles/default/grid.st.css";
import { classes as spacing } from "@actionishope/shelley/styles/default/spacing.st.css";

function TreePage({ treeArray, treeData }) {
  useEffect(() => {
    treeData();
  }, [treeData]);

  return (
    <div className={clsx(grid.goal, spacing.mt4, spacing.mb4)}>
      {/* Using the new grid variant 5 which we defined in styles/grid.st.css */}
      <Grid variant={5}>
        <TreeList assets={treeArray} />
        <Map assets={treeArray} />
      </Grid>
    </div>
  );
}

const msp = state => {
  return { treeArray: state.trees };
};

const mdp = dispatch => {
  return {
    treeData: () => dispatch(getTreeData())
  };
};

export default connect(msp, mdp)(TreePage);
