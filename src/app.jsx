import Header from './components/header/header';
import DesignerSection from './components/sections/designer';
import ProcessSection from './components/sections/process';
import DeveloperSection from './components/sections/developer';
import PortfolioSection from './components/sections/portfolio';

export default function App() {
    return (
        <div className="site">
            <Header/>
            <DesignerSection/>
            <ProcessSection/>
            <DeveloperSection/>
            <PortfolioSection/>
        </div>
    )
}