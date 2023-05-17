import React from "react";
import logo from "./logo.svg";
import HeaderImage from "./headerImage.png";
import WeWork from "./wework.png";
import Sale from "./sale.png";
import "./Header.css";
const Headers = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "3%",
        }}
      >
        <h1>WeWork + Salesforce</h1>
        {/* </div> */}
        {/* <div
        style={{
          display: "flex",
          justifyContent: "",
        }}
      > */}
        <button
          style={{
            height: "40px",
            width: "147px",
            alignContent: "right",
            marginRight: "2%",
            marginTop: "18px",
            backgroundColor: "#00B686",
            borderColor: "#00B686",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Publish/Share
        </button>
      </div>
      <div
        style={{
          position: "relative",
          width: "98%",
        }}
      >
        <div
          style={{
            height: "191px",
            marginLeft: "3%",
            zIndex: 1,
          }}
        >
          <img
            src={HeaderImage}
            style={{
              transform: "scaleX(-1)",
              height: "100%",
              width: "100%",
              borderRadius: "6px",
            }}
          ></img>
        </div>
        <div
          style={{
            bottom: "-30px",
            left: 0,
            zIndex: 2,
            position: "absolute",
            marginLeft: "4%",
            backgroundColor: "white",
            height: "101px",
            width: "200px",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              marginLeft: "-127px",
            }}
          >
            <img
              src={WeWork}
              style={{
                height: "70px",
                width: "60px",
                marginTop: "2px",
              }}
            ></img>
          </div>

          <div
            style={{
              marginLeft: "80px",
              marginTop: "-76px",
            }}
          >
            <img
              src={Sale}
              style={{
                height: "77px",
                width: "80px",
              }}
            ></img>
          </div>
        </div>
        <div
          className="slanted-box "
          style={{
            top: 0,
            right: 0,

            // paddingRight: "30%",
            // marginLeft: "200px",
            backgroundColor: "transparent",
            opacity: "70%",
            position: "absolute",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontWeight: "900",
              fontSize: "28.88px",
              fontFamily: "Proxima Nova",
              zIndex: "2",
            }}
          >
            Workspace <br />
            Proposal
          </p>
        </div>
      </div>
    </div>
  );
};
export default Headers;
