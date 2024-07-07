import './style.scss';
import {Header} from "../header";

export const Editor = ({ value, onChange }) => {

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return(
        // <div>Editor</div>
        <div className="editor">
            <Header title="EDITOR"/>
            <textarea
                className="editor-textarea"
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}