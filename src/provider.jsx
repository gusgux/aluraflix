import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const VideoContext = createContext();
const CategoryContext = createContext();
export function useVideo() {
    return useContext(VideoContext);
}

export function useCategory() {
    return useContext(CategoryContext);
}

const GlobalContext = ({ children }) => {
    const [video, setVideo] = useState([
        { label: "Nombre del Video ", error: null, value: "", nameid: "video", type: "text", input: "normal" },
        { label: "Link del video", error: null, value: "", nameid: "link", type: "url", input: "normal" },
        { label: "Link imagen del video", error: null, value: "", nameid: "imagen", type: "url", input: "normal" },
        { label: "Categoria", option: ["Ux", "Front-end", "Back-end", "Mobile"], error: null, value: "", nameid: "category", type: "text", input: "options" },
        { label: "Descripcion", multiline: 4, error: null, value: "", nameid: "Descripcion", type: "text", input: "multiline" },
        { label: "Codigo de seguridad", error: null, value: "", nameid: "codigo", type: "text", input: "normal" },
    ]);
    const [category, SetCategory] = useState(null);
    return (
        <VideoContext.Provider value={{ video, setVideo }}>
            <CategoryContext.Provider value={{ category, SetCategory }}>{children}</CategoryContext.Provider>
        </VideoContext.Provider>
    );
};

export default GlobalContext;
