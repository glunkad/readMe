import './style.scss';
import {Header} from "../header";
import {MdContentCopy, MdOutlineFileDownload} from "react-icons/md";
import {AiOutlineDelete} from "react-icons/ai";

export const Editor = ({ content, onChange }) => {

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(content).then(() => {
            alert('Content copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const handleDownloadClick = () => {
        let blob = new Blob([content],{
            type:"text/plain",
        })
        let a = document.createElement("a")
        a.download = "markdown.md";
        a.href = window.URL.createObjectURL(blob);
        a.click();
    };


    return(
        // <div>Editor</div>
        <div className="editor">
            <div className="editor-navbar">
                <div className="editor-title">
                    <h2>EDITOR</h2>
                </div>
                <div className="editor-action-buttons">
                    <button onClick={handleDownloadClick}><MdOutlineFileDownload/></button>
                    <button onClick={handleCopyToClipboard}><MdContentCopy/></button>
                    <button><AiOutlineDelete/></button>
                </div>
            </div>
            <textarea
                className="editor-textarea"
                value={content}
                onChange={handleChange}
            />
        </div>
    )
}