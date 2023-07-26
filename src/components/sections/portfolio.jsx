import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../../helpers/formatDateToMonthYear';
import './scss/portfolio.scss';

// Resources
import IconMap from '../../assets/svgs/icons/map';
import IconTime from '../../assets/svgs/icons/time';
import IconInfo from '../../assets/svgs/icons/info';

// Datebase
import Database from '../../database/docs/projects.js';

function PortfolioCard(props) {
    return (
        <div className="portfolio-card">
            <Link to={`/projects?title=${props.meta.url}`}>
                <div className="portfolio-card-img">
                    <img src={props.meta.thumb}/>
                </div>
                <div className="portfolio-card-data">
                    <p className="portfolio-card-title">{props.meta.title}</p>
                    <div>
                        <div className="portfolio-card-tags">
                            {
                                props.meta.tags.map((tag, idx) => <span key={idx}>#{tag}</span>)
                            }
                        </div>
                        <span className="portfolio-card-info">
                            <IconTime/><p>{formatDate(props.meta.date)}</p>
                            <IconMap/><p>{props.meta.location}</p>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default function PortfolioSection() {
    // State
    const [data, setData] = useState([]);
    const [joke, setJoke] = useState(false);

    // Effect
    useEffect(() => {
        setData(Database.sort((a, b) => b.date - a.date));
    },[]);
    return (
        <section className="portfolio">
            <p className="title-big">The Journey</p>
            <p className="title-sub">
                {
                    !joke?
                    "Showcasing my portfolio, a collection of remarkable projects and achievements. ":
                    "However, I'm not showcasing my remarkable mistakes and blunders. xD "
                }
                <span onClick={() => setJoke(prev => !prev)}><IconInfo/></span>
            </p>
            <div className="portfolio-feed">
                {
                    data.map((data, idx) => <PortfolioCard meta={data} key={idx}/>)
                }
            </div>
        </section>
    )
}