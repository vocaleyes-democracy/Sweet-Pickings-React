import React, { useEffect } from "react";
import { connect } from "react-redux";
import TreeList from "../Components/TreeList";
import Map from "../Components/Map";
import { getTreeData } from "../redux/actions.js";
import { grid } from "@actionishope/shelley/styles/default";

function TreePage({ treeArray, treeData }) {
  useEffect(() => {
    treeData();
  }, [treeData]);

  return (
    <div className={grid.goal}>
      <TreeList assets={treeArray} />
      <Map assets={treeArray} />
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
