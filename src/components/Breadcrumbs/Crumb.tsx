import React, {FC} from "react";
import classNames from "classnames";

interface ICrumbProps {
    caption: string,
    target: string,
    className?: string
}

const Crumb: FC<ICrumbProps> = ({target = "#", className, caption}) => {
    const classes = classNames(
        "crumb",
        className,
    )
    return (
        <li className={classes}><a href={target} className="crumb-link">{caption}</a></li>
    )
}

export default Crumb