import { Paper, Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import "./Item.css";

import theme from "../theme/theme";
import { useNavigate } from "react-router-dom";

function Item({ item }) {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <Paper>
      <div  className="item-box">
        <img src={item.image} alt={item.name} />
        <div className="item-left">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <ThemeProvider theme={theme}>
            <Button variant="contained" id="login" onClick={handleClick}>
              Click here to register
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </Paper>
  );
}

export default Item;
