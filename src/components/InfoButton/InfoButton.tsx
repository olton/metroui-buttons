import React, {FC, MouseEventHandler} from "react";
import classNames from "classnames";
import {BUTTON_ROUNDED, BUTTON_VARIANTS, Caption, Icon, Image} from "../helpers";

import "./InfoButton.less"

interface IInfoButton {
    disabled: boolean,
    shadow: boolean,
    variant: BUTTON_VARIANTS,
    rounded: BUTTON_ROUNDED,
    buttonTitle: any,
    linkTitle: any,
    target?: string,
    icon?: string,
    image?: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

const InfoButton: FC<IInfoButton> = ({
    disabled= false,
    shadow= false,
    variant = BUTTON_VARIANTS.DEFAULT,
    rounded = BUTTON_ROUNDED.NONE,
    buttonTitle = '',
    target = "#",
    linkTitle = '',
    icon = '',
    image = '',
    onClick,
    ...props
}) => {
    const classes = classNames(
        'info-button',
        `${variant}-button`,
        rounded === BUTTON_ROUNDED.NONE ? '' : rounded,
        shadow ? 'shadowed' : "",
    )

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (disabled) return
        onClick && onClick(e)
    }

    return (
        <div className={classes} {...props}>
            <button onClick={handleClick} className="info-button-primary">
                {icon && (
                    <Icon name={icon}/>
                )}
                {image && (
                    <Image src={image}/>
                )}
                {buttonTitle && (
                    <Caption caption={buttonTitle}/>
                )}
            </button>
            <a href={target} className="info-button-secondary">
                {linkTitle && (
                    <Caption caption={linkTitle}/>
                )}
            </a>
        </div>
    )
}

export default InfoButton