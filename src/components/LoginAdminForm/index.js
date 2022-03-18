import { Box, FormControl, TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { login } from "../../services/Admin";
import StyledSnackbar from "../StyledSnackbar";
import jwt_decode from "jwt-decode";
import { AuthenticatorContext } from "../Authenthicator";

function LoginAdminForm() {

    const { ctxUserName, ctxFirstName, ctxLastName, ctxIsLoggedIn } = useContext(AuthenticatorContext);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const [snackErrorMsg , setSnackErrorMsg]  = useState('');
    const [snackErrorOpen, setSnackErrorOpen] = useState(false);

    const [snackSuccessOpen, setSnackSuccessOpen] = useState(false);
    const [snackSuccessMsg , setSnackSuccessMsg ] = useState("");

    const validateLoginForm = () => {
        return (userName.trim() && password.trim());
    }

    const sendData = () => {
        const admData = {
            user_name: userName,
            password: password
        }

        login(admData).then((res) => {
            if (res.data.data) {
                // Decodes JWT token using jwt_decode package
                let decodedToken = jwt_decode(res.data.data);

                // Saves JWT token into localStorage
                localStorage.setItem('jwt-key', res.data.data);

                // Saves user data into the context API
                ctxUserName.setUserName(decodedToken.user_name);
                ctxFirstName.setFirstName(decodedToken.first_name);
                ctxLastName.setLastName(decodedToken.last_name);
                ctxIsLoggedIn.setIsLoggedIn(true);
                
                // Empties input fields
                setUserName("");
                setPassword("");
                
                // Triggers success message
                setSnackSuccessMsg("You have logged in successfully!");
                setSnackSuccessOpen(true);
            }
        }).catch((err) => {
            // Triggers error message
            setSnackErrorMsg(err.response.data.data || "Unexpected error. Try again.");
            setSnackErrorOpen(true);
        });
    }

    const onChangeUsername = (e) => setUserName(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateLoginForm()) {
            sendData();
        } else {
            setSnackErrorMsg("Please, fill the fields correctly.");
            setSnackErrorOpen(true);
        }
    }

    return (
        <div className="pagearticle">

            <h1 className="contenttilte">Admin login form</h1>
            
            <div>{ ctxUserName.userName }</div>
            <div>{ ctxFirstName.firstName }</div>
            <div>{ ctxLastName.lastName }</div>

            <form onSubmit={handleSubmit}>
                <Box>
                    <div className="logincolumns">
                        <FormControl className="loginitem" margin="normal">
                            <TextField
                                id="login-username"
                                label="Username"
                                value={userName}
                                onChange={onChangeUsername}
                            />
                        </FormControl>
                    </div>

                    <div className="logincolumns">
                        <FormControl className="loginitem" margin="normal">
                            <TextField
                                id="login-password"
                                type="password"
                                label="Password"
                                value={password}
                                onChange={onChangePassword}
                            />
                        </FormControl>
                    </div>

                    <div className="logincolumns">
                        <FormControl className="loginitem" margin="normal">
                            <Button variant="contained" type="submit">Log In</Button>
                        </FormControl>
                    </div>
                </Box>
            </form>
            
            <StyledSnackbar
                message={snackErrorMsg}
                snackOpen={snackErrorOpen}
                setSnackOpen={setSnackErrorOpen}
                severity="error"
            />

            <StyledSnackbar
                message={snackSuccessMsg}
                snackOpen={snackSuccessOpen}
                setSnackOpen={setSnackSuccessOpen}
                severity="success"
            />
        </div>
    );
}

export default LoginAdminForm;