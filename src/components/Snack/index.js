import { createContext, useState } from 'react';
import { Snackbar, Alert } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledAlert = styled(Alert)(({ theme }) => ({
    color: theme.status.color2,
    backgroundColor: theme.status.bgtableheader
}));

export const SnackContext = createContext(null);

export const SnackProvider = ({ children }) => {

    const [severity , setSeverity ] = useState("success");
    const [message  , setMessage  ] = useState("");
    const [snackOpen, setSnackOpen] = useState(false);
    
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackOpen(false);
    }

    return (
        <SnackContext.Provider value={{
            setSeverity,
            setMessage,
            setSnackOpen
        }}>
            {children}
            <Snackbar
                open={snackOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnack}
            >
                <StyledAlert severity={severity} >{message}</StyledAlert>
            </Snackbar>
        </SnackContext.Provider>
    );
}