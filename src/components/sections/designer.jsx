import './scss/designer.scss';

// Resources
import mascot from "../../assets/images/mascot-designer.png";

export default function DesignerSection() {
    return (
        <section className="designer">
            <div className="designer-left">
                <p className='title-big'>Designer<br/>that stands out.</p>
                <p className='title-sub'>Quality designs that <u>fits your story</u>, style and needs. Just start with an idea and finished by a <u>masterpiece</u>.</p>
                <button className='btn-pry'>Let&apos;s talk</button>
            </div>
            <div className="designer-right">
                <img src={mascot}/>
                <div className="designer-right-client">
                    <a href="https://umairansari.com/projects?title=super-zaeden" target='blank'>➤ Super Zaeden Comic, Fiverr</a>
                </div>
            </div>
        </section>
    )
}