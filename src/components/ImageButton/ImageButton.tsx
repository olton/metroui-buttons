import React, {
    ButtonHTMLAttributes,
    FC,
    MouseEventHandler,
    PropsWithChildren,
} from "react";
import classNames from "classnames";

import "./ImageButton.less"
import {Icon, Caption, Image} from "../helpers";
import {BUTTON_ANIMATION, BUTTON_ROUNDED, BUTTON_VARIANTS} from "../helpers";

type IImageButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: BUTTON_VARIANTS,
    icon?: string,
    image?: string,
    caption?: string,
    animate?: BUTTON_ANIMATION,
    rounded?: BUTTON_ROUNDED,
    iconRight?: boolean,
    shadow?: boolean,
    outline?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const ImageButton: FC<IImageButton> = ({
    children,
    disabled,
    rounded = BUTTON_ROUNDED.NONE,
    variant= BUTTON_VARIANTS.DEFAULT,
    icon,
    caption,
    image,
    animate = BUTTON_ANIMATION.NONE,
    iconRight = false,
    shadow = false,
    outline = false,
    onClick,
    ...props
}) => {
    const classes = classNames(
        "image-button",
        `${variant}-button`,
        disabled ? `disabled`: '',
        animate === BUTTON_ANIMATION.NONE ? '' : animate,
        rounded === BUTTON_ROUNDED.NONE ? '' : rounded,
        iconRight ? 'icon-right' : "",
        shadow ? 'shadowed' : "",
        outline ? 'outline-button' : "",
    )

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (disabled) return
        onClick && onClick(e)
    }

    return (
        <button className={classes} onClick={handleClick} {...props}>
            {icon && (
                <Icon name={icon}/>
            )}
            {image && (
                <Image src={image}/>
            )}
            {caption && (
                <Caption caption={caption} />
            )}
        </button>
    )
}

export default ImageButton