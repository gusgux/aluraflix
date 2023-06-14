import styled from "styled-components";
import { banner } from "../../assets/img";
import Slider from "../carruselroot/slider/slider";

const BannerStyle = styled.section`
    color: white;
    background-image:linear-gradient(rgba(0, 18, 51, 0.56), rgba(0, 18, 51, 0.56)), url(${banner}) ;
    height: 509px;
    background-position: center;
    background-size:cover;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    
`;

const Banner = ({}) => {
    return (
        <BannerStyle>
            <h1>hola mundo</h1>
        </BannerStyle>
    );
};

export default Banner;
