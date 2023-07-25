import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Components
import Project from "../components/projects/projects";
import PortfolioSection from "../components/sections/portfolio";

// Database
import Database from '../database/docs/projects';

export default function Projects() {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const title = searchParams.get('title');
        const queryResult = Database.filter(e => e.url == title);

        setData(queryResult? queryResult[0]: null);
    },[searchParams]);
    return (
        <div className="route-projects">
            {
                data? <Project meta={data}/>: <PortfolioSection/>
            }
        </div>
    )
}