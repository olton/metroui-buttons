import React, {FC} from "react";
import "./Toolbar.less"
import classNames from "classnames";
interface IToolbarProps {
    children?: React.ReactNode,
    className?: string,
}

const Toolbar: FC<IToolbarProps> = ({className, children}) => {
    const classes = classNames(
        "toolbar",
        className,
    )
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Toolbar