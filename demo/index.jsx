import React from "react";
import { createRoot } from 'react-dom/client';
import {PushButton, BUTTON_SIZE, BUTTON_VARIANTS, BUTTON_ROUNDED, BUTTON_ANIMATION} from "../src/index"
import "./index.less"

const App = () => {
    return (
        <>
            <div className="button-container" style={{flexFlow: "column"}}>
                <h1>Metro UI/Button Set</h1>
                <p>Copyright 2022 by <a href="https://Korzh.com">Korzh.com</a></p>
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <h2>Push Button</h2>
            </div>
            <div className="button-container">
                <PushButton variant={BUTTON_VARIANTS.DEFAULT}>Default</PushButton>
                <PushButton variant={BUTTON_VARIANTS.PRIMARY}>Primary</PushButton>
                <PushButton variant={BUTTON_VARIANTS.SECONDARY}>Secondary</PushButton>
                <PushButton variant={BUTTON_VARIANTS.DANGER}>Danger</PushButton>
                <PushButton variant={BUTTON_VARIANTS.WARNING}>Warning</PushButton>
                <PushButton variant={BUTTON_VARIANTS.SUCCESS}>Success</PushButton>
                <PushButton variant={BUTTON_VARIANTS.DEFAULT} disabled={true}>Disabled</PushButton>
            </div>
            <div className="button-container">
                <PushButton icon="mif-rocket" caption="Rocket" variant={BUTTON_VARIANTS.DEFAULT}/>
                <PushButton image="like.svg" variant={BUTTON_VARIANTS.PRIMARY}>Primary</PushButton>
                <PushButton icon="mif-rocket" variant={BUTTON_VARIANTS.SECONDARY}>Secondary</PushButton>
                <PushButton icon="mif-rocket" variant={BUTTON_VARIANTS.DANGER}>Danger</PushButton>
                <PushButton icon="mif-rocket" variant={BUTTON_VARIANTS.WARNING}>Warning</PushButton>
                <PushButton icon="mif-rocket" variant={BUTTON_VARIANTS.SUCCESS}>Success</PushButton>
                <PushButton icon="mif-rocket" variant={BUTTON_VARIANTS.DEFAULT} disabled={true}>Disabled</PushButton>
            </div>
            <div className="button-container">
                <PushButton shadow icon="mif-rocket" caption="Rocket" variant={BUTTON_VARIANTS.DEFAULT}/>
                <PushButton shadow image="like.svg" variant={BUTTON_VARIANTS.PRIMARY}>Primary</PushButton>
                <PushButton shadow icon="mif-rocket" variant={BUTTON_VARIANTS.SECONDARY}>Secondary</PushButton>
                <PushButton shadow icon="mif-rocket" variant={BUTTON_VARIANTS.DANGER}>Danger</PushButton>
                <PushButton shadow icon="mif-rocket" variant={BUTTON_VARIANTS.WARNING}>Warning</PushButton>
                <PushButton shadow icon="mif-rocket" variant={BUTTON_VARIANTS.SUCCESS}>Success</PushButton>
                <PushButton shadow icon="mif-rocket" variant={BUTTON_VARIANTS.DEFAULT} disabled={true}>Disabled</PushButton>
            </div>
            <div className="button-container">
                <PushButton size={BUTTON_SIZE.MINI}>Mini</PushButton>
                <PushButton size={BUTTON_SIZE.SMALL}>Small</PushButton>
                <PushButton size={BUTTON_SIZE.DEFAULT}>Default</PushButton>
                <PushButton size={BUTTON_SIZE.LARGE}>Large</PushButton>

                <PushButton icon="mif-rocket" size={BUTTON_SIZE.MINI}>Mini</PushButton>
                <PushButton icon="mif-rocket" size={BUTTON_SIZE.SMALL}>Small</PushButton>
                <PushButton icon="mif-rocket" size={BUTTON_SIZE.DEFAULT}>Default</PushButton>
                <PushButton icon="mif-rocket" size={BUTTON_SIZE.LARGE}>Large</PushButton>
            </div>
            <div className="button-container">
                <PushButton rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.MINI}>Mini</PushButton>
                <PushButton rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.SMALL}>Small</PushButton>
                <PushButton rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Default</PushButton>
                <PushButton rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.LARGE}>Large</PushButton>
                <PushButton icon="mif-cog" rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.MINI}>Mini</PushButton>
                <PushButton icon="mif-cog" rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.SMALL}>Small</PushButton>
                <PushButton icon="mif-cog" rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Default</PushButton>
                <PushButton icon="mif-cog" rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.LARGE}>Large</PushButton>
            </div>
            <div className="button-container">
                <PushButton icon="mif-cog" animate={BUTTON_ANIMATION.ROTATE} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Rotate</PushButton>
                <PushButton icon="mif-cog" animate={BUTTON_ANIMATION.FLASH} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Flash</PushButton>
                <PushButton icon="mif-cog" animate={BUTTON_ANIMATION.HEARTBEAT} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Heartbeat</PushButton>
                <PushButton icon="mif-bell" animate={BUTTON_ANIMATION.RING} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Ring</PushButton>
            </div>
            <div className="button-container">
                <PushButton iconRight icon="mif-cog" animate={BUTTON_ANIMATION.ROTATE} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Rotate</PushButton>
                <PushButton iconRight icon="mif-cog" animate={BUTTON_ANIMATION.FLASH} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Flash</PushButton>
                <PushButton iconRight icon="mif-cog" animate={BUTTON_ANIMATION.HEARTBEAT} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Heartbeat</PushButton>
                <PushButton iconRight icon="mif-bell" animate={BUTTON_ANIMATION.RING} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Ring</PushButton>
            </div>
            <div className="button-container">
                <PushButton icon="mif-cog" rounded={BUTTON_ROUNDED.LEFT} size={BUTTON_SIZE.MINI}>Rounded Left</PushButton>
                <PushButton rounded={BUTTON_ROUNDED.NONE} size={BUTTON_SIZE.MINI}>Rounded None</PushButton>
                <PushButton icon="mif-cog" rounded={BUTTON_ROUNDED.RIGHT} size={BUTTON_SIZE.MINI}>Rounded Right</PushButton>
            </div>
            <div className="button-container">
                <PushButton icon="mif-cog" rounded={BUTTON_ROUNDED.LEFT} size={BUTTON_SIZE.SMALL}>Rounded Left</PushButton>
                <PushButton rounded={BUTTON_ROUNDED.NONE} size={BUTTON_SIZE.SMALL}>Rounded None</PushButton>
                <PushButton icon="mif-cog" rounded={BUTTON_ROUNDED.RIGHT} size={BUTTON_SIZE.SMALL}>Rounded Right</PushButton>
            </div>
            <div className="button-container">
                <PushButton icon="mif-cog" rounded={BUTTON_ROUNDED.LEFT} size={BUTTON_SIZE.DEFAULT}>Rounded Left</PushButton>
                <PushButton rounded={BUTTON_ROUNDED.NONE} size={BUTTON_SIZE.DEFAULT}>Rounded None</PushButton>
                <PushButton icon="mif-cog" rounded={BUTTON_ROUNDED.RIGHT} size={BUTTON_SIZE.DEFAULT}>Rounded Right</PushButton>
            </div>
            <div className="button-container">
                <PushButton icon="mif-cog" rounded={BUTTON_ROUNDED.LEFT} size={BUTTON_SIZE.LARGE}>Rounded Left</PushButton>
                <PushButton rounded={BUTTON_ROUNDED.NONE} size={BUTTON_SIZE.LARGE}>Rounded None</PushButton>
                <PushButton icon="mif-cog" rounded={BUTTON_ROUNDED.RIGHT} size={BUTTON_SIZE.LARGE}>Rounded Right</PushButton>
            </div>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );