import React, {FC} from "react";
import classNames from "classnames";

export interface IImageProps {
    className?: string,
    src?: string,
}

export const Image: FC<IImageProps> = ({src, className}) => {
    const classes = classNames(className)

    return (
        <span className="button-icon">
            <img className={classes} src={src} />
        </span>
    )
}