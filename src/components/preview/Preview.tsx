import './style.scss';
import {Header} from "../header";
import {useEffect, useRef, useState} from "react";
import DOMPurify from "dompurify";
import Prism from "prismjs";
import "../../utils/Markdown";
import {marked} from "../../utils/Markdown";



export const Preview = ({content}) => {
    const getHtml = (markdown) => {
        return marked.parse(markdown);
    };

    const [html, setHtml] = useState(getHtml(content));

    useEffect(() => {
        const sanitizedHtml = DOMPurify.sanitize(getHtml(content))
        setHtml(sanitizedHtml);
        Prism.highlightAll();
    }, [content]);


    return (
        // <div>Preview</div>
        <div className="preview" >
            <Header title="PREVIEW"/>
            <div className="preview-output" dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
    )
}

