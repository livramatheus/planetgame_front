import axios from 'axios';
import { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import DataTable from '../components/DataTable';

function Game() {

    const [rows, setRows] = useState(null);
    const labels = ['Name', 'Release Date', 'Publisher', 'Genre'];
    const cols   = ['name', 'release_date', 'publisher', 'genre'];
    const title  = "Games";

    useEffect(() => {
        fetchPublishers();
    }, []);

    const fetchPublishers = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/?page=game&action=getall`).then((res) => {
            if (res.status === 200) {
                setRows(res.data.data);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <main id="main">
            <div className="content">
                <PageTitle title={title} />
                
                <h1>{title}</h1>

                <div className="contentstuff">
                    <DataTable rows={rows} labels={labels} cols={cols} />
                </div>
            </div>
        </main>
    );
}

export default Game;