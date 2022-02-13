function About() {
    return (
        <div className="pagearticle">
            <h1>About Planet Game</h1>

            <p>
                <b>Planet Game</b> is a game database website made by <a className="articlelink" href="https://github.com/livramatheus">livramatheus</a>.
            </p>
            <p>    
                The author's intentions with this work was not to create an ambixious or revolucionary application,
                but to build a project as a whole, implementing numerous front and back-end technologies by coding
                it in the cleanest way possible, also taking into perspective the following topics.
            </p>

            <br/>

            <h2>Key points of Planet Game</h2>

            <ul>
                <li>
                    Development based on professional Git workflow, taking advantage of branches to improve versioning
                </li>
                <li>
                    Automated deploy for <b>test</b> and <b>production</b> branches
                </li>
            </ul>

            <h3>Front-end</h3>

            <ul>
                <li>
                    <a className="articlelink" href="https://reactjs.org/">React</a>
                </li>
                <li>Clean file organization</li>
                <li>Interface built from scratch with HTML and Vanilla CSS</li>
            </ul>

            <h3>Back-end</h3>

            <ul>
                <li>
                    <a className="articlelink" href="https://www.php.net/">Vanilla PHP</a>
                </li>
                <li>Routing system developed from scratch</li>
                <li>API based: accepts requests and returns JSON data</li>
                <li>Elegant file inclusion with Namespaces + Autoloader</li>
                <li>Backed by unit tests <a className="articlelink" href="https://phpunit.de/">(PHPUnit)</a></li>
                <li>Third party <a className="articlelink" href="https://getcomposer.org/">Composer</a> packages included</li>
            </ul>

            <br/>

            <h2>Source code</h2>

            <p>
                You may find detailed info and the source code about this project here:
            </p>

            <ul>
                <li>
                    <a className="articlelink" href="https://github.com/livramatheus/planetgame_front">Front-end</a>
                </li>
                <li>
                    <a className="articlelink" href="https://github.com/livramatheus/planetgame_back">Back-end</a>
                </li>
            </ul>
        </div>
    );
}

export default About;