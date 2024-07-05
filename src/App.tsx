import './App.scss';
import {Editor, Header, Navbar} from "./components";
import {Preview} from "./components/preview/Preview";
export const App = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <div className="container">
                <Editor />
                <Preview />
            </div>
        </div>
    )
}