import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ColorSkeleton from '../../components/ColorSkeleton';
import PageTitle from '../../components/PageTitle';
import { fetchPublisher } from '../../services/Publisher';

function PublisherDetails() {

    const [publisher, setPublisher] = useState(null);
    let params = useParams();
    console.log(publisher);
    // Fetches a single publisher, based on URL params
    useEffect(() => {
        if (params.publisherid) {
            fetchPublisher(params.publisherid).then((data) => {
                setPublisher(data)
            }).catch((err) => {
                console.log(err);
            });
        }
    }, [params.publisherid]);

    return (
        <main id="main">
            <div className="content">
                <PageTitle title="Publishers" />

                <div className="contentstuff">
                    <div className="gamedetails">
                        <h1>
                            {
                                publisher ?
                                    <>{publisher.name}</> :
                                    <ColorSkeleton width="25%" />
                            }
                        </h1>

                        <div>
                            {
                                publisher ?
                                    <img
                                        src={`${process.env.REACT_APP_PUBLIC_URL}/images/${publisher.logo}`}
                                        style={{width: '30%'}}
                                    /> :
                                    <ColorSkeleton width="30%" height="12em" />
                            }
                        </div>

                        <br />

                        <p>
                            {
                                publisher ?
                                    <><b>Founded: </b>{`${publisher.founded} (${publisher.age})`}</> :
                                    <ColorSkeleton width="30%" />
                            }
                        </p>
                        
                        <p>
                            {
                                publisher ?
                                    <><b>Official Website: </b><a className="articlelink" target="_blank" href={publisher.website}>{publisher.website}</a></> :
                                    <ColorSkeleton width="30%" />
                            }
                        </p>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default PublisherDetails;