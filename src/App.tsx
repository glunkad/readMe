import './App.scss';
import './Theme.scss';
import {Editor, Header, Navbar} from "./components";
import {Preview} from "./components/preview/Preview";
import useLocalStorage from "./hooks/useLocalStorage";

export const App = () => {

    const [markdownContent, setMarkdownContent] = useLocalStorage('markdownContent', '');

    const handleContentChange = (newContent) => {
        setMarkdownContent(newContent);
    };

    return (
        <div className="wrapper">
            <Navbar />
            <div className="container">
                <Editor content={markdownContent} onChange={handleContentChange} />
                <Preview content={markdownContent} />
            </div>
        </div>
    )
}