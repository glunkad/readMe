import './style.scss';

import {MdContentCopy, MdOutlineFileDownload} from "react-icons/md";
import {AiOutlineDelete} from "react-icons/ai";
export const Header = ({title}) => {

    const editorButtons = [
        <MdOutlineFileDownload />,<MdContentCopy />, <AiOutlineDelete />
    ];

    const previewButtons = [
        <MdOutlineFileDownload />,
    ];

    return(
        // <div>Header</div>
        <div className="header">
            <div className="title">
                <h2>{title}</h2>
            </div>
            {/*these are the actions buttons which will be mapped*/}
            <div className="action-buttons">
                {
                    title === "Editor" ? (
                        editorButtons.map((btn, index) => <button key={index}>{btn}</button>)
                    ) : (
                        previewButtons.map((btn, index) => <button key={index}>{btn}</button>)
                    )
                }
            </div>
        </div>
    )
}
