import DefaultPage from "../../components/defaultpage/defaulpage";
import { Box } from "@mui/material";
import InputField from "../../components/input/input";
import Btn from "../../components/button/button";
import "./category.css";
import Table from "../../components/table/table";
import { useVideo } from "../../provider";
const tagvideo = [{ label: "Nombre " }, { label: "Descripcion" }, { label: "Color", select: true, option: ["Ux", "Front-end", "Back-end", "Mobile"] }, { label: "Codigo de seguridad" }];
const tableHead = ["Nombre", "Descripcion", "Editar", "Remover"];

const tableBody = [
    { name: "front-end", descripcion: "videos de front", editar: "true", eliminar: "false", id: 1 },
    { name: "back-end", descripcion: "videos de back", editar: "true", eliminar: "false", id: 2 },
    { name: "mobile", descripcion: "videos de mobile", editar: "true", eliminar: "false", id: 3 },
];

/* const tableBody = [
    ["front-end", "videos de front", "true", "false"],
    ["back-end", "videos de back", "true", "false"],
    ["mobile", "videos de mobile", "true", "false"],
]; */
const Category = ({}) => {
    const { video, setVideo } = useVideo();
    return (
        <DefaultPage>
            <div className="container">
                <Box component="form">
                    <h1 style={{ color: "white" }}>Nueva categoria</h1>
                    {video.map((tag, i) => {
                        return (
                            <InputField
                                key={i}
                                index={i}
                            />
                        );
                    })}
                    <div className="btn-box-videos">
                        <Btn>Guardar</Btn>
                        <Btn>Eliminar</Btn>
                    </div>
                </Box>
                <Table
                    head={tableHead}
                    body={tableBody}
                />
            </div>
        </DefaultPage>
    );
};

export default Category;
