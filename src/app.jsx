import Header from './components/header/header';
import DesignerSection from './components/sections/designer';
import DeveloperSection from './components/sections/developer';
import ProcessSection from './components/sections/process';

export default function App() {
    return (
        <div className="site">
            <Header/>
            <DesignerSection/>
            <DeveloperSection/>
            {/* <ProcessSection/> */}
        </div>
    )
}