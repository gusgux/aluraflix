import { Box } from "@mui/material";
import DefaultPage from "../../components/defaultpage/defaulpage";
import InputField from "../../components/input/input";
import { Link } from "react-router-dom";
import "./video.css";
import Btn from "../../components/button/button";
import { Button } from "@mui/material";
import { useVideo } from "../../provider";
import { v4 as id } from "uuid";

/* const tagvideo = [
    { label: "Video", error: null, value: "", nameid: "video" },
    { label: "Link del video", error: null, value: "", nameid: "link" },
    { label: "Link imagen del video", error: null, value: "", nameid: "imagen" },
    { label: "Categoria", select: true, option: ["Ux", "Front-end", "Back-end", "Mobile"], error: null, value: "", nameid: "category" },
    { label: "Descripcion", multiline: 4, error: null, value: "", nameid: "Descripcion" },
    { label: "Codigo de seguridad", error: null, value: "", nameid: "codigo" },
]; */
const Videos = ({}) => {
    const { video, setVideo } = useVideo();

    const databox = (e) => {
        e.preventDefault();
        const data = e.target;
        const formData = new FormData(data);
        const values = [...formData.entries()];
        const otrodata = Object.fromEntries(formData.entries());
        console.log(values, otrodata);
    };

    const deleteDataForm = () => {
        setVideo(
            video.map((list) => {
                return { ...list, value: "" };
            })
        );
    };
    return (
        <DefaultPage>
            <main>
                <h1 style={{ color: "black" }}>Nuevo Videos</h1>
                <Box
                    className="box"
                    component="form"
                    onSubmit={databox}
                    onReset={deleteDataForm}
                >
                    {video.map((tag, i) => {
                        return (
                            <InputField
                                key={i}
                                index={i}
                            />
                        );
                    })}
                    <div className="btn-box">
                        <div className="btn-subbox">
                            <Button
                                variant="contained"
                                type="submit"
                            >
                                Guardar
                            </Button>
                            <Button
                                variant="contained"
                                type="reset"
                            >
                                Eliminar
                            </Button>
                        </div>
                        <Link to="/category">
                            <Btn>Nueva Categoria</Btn>
                        </Link>
                    </div>
                </Box>
            </main>
        </DefaultPage>
    );
};

export default Videos;
