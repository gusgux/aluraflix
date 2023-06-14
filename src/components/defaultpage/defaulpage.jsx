import Footer from "../footer/footer";
import GlobalStyle from "../../globalstyle";
import Header from "../header/header";

const DefaultPage = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default DefaultPage;
