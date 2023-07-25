import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './src/styles/main.scss';

import App from './src/app';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);