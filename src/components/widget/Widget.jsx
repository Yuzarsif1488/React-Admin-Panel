import React from "react";
import "./Widget.scss";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Person3RoundedIcon from "@mui/icons-material/Person3Rounded";
import BorderOuterRoundedIcon from "@mui/icons-material/BorderOuterRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
const Widget = ({ type }) => {
  let data;
  // temporary

  const amount = 100;
  const diff = 20;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <Person3RoundedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0,0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all orders",
        icon: (
          <BorderOuterRoundedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165,32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View all earnigns",
        icon: (
          <MonetizationOnRoundedIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128,0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceRoundedIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0,128, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link} </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpRoundedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
