import { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import DataTable from '../components/DataTable';
import { fetchGenres } from '../services/Genre';

function Genre(props) {

    const [rows, setRows] = useState(null);
    const labels = ['Name'];
    const cols   = ['name'];
    const title  = "Genres";

    useEffect(() => {
        fetchGenres().then((data) => {
            setRows(data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

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

export default Genre;