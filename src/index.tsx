import {createRoot} from "react-dom/client";
import {App} from "./App";
import './style.scss'

createRoot(document.getElementById('root') || document.body).render(
        <App />
);