import React, {FC} from "react";
import classNames from "classnames";

interface ICrumbProps {
    caption: string,
    className?: string
}

const Crumb: FC<ICrumbProps> = ({className, caption}) => {
    const classes = classNames(
        "crumb",
        className,
    )
    return (
        <li className={classes}><a className="crumb-link">{caption}</a></li>
    )
}

export default Crumb