import React, {
    ButtonHTMLAttributes,
    FC,
    MouseEventHandler,
    PropsWithChildren,
} from "react";
import classNames from "classnames";

import "./PushButton.less"
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

export enum BUTTON_SQUARE {
    NONE = '',
    LEFT = 'left-square',
    RIGHT = 'right-square'
}

type IPushButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: BUTTON_SIZE,
    variant?: BUTTON_VARIANTS,
    rounded?: boolean,
    icon?: string,
    image?: string,
    caption?: string,
    rotate?: boolean,
    flash?: boolean,
    heartbeat?: boolean,
    ring?: boolean,
    square?: BUTTON_SQUARE,
    iconRight?: boolean,
    shadow?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const PushButton: FC<IPushButton> = ({
    children,
    disabled,
    rounded,
    size = BUTTON_SIZE.DEFAULT,
    variant= BUTTON_VARIANTS.DEFAULT,
    icon,
    caption,
    image,
    rotate,
    flash,
    heartbeat,
    ring,
    square= BUTTON_SQUARE.NONE,
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
        rounded ? `rounded`: '',
        rotate ? `rotate-icon` : '',
        flash ? `flash-icon` : '',
        heartbeat ? `heartbeat-icon` : '',
        ring ? `ring-icon` : '',
        square === BUTTON_SQUARE.NONE ? '' : square,
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

export default PushButton