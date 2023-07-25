// Components
import DesignerSection from '../components/sections/designer';
import ProcessSection from '../components/sections/process';
import DeveloperSection from '../components/sections/developer';
import PortfolioSection from '../components/sections/portfolio';

export default function Home() {
    return (
        <div className="route-home">
            <DesignerSection/>
            <ProcessSection/>
            <DeveloperSection/>
            <PortfolioSection/>
        </div>
    )
}