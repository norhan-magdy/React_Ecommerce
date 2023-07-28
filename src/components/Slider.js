import Img1 from "./images/Img1.png";
import Img2 from "./images/Img2.png";
import Img3 from "./images/Img3.png";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel className="text-center mb-5">
      <Carousel.Item>
        <img className="d-block w-100" src={Img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
export default Slider;
