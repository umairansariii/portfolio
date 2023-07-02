
import './scss/hero.scss';
import mascot from "../../assets/images/hero-mascot.png";

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-left">
                <p className='title-big'>Designer<br/>that stands out.</p>
                <p className='title-sub'>Quality designs that <u>fits your story</u>, style and needs. Just start with an idea and finished by a masterpiece.</p>
                <button className='hero-left-cta'>Let&apos;s start</button>
            </div>
            <div className="hero-right">
                <img src={mascot}/>
                <div className="hero-right-client">
                    ➤ Super Zaeden Comic, Fiverr
                </div>
            </div>
        </section>
    )
}