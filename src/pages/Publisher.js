import { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import DataTable from '../components/DataTable';
import { fetchPublishers } from '../services/Publisher';

function Publisher(props) {

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

export default Publisher;