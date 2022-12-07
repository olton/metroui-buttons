import React, {
    ButtonHTMLAttributes,
    FC,
    MouseEventHandler,
    PropsWithChildren,
} from "react";
import classNames from "classnames";

import "./CommandButton.less"
import {BUTTON_ANIMATION, BUTTON_VARIANTS} from "../Button";
import {Icon, Image} from "../helpers";

type ICommandButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: BUTTON_VARIANTS,
    icon?: string,
    image?: string,
    title?: string,
    subtitle?: string,
    animate?: BUTTON_ANIMATION,
    iconRight?: boolean,
    shadow?: boolean,
    outline?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const CommandButton: FC<ICommandButton> = ({
    children,
    disabled,
    variant= BUTTON_VARIANTS.DEFAULT,
    icon,
    image,
    title,
    subtitle,
    animate= BUTTON_ANIMATION.NONE,
    iconRight = false,
    shadow = false,
    outline = false,
    onClick,
    ...props
}) => {
    const classes = classNames(
        'command-button',
        `${variant}-button`,
        disabled ? `disabled`: '',
        animate === BUTTON_ANIMATION.NONE ? '' : animate,
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
            <span className="caption">
                {title}
                {subtitle && (<small>{subtitle}</small>)}
            </span>
        </button>
    )
}

export default CommandButton