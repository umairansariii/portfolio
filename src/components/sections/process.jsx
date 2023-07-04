import './scss/process.scss';

export default function ProcessSection() {
    return (
        <section className="process">
            <p className="title-big">The working path</p>
            <p className="title-sub">How your project processed</p>
            <div className="process-path">
                <div className="process-path-arrow-i"></div>
                <div className="process-path-i">Requirement Analysis</div>
                <div className="process-path-ii">Initial Prototyping</div>
                <div className="process-path-iii">Implementation</div>
                <div className="process-path-iv">Client Feedback</div>
                <div className="process-path-arrow-iii"></div>
            </div>
        </section>
    )
}