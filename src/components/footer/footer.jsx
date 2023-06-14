import styled from "styled-components";
import { BLUE } from "../../color";
import img from "../../assets/img/guxflix32.png";

const FooterStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${BLUE};
`;

const Footer = ({}) => {
    return (
        <FooterStyle>
            <img
                src={img}
                alt="logo"
            />
        </FooterStyle>
    );
};

export default Footer;
