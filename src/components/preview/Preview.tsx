import './style.scss';
import {Header} from "../header";
import {useEffect, useRef, useState} from "react";
import DOMPurify from "dompurify";
import "../../utils/Markdown";
import {marked} from "../../utils/Markdown";
import {MdContentCopy, MdOutlineFileDownload} from "react-icons/md";
import {AiOutlineDelete} from "react-icons/ai";


interface IPreviewProps {
    content: string;
}

export const Preview: React.FC<IPreviewProps> = ({content}) => {
    const getHtml = (markdown) => {
        return marked.parse(markdown);
    };

    const [html, setHtml] = useState(getHtml(content));

    useEffect(() => {
        const sanitizedHtml = DOMPurify.sanitize(getHtml(content))
        setHtml(sanitizedHtml);
    }, [content]);



    const handleDownloadClick = () => {
        let blob = new Blob([html],{
            type:"text/html",
        })
        let a = document.createElement("a")
        a.download = "markdown.html";
        a.href = window.URL.createObjectURL(blob);
        a.click();
    };

    return (
        // <div>Preview</div>
        <div className="preview" >
            <div className="preview-navbar">
                <div className="preview-title">
                    <h2>PREVIEW</h2>
                </div>
                <div className="preview-action-buttons">
                    <button onClick={handleDownloadClick}><MdOutlineFileDownload/></button>
                </div>
            </div>
            <div className="preview-output" dangerouslySetInnerHTML={{__html: html}}></div>
        </div>
    )
}

