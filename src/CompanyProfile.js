import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@material-ui/core";
import "./CompanyProfile.css";
import Cimage from "./company.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DownloadIcon from "@mui/icons-material/DownloadOutlined";
import DoNotDisturbOffIcon from "@mui/icons-material/DoNotDisturbOffOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import We from "./weworkk.png";
const useStyles = makeStyles((theme) => ({
  menu: {
    position: "absolute",
    top: 0,
    left: 200,
    width: "100%",
    height: "100%",
  },
  button: {
    // background: "transparent",

    border: "1px solid black",
    padding: 0,
    cursor: "pointer",
    height: "10.5px",
    width: "10.5px",
    color: "red",
  },
  menuItem: {
    // Example: changing the text color to red
    fontSize: "72px", // Example: changing the font size
    // Add more custom styles as needed
    marginLeft: "20%",
    fontWeight: 400,
    font: "Proxima Nova",
  },
}));
const CompanyProfile = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  return (
    <div>
      {isMobile ? (
        <></>
      ) : (
        <div style={{ marginTop: "30px", marginLeft: "40px" }}>
          <Stack direction="row" spacing={2}>
            <Paper style={{ borderRadius: "8px" }}>
              <MenuList
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#7B8786",
                  borderRadius: "8px",
                  fontSize: "16px",
                  height: "300px",
                  padding: "8px",
                }}
              >
                <MenuItem style={{ color: "657372", fontSize: "18px" }}>
                  Overview
                </MenuItem>
                <MenuItem>Welcome</MenuItem>
                <MenuItem>Product Capabilities</MenuItem>
                <MenuItem>Customer Success Stories</MenuItem>
                <MenuItem>File Sharing</MenuItem>
                <MenuItem>Our Deck</MenuItem>
              </MenuList>
            </Paper>
          </Stack>
        </div>
      )}
      <div className={isMobile ? "Mmobile" : "Mheading"}>
        <div>
          <h1 style={{ textAlign: "left", fontSize: "1.5em" }}>
            {" "}
            Company Profile
          </h1>
        </div>

        {isMobile ? (
          <div
            style={{
              right: 0,
              position: "absolute",
              marginRight: "3%",
              marginTop: "5%",
            }}
          >
            <MoreVertIcon></MoreVertIcon>
          </div>
        ) : (
          <div
            style={{
              right: 0,
              position: "absolute",
              marginRight: "3%",
              marginTop: "1%",
              border: "2px solid #D3D7D7",
              borderRadius: "6px",
              padding: "4px",
            }}
          >
            <Button className={classes.button}>
              <DownloadIcon style={{ color: "#657372" }}></DownloadIcon>{" "}
            </Button>
            <Button className={classes.button}>
              {" "}
              <DoNotDisturbOffIcon
                style={{ color: "#657372" }}
              ></DoNotDisturbOffIcon>
            </Button>
            <Button className={classes.button}>
              {" "}
              <DeleteOutlineOutlinedIcon
                style={{ color: "#657372" }}
              ></DeleteOutlineOutlinedIcon>{" "}
            </Button>
          </div>
        )}
        <div className={isMobile ? "Mmobileheading" : "Mwebheading"}>
          <img src={Cimage} style={{ height: "500px", width: "95%" }}></img>
          <div
            style={{
              zIndex: 2,
              marginTop: "-350px",
              backgroundColor: "#FFFFFF",
              opacity: "70%",
              height: "60%",
              width: "40%",
              marginLeft: "30%",
            }}
          >
            <h1 style={{ fontSize: "2em", textAlign: "center" }}>
              <img src={We} style={{ width: "60%", height: "60%" }}></img>
            </h1>
            <p style={{ fontSize: "20.67px", color: "#000000" }}>
              <b>For all the ways you work, we're here</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyProfile;
