import React from "react";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import "./ProjectScope.css";

const ProjectScope = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
        }}
      >
        <div style={{ marginLeft: "3%", marginTop: "6%" }}>
          <h1 style={{ textAlign: "left", fontSize: "1.5em" }}>
            Project Scope Recap
          </h1>
        </div>
        <div
          style={{
            top: 0,
            right: 0,
            position: "absolute",
            marginRight: "3%",
            marginTop: "-2%",
          }}
        >
          <p style={{ color: "#7B8786" }}>Mutual Action Plan</p>
          <br />
          <div style={{ marginTop: "-30px" }}>
            <CropSquareIcon style={{ color: "green" }} />
            <CropSquareIcon />
            <CropSquareIcon />
            <CropSquareIcon />
            <CropSquareIcon />
            <CropSquareIcon />
            <CropSquareIcon />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "3%",
          marginTop: "30px",
        }}
      >
        <button className="MButton">Basic Info</button>
        <button className="MButton">Files</button>
        <button className="MButton">Mutual Action</button>
        <button className="MButton">Contact</button>
      </div>
    </div>
  );
};
export default ProjectScope;
