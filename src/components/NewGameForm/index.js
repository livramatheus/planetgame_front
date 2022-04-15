import {
    Box,
    MenuItem,
    Modal,
    Select,
    TextField,
    InputLabel,
    FormControl
} from "@mui/material";
import { useContext, useState } from "react";
import { insertGame } from "../../services/Game";
import LoadingButton from '@mui/lab/LoadingButton';
import useResponsive from "../../hooks/useResponsive";
import { SnackContext } from "../Snack";

function NewGameForm(props) {

    let {
        open,
        onClickAway,
        genres,
        publishers
    } = props;

    const [name       , setName       ] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [publisher  , setPublisher  ] = useState("");
    const [genre      , setGenre      ] = useState("");
    const [abstract   , setAbstract   ] = useState("");
    const [userName   , setUserName   ] = useState("");
    const [btnLoading , setBtnLoading ] = useState(false);

    const isResponsive = useResponsive();

    const {
        setSeverity,
        setMessage,
        setSnackOpen
    } = useContext(SnackContext);

    const onChangeName        = (e) => setName(e.target.value);
    const onChangeReleaseDate = (e) => setReleaseDate(e.target.value);
    const onChangePublisher   = (e) => setPublisher(e.target.value);
    const onChangeGenre       = (e) => setGenre(e.target.value);
    const onChangeAbstract    = (e) => setAbstract(e.target.value);
    const onChangeUserName    = (e) => setUserName(e.target.value);

    const clearFields = () => {
        setName("");
        setReleaseDate("");
        setPublisher("");
        setGenre("");
        setAbstract("");
        setUserName("");
    }

    const formWidth = isResponsive ? '90%' : '50%';

    const boxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: formWidth,
        bgcolor: 'var(--coloreven)',
        boxShadow: 24,
        p: 3
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && releaseDate && publisher && genre) {
            setBtnLoading(true);

            const data = {
                name: name,
                release_date: releaseDate,
                publisher: publisher,
                genre: genre,
                abstract: abstract,
                contributor: userName
            };

            insertGame(data).then((res) => {
                clearFields();
                onClickAway();
                setBtnLoading(false);
                setMessage(res.data.data)
                setSnackOpen(true);
                setSeverity("success");
            }).catch((err) => {
                setBtnLoading(false);
                setMessage(err.response.data.data);
                setSnackOpen(true);
                setSeverity("error");
            })
        } else {
            setMessage("Please, fill all fields correctly!");
            setSnackOpen(true);
            setSeverity("error");
        }
    }

    return (
        <>
            <Modal
                open={open}
                onClose={onClickAway}
            >
                <form onSubmit={handleSubmit}>
                    <Box sx={boxStyle}>
                        <h2>Contribute to the project with a new game!</h2>

                        <div className="formcolumns">
                            <FormControl className="formitem" margin="normal">
                                <TextField id="game-name" label="Name" value={name} onChange={onChangeName} />
                            </FormControl>

                            <FormControl className="formitem" margin="normal">
                                <TextField
                                    id="game-release-date"
                                    label="Release Date"
                                    value={releaseDate}
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={onChangeReleaseDate}
                                    
                                />
                            </FormControl>
                        </div>

                        <div className="formcolumns">
                            <FormControl className="formitem" margin="normal">
                                <InputLabel id="label-game-publisher" >Publisher</InputLabel>
                                <Select
                                    labelId="label-game-publisher"
                                    id="game-publisher"
                                    value={publisher}
                                    label="Publisher"
                                    onChange={onChangePublisher}
                                    
                                >
                                    {
                                        publishers && (
                                            publishers.map((e) => {
                                                return <MenuItem value={e.id} key={e.id}>{e.name}</MenuItem>
                                            })
                                        )
                                    }
                                </Select>
                            </FormControl>

                            <FormControl className="formitem" margin="normal">
                                <InputLabel id="label-game-genre" >Genre</InputLabel>
                                <Select
                                    labelId="label-game-genre"
                                    id="game-genre"
                                    value={genre}
                                    label="Genre"
                                    onChange={onChangeGenre}
                                >
                                    {
                                        genres && (
                                            genres.map((e) => {
                                                return <MenuItem value={e.id} key={e.id}>{e.name}</MenuItem>
                                            })
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </div>

                        <FormControl className="formitem" fullWidth margin="normal">
                            <TextField
                                id="game-abstract"
                                label="Abstract"
                                multiline
                                value={abstract}
                                rows={4}
                                onChange={onChangeAbstract}
                            />
                        </FormControl>
                            
                        <FormControl className="formitem" fullWidth margin="normal">
                            <TextField id="game-contributor" label="Your Name" value={userName} onChange={onChangeUserName}/>
                        </FormControl>

                        <FormControl className="formitem" margin="normal">
                            <LoadingButton
                                variant="contained"
                                type="submit"
                                loading={btnLoading}
                            >
                                Approve
                            </LoadingButton>
                        </FormControl>
                    </Box>
                </form>
            </Modal>
        </>
    );
}

export default NewGameForm;