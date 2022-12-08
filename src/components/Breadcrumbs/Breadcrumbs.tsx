import React, {FC} from "react";
import classNames from "classnames";
import "./Breadcrumbs.less"
interface IBreadcrumbsProps {
    children: React.ReactNode,
    className?: string,
}

const Breadcrumbs: FC<IBreadcrumbsProps> = ({children, className, ...props}) => {
    const classes = classNames(
        "breadcrumbs",
        className,
    )
    return (
        <ul className={classes} {...props}>
            {children}
        </ul>
    )
}

export default Breadcrumbs