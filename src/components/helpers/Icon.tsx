import React, {FC} from "react";
import classNames from "classnames";

export interface IIconProps {
    className?: string,
    name?: string,
}

export const Icon: FC<IIconProps> = ({name, className}) => {
    const classes = classNames(className)
    return (
        <span className="button-icon">
            <span className={`${name} ${classes}`}></span>
        </span>
    )
}