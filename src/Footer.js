import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./Footer.css";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Button } from "@material-ui/core";
const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div className={isMobile ? "mobile" : "web"}>
      <Button style={{ marginLeft: "6px" }}>
        <MarkUnreadChatAltOutlinedIcon />
      </Button>
      <Button>
        <ShareOutlinedIcon></ShareOutlinedIcon>
      </Button>
    </div>
  );
};
export default Footer;
