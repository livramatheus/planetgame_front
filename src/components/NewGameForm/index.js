import {
    Box,
    MenuItem,
    Modal,
    Select,
    TextField,
    InputLabel,
    FormControl,
    Button
} from "@mui/material";
import { useEffect, useState } from "react";
import StyledSnackbar from "../StyledSnackbar";
import { insertGame } from "../../services/Game";
import { fetchPublishers } from "../../services/Publisher";
import { fetchGenres } from "../../services/Genre";

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'var(--coloreven)',
    boxShadow: 24,
    p: 3
}

function NewGameForm(props) {

    let { open, onClickAway } = props;

    const [name       , setName       ] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [publisher  , setPublisher  ] = useState("");
    const [genre      , setGenre      ] = useState("");
    const [abstract   , setAbstract   ] = useState("");
    const [userName   , setUserName   ] = useState("");

    const [genres    , setGenres    ] = useState([]);
    const [publishers, setPublishers] = useState([]);

    const [snackErrorOpen  , setSnackErrorOpen  ] = useState(false);
    const [snackErrorMsg   , setSnackErrorMsg   ] = useState("");
    
    const [snackSuccessOpen, setSnackSuccessOpen] = useState(false);
    const [snackSuccessMsg , setSnackSuccessMsg ] = useState("");

    const onChangeName        = (e) => setName(e.target.value);
    const onChangeReleaseDate = (e) => setReleaseDate(e.target.value);
    const onChangePublisher   = (e) => setPublisher(e.target.value);
    const onChangeGenre       = (e) => setGenre(e.target.value);
    const onChangeAbstract    = (e) => setAbstract(e.target.value);
    const onChangeUserName    = (e) => setUserName(e.target.value);
    
    useEffect(() => {
        // Get all genres to populate Genre's combobox
        fetchGenres().then((res) => {
            setGenres(res);
        }).catch((err) => {
            setSnackErrorMsg("Something went wrong. Try again later.");
            setSnackErrorOpen(true);
        });

        // Get all publishers to populate Publishers's combobox
        fetchPublishers().then((res) => {
            setPublishers(res);
        }).catch((err) => {
            setSnackErrorMsg("Something went wrong. Try again later.");
            setSnackErrorOpen(true);
        });
    }, []);

    const clearFields = () => {
        setName("");
        setReleaseDate("");
        setPublisher("");
        setGenre("");
        setAbstract("");
        setUserName("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && releaseDate && publisher && genre) {
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
                setSnackSuccessMsg(res.data.data)
                setSnackSuccessOpen(true);
            }).catch((err) => {
                setSnackErrorMsg("Something went wrong with your request.");
                setSnackErrorOpen(true);
            })
        } else {
            setSnackErrorMsg("Please, fill all fields correctly!");
            setSnackErrorOpen(true);
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
                            <Button variant="contained" type="submit">Submit</Button>
                        </FormControl>
                    </Box>
                </form>
            </Modal>
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
        </>
    );
}

export default NewGameForm;