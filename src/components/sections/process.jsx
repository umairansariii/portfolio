import './scss/process.scss';

export default function ProcessSection() {
    return (
        <section className="process">
            <p className="title-big">The working path</p>
            <p className="title-sub">You&apos;ve the <u>great idea</u>, we have the <u>right plan</u> for you.<br/>Great ideas often thrive when they are nurtured within a supportive <br/>and collaborative environment.</p>
            <div className="process-path">
                <div className="process-path-arrow"></div>
                <div className="process-path-i">Requirement Analysis</div>
                <div className="process-path-ii">Brainstorming</div>
                <div className="process-path-iii">Implementation</div>
                <div className="process-path-iv">Client Feedback</div>
            </div>
        </section>
    )
}