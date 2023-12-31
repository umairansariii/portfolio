import "./scss/developer.scss";

// Resources
import mascot from "../../assets/images/mascot-developer.png";

export default function DeveloperSection() {
    return (
        <section className="developer">
            <div className="developer-left">
                <img src={mascot}/>
                <div className="developer-left-client">
                    <a href="#" target="blank">➤ MeemBakers, Pakistan</a>
                </div>
            </div>
            <div className="developer-right">
                <p className="title-big">Developer<br/>with ninja skills.</p>
                <p className="title-sub">Fully-fledged <u>web application</u> with database, backend apis and buttery user <u>experiences</u>.</p>
                <a className="btn-pry" href="#">Let&apos;s start</a>
            </div>
        </section>
    )
}