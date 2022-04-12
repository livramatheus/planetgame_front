import { useContext, useState } from "react";
import Check from "@mui/icons-material/Check";
import { AuthenticatorContext } from "../../components/Authenthicator";
import { approveGame } from "../../services/Game";
import LoadingButton from '@mui/lab/LoadingButton';
import { SnackContext } from "../Snack";

function ApprovalAlert(props) {

    const {
        game,
        setGame
    } = props;

    const [btnLoading, setBtnLoading] = useState(false);
    const {
        setSeverity,
        setMessage,
        setSnackOpen
    } = useContext(SnackContext);
    const { ctxIsLoggedIn } = useContext(AuthenticatorContext);

    const approve = () => {
        setBtnLoading(true);

        approveGame(game.id).then((res) => {
            setBtnLoading(false);
            setSeverity("success");
            setMessage(res);
            setSnackOpen(true);
            
            setGame(() => {
                const copy = {...game};
                copy.approved = 1;
                return copy;
            });
        }).catch((err) => {
            setBtnLoading(false);
            setMessage(err.response.data.data);
            setSnackOpen(true);
            setSeverity("error");
        });
    }

    return (
        ctxIsLoggedIn.isLoggedIn ? (
            <div className="approvalalert">
                <p>This game is not approved yet! Please review it carefully!</p>
                <div>
                    <LoadingButton
                        startIcon={<Check />}
                        loading={btnLoading}
                        loadingPosition="start"
                        variant="contained"
                        onClick={() => approve()}
                    >
                        Approve
                    </LoadingButton>
                </div>
            </div>
        ) : (
            null
        )
    );
}

export default ApprovalAlert;