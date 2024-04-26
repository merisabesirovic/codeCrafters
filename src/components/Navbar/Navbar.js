import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Avatar, Button, IconButton, Badge } from "@mui/material";
import {
  Mail as MailIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material"; // Import icons for notifications
import img from "../../img/EyeCenter.png";
import theme from "../../theme/theme";
import "./Navbar.css";

export default function Navbar() {
  const handleLogout = () => {
    // Handle logout functionality
  };

  return (
    <div className="nav-container">
      <img src={img}></img>
      <div className="nav">
        <ThemeProvider theme={theme}>
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
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}
