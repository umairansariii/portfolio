import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import formatDate from '../../helpers/formatDateToMonthYear';
import './scss/projects.scss';

// Resources
import IconLeft from '../../assets/svgs/icons/left';
import IconRight from '../../assets/svgs/icons/right';

export default function Project(props) {
    const [serial, setSerial] = useState(0);

    const nextHighlight = () => {
        const totalCovers = props.meta.covers.length;
        updateHighlight((serial+1) % totalCovers);
    };
    const prevHighlight = () => {
        const totalCovers = props.meta.covers.length;
        updateHighlight((serial-1 + totalCovers) % totalCovers);
    };
    const updateHighlight = (id) => {
        setSerial(id);
    };
    return (
        <div className="project">
            <div className="project-view">
                <div className="project-highlights">
                    <div className="project-highlights-lhs" onClick={prevHighlight}><IconLeft/></div>
                    <div className="project-highlights-rhs" onClick={nextHighlight}><IconRight/></div>
                    <div className="project-highlights-srl">
                        {
                            props.meta.covers.map((e, id) => {
                                return <div 
                                    onClick={() => updateHighlight(id)}
                                    style={{backgroundColor: serial == id? '#000':'#fff'}}
                                    key={id}>
                                </div>
                            })
                        }
                    </div>
                    <img className="project-highlights-img" src={props.meta.covers[serial]}/>
                </div>
                <div className="project-details">
                    <div className="project-details-markdown">
                        <div className="project-details-markdown-title">
                            {props.meta.title}
                        </div>
                        <div className="project-details-markdown-description">
                            <ReactMarkdown>
                                { props.meta.description }
                            </ReactMarkdown>
                        </div>
                    </div>
                    <div className="project-details-info">
                        <div className="project-details-sticky">
                            {
                                props.meta.download &&
                                <>
                                    <p className='project-details-info-txt'>Get explore, see resources 👇</p>
                                    <div className="project-details-info-btn"><a target="blank" href={props.meta.download}>Download Files</a></div>
                                </>
                            }
                            <p className='project-details-info-txt'>Project information ✨</p>
                            <div className="project-details-info-tiles">
                                <div><h4>Location</h4><p>{props.meta.location}</p></div>
                                <div><h4>Budget</h4><p>${props.meta.budget} ~ ${props.meta.budget + (props.meta.budget/5)}</p></div>
                                <div><h4>Delivery date</h4><p>{formatDate(props.meta.date)}</p></div>
                                <div><h4>Estimated time</h4><p>{props.meta.duration} days</p></div>
                                {
                                    props.meta.download &&
                                    <>
                                        <div><h4>Download Size</h4><p>{props.meta.size}</p></div>
                                        <div><h4>Format</h4><p>{props.meta.format}</p></div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}