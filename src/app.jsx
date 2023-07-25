import { Routes, Route } from 'react-router-dom';

// Routes
import Home from './routes/home';
import Projects from './routes/projects';

// Components
import Header from './components/header/header';

export default function App() {
    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
            </Routes>
        </div>
    )
}