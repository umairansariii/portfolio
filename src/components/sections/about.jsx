import "./scss/about.scss";

// Resources
import profile from "../../assets/images/profile.png";

export default function AboutSection() {
    return (
        <section className="about">
            <div className="about-left">
                <img src={profile}/>
            </div>
            <div className="about-right">
                <p className="title-big">It&apos;s me!</p>
                <p className="title-sub">The creative mind behind stunning designs and awesome tech geek, as a versatile professional, I excels in both the realms of design and development with a passion for blending artistry and technology.</p>
                <a className="btn-pry" href="#">LinkedIn</a>
            </div>
        </section>
    )
}