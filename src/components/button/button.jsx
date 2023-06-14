import { Button } from "@mui/material";

const Btn = ({ children, sx }) => {
    return (
        <Button
            sx={sx}
            variant="contained"
        >
            {children}
        </Button>
    );
};

export default Btn;
