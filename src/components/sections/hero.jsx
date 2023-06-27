
import './scss/hero.scss';

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-left">
                <p className='title-big'>Designer<br/>that stands out.</p>
                <p className='title-sub'>Quality designs fits </p>
            </div>
            <div className="hero-right">
                <p className="title-big">Developer </p>
            </div>
        </section>
    )
}