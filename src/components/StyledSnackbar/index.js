import { Snackbar, Alert } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledAlert = styled(Alert)(({ theme }) => ({
    color: theme.status.color2,
    backgroundColor: theme.status.bgtableheader
}));

function StyledSnackbar(props) {

    let { message, snackOpen, setSnackOpen, severity } = props;

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackOpen(false);
    }

    return (
        <Snackbar
            open={snackOpen}
            autoHideDuration={1500}
            onClose={handleCloseSnack}
        >
            <StyledAlert severity={severity} >{message}</StyledAlert>
        </Snackbar>
    );
}

export default StyledSnackbar;