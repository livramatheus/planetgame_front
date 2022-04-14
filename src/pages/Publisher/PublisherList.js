import { fetchPublishers } from '../../services/Publisher';
import { useContext, useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import DataTable from '../../components/DataTable';
import { Outlet } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { SnackContext } from '../../components/Snack';

function PublisherList() {

    const [rows, setRows] = useState(null);
    const labels = ['Name', 'Foundation Date', 'Age'];
    const cols   = ['name', 'founded'        , 'age'];
    const title  = "Publishers";
    
    const {
        setSeverity,
        setMessage,
        setSnackOpen
    } = useContext(SnackContext);

    useEffect(() => {
        fetchPublishers().then((data) => {
            setRows(data);
        }).catch((err) => {
            setMessage(err.response.data.data);
            setSnackOpen(true);
            setSeverity("error")
        })
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
                    <DataTable
                        rows={rows}
                        labels={labels}
                        cols={cols}
                        target="publisher"
                    />
                </div>
            </div>
            <Outlet />
        </main>
    );
}

export default PublisherList;