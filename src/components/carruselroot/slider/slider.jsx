import { banner, logo, logoflix } from "../../../assets/img";
import "./slider.css";
import Flickity from "react-flickity-component";
function Slider() {
    const flickityOptions = {
        initialIndex: 2,
        draggable: false,
        wrapAround: true,
        autoPlay: 3500,
        freeScroll: true,
        freeScrollFriction: 0.03,
    };
    return (
        <Flickity
            className={"slider"}
            elementType={"div"}
            options={flickityOptions}
            disableImagesLoaded={false}
        >
            <img
                src={logo}
                className="slider-images"
            />
            <img
                src={logoflix}
                className="slider-images"
            />
            <img
                src={logo}
                className="slider-images"
            />
        </Flickity>
    );
}

export default Slider;
