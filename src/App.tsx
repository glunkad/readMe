import './App.scss';
import './Theme.scss';
import {Editor, Navbar, Preview} from "./components";
import {placeholder} from "./utils/Placeholder";
import { useState} from "react";

export const App = () => {

    let markdown = localStorage.getItem("markdown") || placeholder;
    const [markdownContent, setMarkdownContent] = useState(markdown)

    const handleContentChange = (newContent) => {
        setMarkdownContent(newContent);
        console.log(newContent)
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