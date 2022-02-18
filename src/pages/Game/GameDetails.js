import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ColorSkeleton from '../../components/ColorSkeleton';
import PageTitle from '../../components/PageTitle';
import { fetchGame } from '../../services/Game';

function GameDetails() {

    const [game, setGame] = useState(null);
    let params = useParams();

    // Fetches a single game, based on URL params
    useEffect(() => {
        if (params.gameid) {
            fetchGame(params.gameid).then((data) => {
                setGame(data)
            }).catch((err) => {
                console.log(err);
            });
        }
    }, [params.gameid]);

    return (
        <main id="main">
            <div className="content">
                <PageTitle title="Games" />

                <div className="contentstuff">
                    <div className="details">
                        <h1>
                            {
                                game ?
                                    <>{game.name}</> :
                                    <ColorSkeleton width="25%" />
                            }
                        </h1>

                        <p>
                            {
                                game ?
                                    <em>{game.abstract}</em> :
                                    <>
                                        <ColorSkeleton width="100%" />
                                        <ColorSkeleton width="75%" />
                                    </>
                            }
                        </p>

                        <br />

                        <p>
                            {
                                game ?
                                    <><b>Release Date: </b> {game.release_date} ({game.age})</> :
                                    <ColorSkeleton width="50%" />
                            }
                        </p>

                        <p>
                            {
                                game ?
                                    <><b>Genre: </b> {game.genre}</> :
                                    <ColorSkeleton width="25%" />
                            }
                        </p>

                        <p>
                            {
                                game ?
                                    <><b>Publisher: </b> {game.publisher}</> :
                                    <ColorSkeleton width="25%" />
                            }
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default GameDetails;