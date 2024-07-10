import './style.scss';

interface IHeader {
    title: string
}
export const Header: React.FC<IHeader> = ({title}) => {

    return(
        // <div>Header</div>
        <div className="header">
            <div className="title">
                <h2>{title}</h2>
            </div>
        </div>
    )
}
