import { useContext, useState } from "react";
import Cancel from "@mui/icons-material/Cancel";
import Check from "@mui/icons-material/Check";
import { AuthenticatorContext } from "../../components/Authenthicator";
import { approveGame, deleteGame } from "../../services/Game";
import LoadingButton from '@mui/lab/LoadingButton';

function ApprovalAlert(props) {

    const {
        game,
        setGame,
        setSnackSuccessOpen,
        setSnackSuccessMsg,
        setSnackErrorOpen,
        setSnackErrorMsg
    } = props;

    const [btnLoading, setBtnLoading] = useState(false);

    const { ctxIsLoggedIn } = useContext(AuthenticatorContext);

    const approve = () => {
        setBtnLoading(true);

        approveGame(game.id).then((res) => {
            setBtnLoading(false);
            setSnackSuccessMsg(res);
            setSnackSuccessOpen(true);
            
            setGame(() => {
                const copy = {...game};
                copy.approved = 1;
                return copy;
            });
        }).catch((err) => {
            setBtnLoading(false);
            setSnackErrorMsg(err.response.data.data);
            setSnackErrorOpen(true);
        });
    }

    const remove = () => {
        setBtnLoading(true);

        deleteGame(game.id).then((res) => {
            setBtnLoading(false);
            setSnackSuccessMsg(res);
            setSnackSuccessOpen(true);

            setGame(() => {
                const copy = {...game};
                copy.approved = 1;
                return copy;
            });
        }).catch((err) => {
            setBtnLoading(false);
            setSnackErrorMsg(err.response.data.data);
            setSnackErrorOpen(true);
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
                    <LoadingButton
                        startIcon={<Cancel />}
                        loading={btnLoading}
                        loadingPosition="start"
                        variant="contained"
                        onClick={() => remove()}
                    >
                        Remove
                    </LoadingButton>
                </div>
            </div>
        ) : (
            null
        )
    );
}

export default ApprovalAlert;