import { useState, useEffect } from 'react';
import formatDate from '../../helpers/formatDateToMonthYear';

import './scss/portfolio.scss';
import IconMap from '../../assets/svgs/icons/map';
import IconTime from '../../assets/svgs/icons/time';
import IconInfo from '../../assets/svgs/icons/info';
import Projects from '../../database/docs/projects.js';

function PortfolioCard(props) {
    return (
        <div className="portfolio-card">
            <div className="portfolio-card-img">
                <img src={props.data.thumb}/>
            </div>
            <div className="portfolio-card-data">
                <p className="portfolio-card-title">{props.data.title}</p>
                <div>
                    <div className="portfolio-card-tags">
                        {
                            props.data.tags.map((tag, idx) => <span key={idx}>#{tag}</span>)
                        }
                    </div>
                    <span className="portfolio-card-info">
                        <IconTime/><p>{formatDate(props.data.date)}</p>
                        <IconMap/><p>{props.data.location}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default function PortfolioSection() {
    const [data, setData] = useState([]);
    const [joke, setJoke] = useState(false);

    useEffect(() => {
        setData(Projects)
    },[]);
    return (
        <section className="portfolio">
            <p className="title-big">The Journey</p>
            <p className="title-sub">
                {
                    !joke?
                    "Showcasing my portfolio, a collection of remarkable projects and achievements. ":
                    "However, I'm not showcasing my remarkable mistakes or blunders. xD "
                }
                <span onClick={() => setJoke(prev => !prev)}><IconInfo/></span>
            </p>
            <div className="portfolio-feed">
                {
                    data.map((item, idx) => <PortfolioCard data={item} key={idx}/>)
                }
            </div>
        </section>
    )
}