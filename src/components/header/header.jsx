import Btn from "../button/button";
import logo from "../../assets/img/flixgux.png";
import styled from "styled-components";
import { BLUE, BLACKCOLORS } from "../../color";
import { Link } from "react-router-dom";

const StyleHeader = styled.header`

display: flex;
align-items: center;
justify-content: space-between;
padding:26px 40px ;
border-bottom: 2px solid ${BLUE};
box-sizing: border-box;
`;

const Header = () => {
    return (
        <StyleHeader>
            <Link
                to="/"
                alt="home"
            >
                <img
                    src={logo}
                    alt="guxflix"
                    height="40px"
                />
            </Link>

            <Link to="/video">
                <Btn
                    sx={{
                        border: "1px solid white",
                        background: "black",
                        "&:hover": {
                            backgroundColor: BLACKCOLORS.black,
                        },
                    }}
                >
                    Nuevo video
                </Btn>
            </Link>
        </StyleHeader>
    );
};

export default Header;
