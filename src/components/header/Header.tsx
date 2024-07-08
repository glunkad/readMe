import './style.scss';

import {MdContentCopy, MdOutlineFileDownload} from "react-icons/md";
import {AiOutlineDelete} from "react-icons/ai";
export const Header = ({title}) => {

    return(
        // <div>Header</div>
        <div className="header">
            <div className="title">
                <h2>{title}</h2>
            </div>
        </div>
    )
}
