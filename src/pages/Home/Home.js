// HomePage.js
import React from "react";
import "./Home.css"; // Import the CSS file for styling
import theme from "../../theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="home-page">
        <h1></h1>
        <div className="card-container">
          <div className="card">
            <img
              className="bgimg"
              src="https://previews.123rf.com/images/olegdudko/olegdudko1908/olegdudko190803400/128880447-row-of-artist-paint-brushes-on-background.jpg"
            ></img>
            <img
              className="img"
              src="https://d1hbpr09pwz0sk.cloudfront.net/logo_url/univerzitet-u-novom-pazaru-5eedb1ff"
            ></img>
            <h2>UNINP Art Course</h2>
            <p>
              The UNINP Art Course is a comprehensive program designed to
              nurture creativity and artistic skills in individuals.
            </p>

            <ThemeProvider theme={theme}>
              <Button variant="contained">Peek at this course</Button>
            </ThemeProvider>
          </div>
          <div className="card">
            <h2>UNINP Coding Course</h2>
            <p>
              The UNINP Coding Course offers comprehensive training in
              programming languages and software development
            </p>
            <Button variant="contained">Peek at this course</Button>
          </div>
          <div className="card">
            <h2>UNINP Digital Marketing Course</h2>
            <p>
              UNINP's Digital Marketing Course offers essential skills and
              strategies for success in the digital marketing industry.
            </p>

            <Button variant="contained">Peek at this course</Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
