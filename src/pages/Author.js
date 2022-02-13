function Author() {
    return (
        <div className="pagearticle">
            <h1>Author of Planet Game</h1>
            
            <p>
                <b>Matheus do Livramento</b>, 27 years old, is a back-end software engineer and former web
                development teacher with passion about gaming, fitness and web development.
            </p>
            
            <p>
                Graduated in 2017 in computer science, also has a vast knowledge in full stack development 
                and relational databases.
            </p>

            <br/>

            <p>
                You can find more info about Matheus at:
            </p>

            <ul>
                <li>
                    <a className="articlelink" href="https://www.livramento.dev/about">Personal website</a>
                </li>
                <li>
                    <a className="articlelink" href="https://github.com/livramatheus">GitHub</a>
                </li>
            </ul>

        </div>
    );
}

export default Author;