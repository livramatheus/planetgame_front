import { useContext, useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import DataTable from '../components/DataTable';
import { fetchGenres } from '../services/Genre';
import { Helmet } from "react-helmet";
import { SnackContext } from '../components/Snack';

function Genre() {

    const [rows, setRows] = useState(null);
    const labels = ['Name'];
    const cols   = ['name'];
    const title  = "Genres";

    const {
        setSeverity,
        setMessage,
        setSnackOpen
    } = useContext(SnackContext);

    useEffect(() => {
        fetchGenres().then((data) => {
            setRows(data);
        }).catch((err) => {
            setMessage(err.response.data.data);
            setSnackOpen(true);
            setSeverity("error")
        });
    }, []);

    return (
        <main id="main">
            <Helmet>
                <title>{title} - Planet Game</title>
            </Helmet>

            <div className="content">
                <PageTitle title={title} />
                
                <div className="contentstuff">
                    <h1 className="contenttilte">{title}</h1>
                    <DataTable rows={rows} labels={labels} cols={cols} />
                </div>
            </div>
        </main>
    );
}

export default Genre;