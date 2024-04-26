import { Paper, Button } from "@mui/material";
import "./Item.css";

function Item({ item }) {
  return (
    <Paper>
      <div className="item-box">
        <img src={item.image} alt={item.name} />
        <div className="item-left">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Button className="CheckButton">Check it out!</Button>
        </div>
      </div>
    </Paper>
  );
}

export default Item;
