import { fetchGames } from '../../services/Game';
import PageTitle from '../../components/PageTitle';
import DataTable from '../../components/DataTable';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

function GameList() {

    const [rows, setRows] = useState(null);
    const labels = ['Name', 'Release Date', 'Publisher', 'Genre'];
    const cols   = ['name', 'release_date', 'publisher', 'genre'];
    const title  = "Games";

    // Fetches all games
    useEffect(() => {
        fetchGames().then((data) => {
            setRows(data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <main id="main">
            <div className="content">
                <PageTitle title={title} />

                <div className="contentstuff">
                    <h1 className="contenttilte">{title}</h1>
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