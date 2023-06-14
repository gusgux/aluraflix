import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useVideo } from "../../provider";

const InputField = ({ index }) => {
    //
    const { video, setVideo } = useVideo();
    const { label, multiline, option, nameid, value, error, type, input } = video[index];
    //const [error, setError] = useState(null);
    //const [value, setValue] = useState("");
    const handledError = (e) => {
        const large = e.target.value;

        //setValue(large);

        // setError(!(large.length > 6));
        setVideo(
            video.map((list, i) => {
                if (i == index) {
                    return { ...list, error: input == "multiline" ? !(large.length > 30) : !(large.length > 6), value: large };
                }
                return list;
            })
        );
    };
    const handledErrorSelect = (e) => {
        const large = e.target.value;

        //setValue(large);

        // setError(!(large.length > 6));
        setVideo(
            video.map((list, i) => {
                if (i == index) {
                    return { ...list, error: large == "", value: large };
                }
                return list;
            })
        );
    };
    const fieldType = {
        normal: (
            <TextField
                id={nameid}
                label={label}
                name={nameid}
                placeholder="Default Value"
                error={error}
                helperText={error ? "ingrese mas de 6 lineas" : ""}
                fullWidth
                variant="outlined"
                value={value}
                onChange={handledError}
                type={type}
                required
            />
        ),
        multiline: (
            <TextField
                label={label}
                name={nameid}
                value={value}
                error={error}
                helperText={error ? "ingrese una descripcion de 30 letras" : ""}
                variant="outlined"
                multiline
                rows={multiline}
                placeholder="Default Value"
                fullWidth
                onChange={handledError}
                type={type}
                required
            />
        ),
        options: (
            <TextField
                label={label}
                name={nameid}
                value={value}
                error={error}
                helperText={error ? "seleccion un curso" : ""}
                fullWidth
                variant="outlined"
                select
                onChange={handledErrorSelect}
                type={type}
                required
            >
                {option &&
                    option.map((value) => (
                        <MenuItem
                            key={value}
                            value={value}
                        >
                            {value}
                        </MenuItem>
                    ))}
            </TextField>
        ),
    };

    return fieldType[input] || fieldType.normal;
    /*  if (!(multiline || option)) {
        return (
            <TextField
                label={label}
                name={nameid}
                placeholder="Default Value"
                error={error}
                helperText={error ? "ingrese mas de 6 lineas" : ""}
                fullWidth
                variant="outlined"
                value={value}
                onChange={handledError}
            />
        );
    }
    if (multiline) {
        return (
            <TextField
                error
                label={label}
                name={nameid}
                variant="outlined"
                multiline
                rows={multiline}
                placeholder="Default Value"
                fullWidth
            />
        );
    }
    return (
        <TextField
            error
            label={label}
            name={nameid}
            fullWidth
            variant="outlined"
            defaultValue="Ux"
            helperText="Please select your currency"
            select
            type="color"
        >
            {option.map((value) => (
                <MenuItem
                    key={value}
                    value={value}
                >
                    {value}
                </MenuItem>
            ))}
        </TextField>
    ); */
};

export default InputField;
