import { fetchGames } from '../../services/Game';
import { fetchPublishers } from "../../services/Publisher";
import { fetchGenres } from "../../services/Genre";
import PageTitle from '../../components/PageTitle';
import DataTable from '../../components/DataTable';
import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NewGameForm from '../../components/NewGameForm';
import { Helmet } from "react-helmet";
import { SnackContext } from '../../components/Snack';

function GameList() {

    const [rows          , setRows            ] = useState(null);
    const [genres        , setGenres          ] = useState([]);
    const [publishers    , setPublishers      ] = useState([]);
    const [modalOpen     , setModalOpen       ] = useState(false);

    const {
        setSeverity,
        setMessage,
        setSnackOpen
    } = useContext(SnackContext);

    const labels = ['Name', 'Release Date', 'Publisher', 'Genre'];
    const cols   = ['name', 'release_date', 'publisher', 'genre'];
    const title  = "Games";

    useEffect(() => {
        Promise.all([
            fetchGames(),
            fetchGenres(),
            fetchPublishers()
        ]).then((values) => {
            setRows(values[0]);
            setGenres(values[1]);
            setPublishers(values[2]);
        }).catch((error) => {
            setMessage(error.response.data.data);
            setSnackOpen(true);
            setSeverity("error")
        });
    }, []);

    const openModal  = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    
    return (
        <main id="main">
            <Helmet>
                <title>{title} - Planet Game</title>
            </Helmet>

            <div className="content">
                <PageTitle title={title} />

                <div className="contentstuff">
                    <h1 className="contenttilte">{title}</h1>

                    <div className="topactionsrow">
                        <Button
                            startIcon={<AddIcon />}
                            variant="contained"
                            onClick={openModal}>
                                Add Game
                        </Button>
                    </div>

                    <NewGameForm
                        open={modalOpen}
                        onClickAway={closeModal}
                        genres={genres}
                        publishers={publishers}
                    />

                    <DataTable
                        rows={rows}
                        labels={labels}
                        cols={cols}
                        target="game"
                    />                            
                </div>
            </div>
            <Outlet />
        </main>
    );
}

export default GameList;