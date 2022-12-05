import React from "react";
import { createRoot } from 'react-dom/client';
import {PushButton, BUTTON_SIZE, BUTTON_VARIANTS, BUTTON_SQUARE} from "../src/index"
import "./index.less"

const App = () => {
    return (
        <>
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
                <PushButton rounded size={BUTTON_SIZE.MINI}>Mini</PushButton>
                <PushButton rounded size={BUTTON_SIZE.SMALL}>Small</PushButton>
                <PushButton rounded size={BUTTON_SIZE.DEFAULT}>Default</PushButton>
                <PushButton rounded size={BUTTON_SIZE.LARGE}>Large</PushButton>
                <PushButton icon="mif-cog" rounded size={BUTTON_SIZE.MINI}>Mini</PushButton>
                <PushButton icon="mif-cog" rounded size={BUTTON_SIZE.SMALL}>Small</PushButton>
                <PushButton icon="mif-cog" rounded size={BUTTON_SIZE.DEFAULT}>Default</PushButton>
                <PushButton icon="mif-cog" rounded size={BUTTON_SIZE.LARGE}>Large</PushButton>
            </div>
            <div className="button-container">
                <PushButton icon="mif-cog" rotate rounded size={BUTTON_SIZE.DEFAULT}>Rotate</PushButton>
                <PushButton icon="mif-cog" flash rounded size={BUTTON_SIZE.DEFAULT}>Flash</PushButton>
                <PushButton icon="mif-cog" heartbeat rounded size={BUTTON_SIZE.DEFAULT}>Heartbeat</PushButton>
                <PushButton icon="mif-bell" ring rounded size={BUTTON_SIZE.DEFAULT}>Ring</PushButton>
            </div>
            <div className="button-container">
                <PushButton iconRight icon="mif-cog" rotate rounded size={BUTTON_SIZE.DEFAULT}>Rotate</PushButton>
                <PushButton iconRight icon="mif-cog" flash rounded size={BUTTON_SIZE.DEFAULT}>Flash</PushButton>
                <PushButton iconRight icon="mif-cog" heartbeat rounded size={BUTTON_SIZE.DEFAULT}>Heartbeat</PushButton>
                <PushButton iconRight icon="mif-bell" ring rounded size={BUTTON_SIZE.DEFAULT}>Ring</PushButton>
            </div>
            <div className="button-container">
                <PushButton icon="mif-cog" square={BUTTON_SQUARE.LEFT} size={BUTTON_SIZE.MINI}>Square Left</PushButton>
                <PushButton square={BUTTON_SQUARE.NONE} size={BUTTON_SIZE.MINI}>Square None</PushButton>
                <PushButton icon="mif-cog" square={BUTTON_SQUARE.RIGHT} size={BUTTON_SIZE.MINI}>Square Right</PushButton>
            </div>
            <div className="button-container">
                <PushButton icon="mif-cog" square={BUTTON_SQUARE.LEFT} size={BUTTON_SIZE.SMALL}>Square Left</PushButton>
                <PushButton square={BUTTON_SQUARE.NONE} size={BUTTON_SIZE.SMALL}>Square None</PushButton>
                <PushButton icon="mif-cog" square={BUTTON_SQUARE.RIGHT} size={BUTTON_SIZE.SMALL}>Square Right</PushButton>
            </div>
            <div className="button-container">
                <PushButton icon="mif-cog" square={BUTTON_SQUARE.LEFT} size={BUTTON_SIZE.DEFAULT}>Square Left</PushButton>
                <PushButton square={BUTTON_SQUARE.NONE} size={BUTTON_SIZE.DEFAULT}>Square None</PushButton>
                <PushButton icon="mif-cog" square={BUTTON_SQUARE.RIGHT} size={BUTTON_SIZE.DEFAULT}>Square Right</PushButton>
            </div>
            <div className="button-container">
                <PushButton icon="mif-cog" square={BUTTON_SQUARE.LEFT} size={BUTTON_SIZE.LARGE}>Square Left</PushButton>
                <PushButton square={BUTTON_SQUARE.NONE} size={BUTTON_SIZE.LARGE}>Square None</PushButton>
                <PushButton icon="mif-cog" square={BUTTON_SQUARE.RIGHT} size={BUTTON_SIZE.LARGE}>Square Right</PushButton>
            </div>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );