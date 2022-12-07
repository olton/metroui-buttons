import React, {
    ButtonHTMLAttributes,
    FC,
    MouseEventHandler,
    PropsWithChildren,
} from "react";
import classNames from "classnames";

import "./Button.less"
import {Icon, Caption, Image} from "../helpers";
import {BUTTON_ANIMATION, BUTTON_EXTRA, BUTTON_ROUNDED, BUTTON_SIZE, BUTTON_VARIANTS} from "../helpers";

type IPushButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: BUTTON_SIZE,
    variant?: BUTTON_VARIANTS,
    icon?: string,
    image?: string,
    caption?: string,
    animate?: BUTTON_ANIMATION,
    rounded?: BUTTON_ROUNDED,
    iconRight?: boolean,
    shadow?: boolean,
    outline?: boolean,
    extra?: BUTTON_EXTRA,
    flat: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<IPushButton> = ({
    children,
    disabled,
    rounded = BUTTON_ROUNDED.NONE,
    size = BUTTON_SIZE.DEFAULT,
    variant= BUTTON_VARIANTS.DEFAULT,
    icon,
    caption,
    image,
    animate = BUTTON_ANIMATION.NONE,
    iconRight = false,
    shadow = false,
    outline = false,
    extra = BUTTON_EXTRA.NONE,
    flat = false,
    onClick,
    ...props
}) => {
    const classes = classNames(
        "push-button",
        `${size}-button`,
        `${variant}-button`,
        disabled ? `disabled`: '',
        animate === BUTTON_ANIMATION.NONE ? '' : animate,
        rounded === BUTTON_ROUNDED.NONE ? '' : rounded,
        iconRight ? 'icon-right' : "",
        shadow ? 'shadowed' : "",
        outline ? 'outline-button' : "",
        extra === BUTTON_EXTRA.NONE ? '' : extra,
        flat ? 'flat-button' : ''
    )

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (disabled) return
        onClick && onClick(e)
    }

    return (
        <button disabled={disabled} className={classes} onClick={handleClick} {...props}>
            {icon && (
                <Icon name={icon} />
            )}
            {image && (
                <Image src={image} />
            )}
            {caption && (
                <Caption caption={caption} />
            )}
            {children && (
                <span className="caption">{children}</span>
            )}
        </button>
    )
}

export default Button