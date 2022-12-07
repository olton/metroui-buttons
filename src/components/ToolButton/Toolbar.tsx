import React, {FC} from "react";
import "./Toolbar.less"
interface IToolbarProps {
    children?: React.ReactNode
}

const Toolbar: FC<IToolbarProps> = ({children}) => {
    return (
        <div className="toolbar">
            {children}
        </div>
    )
}

export default Toolbar