import './scss/developer.scss';
import mascot from '../../assets/images/mascot-developer.png';

export default function DeveloperSection() {
    return (
        <section className="developer">
            <div className="developer-left">
                <img src={mascot}/>
                <div className="developer-left-client">
                    ➤ MeemBakers, Pakistan
                </div>
            </div>
            <div className="developer-right">
                <p className="title-big">Developer<br/>with ninja skills.</p>
                <p className="title-sub">Fully-fledged <u>web application</u> with database, backend apis and buttery user <u>experiences</u>.</p>
                <button className="btn-pry">Let&apos;s start</button>
            </div>
        </section>
    )
}