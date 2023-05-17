import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SearchIcon from "@mui/icons-material/Search";
import { ListItem } from "@material-ui/core";
import InboxIcon from "@mui/icons-material/Inbox";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import "./Menu.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    background: "transparent",
    marginTop: "-30px",

    border: "none",
    padding: 0,
    cursor: "pointer",
    height: "22.5px",
    width: "22.5px",
  },
  menu: {
    position: "absolute",
    top: 0,
    left: 200,
    width: "100%",
    height: "100%",
  },
  menuItem: {
    // Example: changing the text color to red
    fontSize: "16px", // Example: changing the font size
    // Add more custom styles as needed
    marginLeft: "20%",
    fontWeight: 400,
    font: "Proxima Nova",
  },
}));

const MenuBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "38px",
        }}
      >
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.991 38C29.4795 38 37.9821 29.4934 37.9821 19C37.9821 8.50659 29.4795 0 18.991 0C8.50258 0 0 8.50659 0 19C0 29.4934 8.50258 38 18.991 38Z"
            fill="#04433B"
          />
        </svg>
        <span style={{ marginTop: "10px", marginLeft: "4px" }}>
          <ArrowForwardIosIcon
            style={{ height: "11.5px", width: "8.55px" }}
          ></ArrowForwardIosIcon>
        </span>
      </div>
      <div className={classes.root}>
        {isMobile ? (
          <>
            <Button
              className={classes.button}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon></MenuIcon>
            </Button>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                className: classes.menu,
              }}
            >
              <MenuItem
                onClick={handleClose}
                className={classes.menuItem}
                style={{ marginLeft: "80%" }}
              >
                <ListItem>
                  <CloseRoundedIcon className="MIcon" />
                </ListItem>
              </MenuItem>
              <MenuItem className={classes.menuItem}>
                <ListItem>
                  <AccountCircleRoundedIcon className="MIcon-Profile" />
                  <p style={{ marginLeft: "10px", fontSize: "14px" }}>
                    <b>Jane Smith</b>
                    <br />
                    Sales Executive
                  </p>
                </ListItem>
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                <ListItem>
                  <SearchIcon className="MIcon" /> Search
                </ListItem>
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                <ListItem>
                  <InboxIcon className="MIcon"></InboxIcon> Inbox
                </ListItem>
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                <ListItem>
                  <NotificationsNoneIcon className="MIcon"></NotificationsNoneIcon>{" "}
                  Notification
                </ListItem>
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                <ListItem>
                  <HelpOutlineRoundedIcon className="MIcon"></HelpOutlineRoundedIcon>{" "}
                  Help
                </ListItem>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button className={classes.button}>
              <SearchIcon></SearchIcon>
            </Button>
            <Button className={classes.button}>
              <InboxIcon></InboxIcon>
            </Button>

            <Button className={classes.button}>
              <NotificationsNoneIcon></NotificationsNoneIcon>{" "}
            </Button>
            <Button className={classes.button}>
              <HelpOutlineRoundedIcon></HelpOutlineRoundedIcon>
            </Button>
            <Button className={classes.button}>
              <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuBar;
