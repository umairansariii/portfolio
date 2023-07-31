// Components
import DesignerSection from "../components/sections/designer";
import ProcessSection from "../components/sections/process";
import DeveloperSection from "../components/sections/developer";
import QuoteSection from "../components/sections/quote";
import AboutSection from "../components/sections/about";
import PortfolioSection from "../components/sections/portfolio";

export default function Home() {
    return (
        <div className="route-home">
            <DesignerSection/>
            <ProcessSection/>
            <DeveloperSection/>
            <QuoteSection/>
            <AboutSection/>
            <PortfolioSection/>
        </div>
    )
}