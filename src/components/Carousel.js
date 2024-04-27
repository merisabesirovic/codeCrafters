import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import slider from "../slider.json";



function Example() {

  return (
    <Carousel  duration={150} autoPlay={true}>
      {slider.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default Example;
