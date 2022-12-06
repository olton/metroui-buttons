import React, {
    ButtonHTMLAttributes,
    FC,
    MouseEventHandler,
    PropsWithChildren,
} from "react";
import classNames from "classnames";

import "./Button.less"
import {Icon, Caption, Image} from "../helpers";

export enum BUTTON_SIZE {
    MINI = 'mini',
    SMALL = 'small',
    DEFAULT = 'medium',
    LARGE = 'large'
}

export enum BUTTON_VARIANTS {
    DEFAULT = "default",
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
}

export enum BUTTON_ROUNDED {
    NONE = '',
    BOTH = 'rounded',
    LEFT = 'left-rounded',
    RIGHT = 'right-rounded'
}

export enum BUTTON_ANIMATION {
    NONE = '',
    ROTATE = 'rotate-icon',
    FLASH = 'flash-icon',
    HEARTBEAT = 'heartbeat-icon',
    RING = 'ring-icon',

}

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
            <span className="caption">{children}</span>
        </button>
    )
}

export default Button