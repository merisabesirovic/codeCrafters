import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import { Avatar, Button, IconButton, Badge, ButtonGroup } from "@mui/material";
import {
  Mail as MailIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material"; // Import icons for notifications
import img from "../../img/logoo.png";
import theme from "../../theme/theme";
import "./Navbar.css";
import "../../Mode.css";

import { useFilter } from "../contexts/FilterProvider";
export default function Navbar() {
  const { applyFilter, removeFilter } = useFilter();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="nav-container">
      <img src={img}></img>
      <div className="nav">
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            onClick={() => applyFilter("astigmatism")}
          >
            Astigmatism
          </Button>
          <Button variant="contained" onClick={() => applyFilter("cataract")}>
            Cataract
          </Button>
          <Button variant="contained" onClick={() => applyFilter("colorblind")}>
            Colorblind
          </Button>
          <Button variant="contained" onClick={removeFilter}>
            No Filter
          </Button>

          <Avatar alt={"U"} src={``} />
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button
            variant="text"
            style={{ color: "white" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}
