import React, {
    ButtonHTMLAttributes,
    FC,
    MouseEventHandler,
    PropsWithChildren,
} from "react";
import classNames from "classnames";

import "./ToolButton.less"
import {Icon, Caption, Image} from "../helpers";
import {BUTTON_ANIMATION, BUTTON_ROUNDED, BUTTON_VARIANTS} from "../helpers";

type IToolButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: BUTTON_VARIANTS,
    className?: string,
    icon?: string,
    image?: string,
    caption?: string,
    animate?: BUTTON_ANIMATION,
    rounded?: BUTTON_ROUNDED,
    iconRight?: boolean,
    shadow?: boolean,
    outline?: boolean,
    badge?: number,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const ToolButton: FC<IToolButton> = ({
    children,
    disabled,
    rounded = BUTTON_ROUNDED.NONE,
    variant= BUTTON_VARIANTS.DEFAULT,
    icon,
    caption,
    image,
    animate = BUTTON_ANIMATION.NONE,
    shadow = false,
    outline = false,
    onClick,
    className,
    ...props
}) => {
    const classes = classNames(
        "tool-button",
        `${variant}-button`,
        disabled ? `disabled`: '',
        animate === BUTTON_ANIMATION.NONE ? '' : animate,
        rounded === BUTTON_ROUNDED.NONE ? '' : 'rounded',
        shadow ? 'shadowed' : "",
        outline ? 'outline-button' : "",
        className,
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

export default ToolButton