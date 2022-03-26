import { fetchPublishers } from '../../services/Publisher';
import { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import DataTable from '../../components/DataTable';
import { Outlet } from 'react-router-dom';
import { Helmet } from "react-helmet";

function PublisherList() {

    const [rows, setRows] = useState(null);
    const labels = ['Name', 'Foundation Date', 'Age'];
    const cols   = ['name', 'founded'        , 'age'];
    const title  = "Publishers";

    useEffect(() => {
        fetchPublishers().then((data) => {
            setRows(data);
        }).catch((err) => {
            console.log(err);
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