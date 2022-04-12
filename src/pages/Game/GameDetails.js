import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApprovalAlert from '../../components/ApprovalAlert';
import ColorSkeleton from '../../components/ColorSkeleton';
import PageTitle from '../../components/PageTitle';
import { fetchGame } from '../../services/Game';
import { Helmet } from "react-helmet";

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
            <Helmet>
                <title>{game ? `${game.name} - Planet Game` : ''}</title>
            </Helmet>

            <div className="content">
                <PageTitle title="Games" />

                <div className="contentstuff">
                    <div className="details">
                        {
                            game && (game.approved == 0 && (
                                <ApprovalAlert
                                    game={game}
                                    setGame={setGame}
                                />
                            ))
                        }
                        
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
                                    (
                                        game.abstract ?
                                            <em>{game.abstract}</em> :
                                            <em>(This game has no abstract)</em>
                                    ) :
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
                        
                        <br/>

                        <p>
                            {
                                game ?
                                    <small><em>Game suggested by {game.contributor}</em></small> :
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