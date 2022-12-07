import React from "react";
import { createRoot } from 'react-dom/client';
import {
    Button,
    CommandButton,
    BUTTON_SIZE,
    BUTTON_VARIANTS,
    BUTTON_ROUNDED,
    BUTTON_ANIMATION,
    BUTTON_EXTRA,
    ImageButton,
    Shortcut,
    Toolbar, ToolButton
} from "../src/index"

import "./index.less"

const App = () => {
    return (
        <>
            <div className="button-container" style={{flexFlow: "column"}}>
                <h1>Metro UI/Button Set</h1>
                <h2>For React</h2>
                <p>Copyright 2022 by <a href="https://Korzh.com">Korzh.com</a></p>
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <h2>Push Button</h2>
            </div>
            <div className="button-container">
                <Button variant={BUTTON_VARIANTS.DEFAULT}>Default</Button>
                <Button variant={BUTTON_VARIANTS.PRIMARY}>Primary</Button>
                <Button variant={BUTTON_VARIANTS.SECONDARY}>Secondary</Button>
                <Button variant={BUTTON_VARIANTS.DANGER}>Danger</Button>
                <Button variant={BUTTON_VARIANTS.WARNING}>Warning</Button>
                <Button variant={BUTTON_VARIANTS.SUCCESS}>Success</Button>
                <Button variant={BUTTON_VARIANTS.DEFAULT} disabled={true}>Disabled</Button>
            </div>
            <div className="button-container">
                <Button icon="mif-rocket" caption="Rocket" variant={BUTTON_VARIANTS.DEFAULT}/>
                <Button image="like.svg" variant={BUTTON_VARIANTS.PRIMARY}>Primary</Button>
                <Button icon="mif-rocket" variant={BUTTON_VARIANTS.SECONDARY}>Secondary</Button>
                <Button icon="mif-rocket" variant={BUTTON_VARIANTS.DANGER}>Danger</Button>
                <Button icon="mif-rocket" variant={BUTTON_VARIANTS.WARNING}>Warning</Button>
                <Button icon="mif-rocket" variant={BUTTON_VARIANTS.SUCCESS}>Success</Button>
                <Button icon="mif-rocket" variant={BUTTON_VARIANTS.DEFAULT} disabled={true}>Disabled</Button>
            </div>
            <div className="button-container">
                <Button shadow icon="mif-rocket" caption="Rocket" variant={BUTTON_VARIANTS.DEFAULT}/>
                <Button shadow image="like.svg" variant={BUTTON_VARIANTS.PRIMARY}>Primary</Button>
                <Button shadow icon="mif-rocket" variant={BUTTON_VARIANTS.SECONDARY}>Secondary</Button>
                <Button shadow icon="mif-rocket" variant={BUTTON_VARIANTS.DANGER}>Danger</Button>
                <Button shadow icon="mif-rocket" variant={BUTTON_VARIANTS.WARNING}>Warning</Button>
                <Button shadow icon="mif-rocket" variant={BUTTON_VARIANTS.SUCCESS}>Success</Button>
                <Button shadow icon="mif-rocket" variant={BUTTON_VARIANTS.DEFAULT} disabled={true}>Disabled</Button>
            </div>
            <div className="button-container">
                <Button flat icon="mif-rocket" caption="Rocket" variant={BUTTON_VARIANTS.DEFAULT}/>
                <Button flat icon="mif-rocket" variant={BUTTON_VARIANTS.PRIMARY}>Primary</Button>
                <Button flat icon="mif-rocket" variant={BUTTON_VARIANTS.SECONDARY}>Secondary</Button>
                <Button flat icon="mif-rocket" variant={BUTTON_VARIANTS.DANGER}>Danger</Button>
                <Button flat icon="mif-rocket" variant={BUTTON_VARIANTS.WARNING}>Warning</Button>
                <Button flat icon="mif-rocket" variant={BUTTON_VARIANTS.SUCCESS}>Success</Button>
                <Button flat icon="mif-rocket" variant={BUTTON_VARIANTS.DEFAULT} disabled>Disabled</Button>
            </div>
            <div className="button-container">
                <Button size={BUTTON_SIZE.MINI}>Mini</Button>
                <Button size={BUTTON_SIZE.SMALL}>Small</Button>
                <Button size={BUTTON_SIZE.DEFAULT}>Default</Button>
                <Button size={BUTTON_SIZE.LARGE}>Large</Button>

                <Button icon="mif-rocket" size={BUTTON_SIZE.MINI}>Mini</Button>
                <Button icon="mif-rocket" size={BUTTON_SIZE.SMALL}>Small</Button>
                <Button icon="mif-rocket" size={BUTTON_SIZE.DEFAULT}>Default</Button>
                <Button icon="mif-rocket" size={BUTTON_SIZE.LARGE}>Large</Button>
            </div>
            <div className="button-container">
                <Button rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.MINI}>Mini</Button>
                <Button rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.SMALL}>Small</Button>
                <Button rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Default</Button>
                <Button rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.LARGE}>Large</Button>
                <Button icon="mif-cog" rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.MINI}>Mini</Button>
                <Button icon="mif-cog" rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.SMALL}>Small</Button>
                <Button icon="mif-cog" rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Default</Button>
                <Button icon="mif-cog" rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.LARGE}>Large</Button>
            </div>
            <div className="button-container">
                <Button icon="mif-cog" animate={BUTTON_ANIMATION.ROTATE} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Rotate</Button>
                <Button icon="mif-cog" animate={BUTTON_ANIMATION.FLASH} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Flash</Button>
                <Button icon="mif-cog" animate={BUTTON_ANIMATION.HEARTBEAT} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Heartbeat</Button>
                <Button icon="mif-bell" animate={BUTTON_ANIMATION.RING} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Ring</Button>
            </div>
            <div className="button-container">
                <Button iconRight icon="mif-cog" animate={BUTTON_ANIMATION.ROTATE} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Rotate</Button>
                <Button iconRight icon="mif-cog" animate={BUTTON_ANIMATION.FLASH} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Flash</Button>
                <Button iconRight icon="mif-cog" animate={BUTTON_ANIMATION.HEARTBEAT} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Heartbeat</Button>
                <Button iconRight icon="mif-bell" animate={BUTTON_ANIMATION.RING} rounded={BUTTON_ROUNDED.BOTH} size={BUTTON_SIZE.DEFAULT}>Ring</Button>
            </div>
            <div className="button-container">
                <Button icon="mif-cog" rounded={BUTTON_ROUNDED.LEFT} size={BUTTON_SIZE.MINI}>Rounded Left</Button>
                <Button rounded={BUTTON_ROUNDED.NONE} size={BUTTON_SIZE.MINI}>Rounded None</Button>
                <Button icon="mif-cog" rounded={BUTTON_ROUNDED.RIGHT} size={BUTTON_SIZE.MINI}>Rounded Right</Button>
            </div>
            <div className="button-container">
                <Button icon="mif-cog" rounded={BUTTON_ROUNDED.LEFT} size={BUTTON_SIZE.SMALL}>Rounded Left</Button>
                <Button rounded={BUTTON_ROUNDED.NONE} size={BUTTON_SIZE.SMALL}>Rounded None</Button>
                <Button icon="mif-cog" rounded={BUTTON_ROUNDED.RIGHT} size={BUTTON_SIZE.SMALL}>Rounded Right</Button>
            </div>
            <div className="button-container">
                <Button icon="mif-cog" rounded={BUTTON_ROUNDED.LEFT} size={BUTTON_SIZE.DEFAULT}>Rounded Left</Button>
                <Button rounded={BUTTON_ROUNDED.NONE} size={BUTTON_SIZE.DEFAULT}>Rounded None</Button>
                <Button icon="mif-cog" rounded={BUTTON_ROUNDED.RIGHT} size={BUTTON_SIZE.DEFAULT}>Rounded Right</Button>
            </div>
            <div className="button-container">
                <Button icon="mif-cog" rounded={BUTTON_ROUNDED.LEFT} size={BUTTON_SIZE.LARGE}>Rounded Left</Button>
                <Button rounded={BUTTON_ROUNDED.NONE} size={BUTTON_SIZE.LARGE}>Rounded None</Button>
                <Button icon="mif-cog" rounded={BUTTON_ROUNDED.RIGHT} size={BUTTON_SIZE.LARGE}>Rounded Right</Button>
            </div>
            <div className="button-container">
                <Button outline variant={BUTTON_VARIANTS.DEFAULT}>Default</Button>
                <Button outline variant={BUTTON_VARIANTS.PRIMARY}>Primary</Button>
                <Button outline variant={BUTTON_VARIANTS.SECONDARY}>Secondary</Button>
                <Button outline variant={BUTTON_VARIANTS.DANGER}>Danger</Button>
                <Button outline variant={BUTTON_VARIANTS.WARNING}>Warning</Button>
                <Button outline variant={BUTTON_VARIANTS.SUCCESS}>Success</Button>
                <Button outline variant={BUTTON_VARIANTS.DEFAULT} disabled={true}>Disabled</Button>
            </div>
            <div className="button-container">
                <Button extra={BUTTON_EXTRA.SQUARE} icon="mif-rocket" size={BUTTON_SIZE.MINI}/>
                <Button extra={BUTTON_EXTRA.SQUARE} icon="mif-rocket" size={BUTTON_SIZE.SMALL}/>
                <Button extra={BUTTON_EXTRA.SQUARE} icon="mif-rocket" size={BUTTON_SIZE.DEFAULT}/>
                <Button extra={BUTTON_EXTRA.SQUARE} icon="mif-rocket" size={BUTTON_SIZE.LARGE}/>

                <Button extra={BUTTON_EXTRA.CIRCLE} icon="mif-rocket" size={BUTTON_SIZE.MINI}/>
                <Button extra={BUTTON_EXTRA.CIRCLE} icon="mif-rocket" size={BUTTON_SIZE.SMALL}/>
                <Button extra={BUTTON_EXTRA.CIRCLE} icon="mif-rocket" size={BUTTON_SIZE.DEFAULT}/>
                <Button extra={BUTTON_EXTRA.CIRCLE} icon="mif-rocket" size={BUTTON_SIZE.LARGE}/>
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <h2>Command Button</h2>
            </div>
            <div className="button-container">
                <CommandButton icon="mif-share" title="Yes, share and connect" subtitle="Use this option for home or work"/>
                <CommandButton iconRight icon="mif-share" title="Yes, share and connect" subtitle="Use this option for home or work"/>
            </div>
            <div className="button-container">
                <CommandButton variant={BUTTON_VARIANTS.PRIMARY} icon="mif-share" title="Yes, share and connect" subtitle="Use this option for home or work"/>
                <CommandButton variant={BUTTON_VARIANTS.SECONDARY} icon="mif-share" title="Yes, share and connect" subtitle="Use this option for home or work"/>
                <CommandButton variant={BUTTON_VARIANTS.DANGER} icon="mif-share" title="Yes, share and connect" subtitle="Use this option for home or work"/>
            </div>
            <div className="button-container">
                <CommandButton animate={BUTTON_ANIMATION.RING} variant={BUTTON_VARIANTS.WARNING} icon="mif-bell" title="Yes, share and connect" subtitle="Use this option for home or work"/>
                <CommandButton animate={BUTTON_ANIMATION.ROTATE} variant={BUTTON_VARIANTS.SUCCESS} icon="mif-cog" title="Yes, share and connect" subtitle="Use this option for home or work"/>
            </div>
            <div className="button-container">
                <CommandButton outline variant={BUTTON_VARIANTS.PRIMARY} icon="mif-share" title="Yes, share and connect" subtitle="Use this option for home or work"/>
                <CommandButton outline variant={BUTTON_VARIANTS.SECONDARY} icon="mif-share" title="Yes, share and connect" subtitle="Use this option for home or work"/>
                <CommandButton outline variant={BUTTON_VARIANTS.DANGER} icon="mif-share" title="Yes, share and connect" subtitle="Use this option for home or work"/>
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <h2>Image Button</h2>
            </div>
            <div className="button-container">
                <ImageButton icon="mif-share" caption="Share It" />
                <ImageButton iconRight icon="mif-share" caption="Share It" />
            </div>
            <div className="button-container">
                <ImageButton variant={BUTTON_VARIANTS.DEFAULT} icon="mif-share" caption="Share It" />
                <ImageButton variant={BUTTON_VARIANTS.PRIMARY} icon="mif-share" caption="Share It" />
                <ImageButton variant={BUTTON_VARIANTS.SECONDARY} icon="mif-share" caption="Share It" />
                <ImageButton variant={BUTTON_VARIANTS.SUCCESS} icon="mif-share" caption="Share It" />
                <ImageButton variant={BUTTON_VARIANTS.WARNING} icon="mif-share" caption="Share It" />
                <ImageButton variant={BUTTON_VARIANTS.DANGER} icon="mif-share" caption="Share It" />
            </div>
            <div className="button-container">
                <ImageButton shadow variant={BUTTON_VARIANTS.DEFAULT} icon="mif-share" caption="Share It" />
                <ImageButton shadow variant={BUTTON_VARIANTS.PRIMARY} icon="mif-share" caption="Share It" />
                <ImageButton shadow variant={BUTTON_VARIANTS.SECONDARY} icon="mif-share" caption="Share It" />
                <ImageButton shadow variant={BUTTON_VARIANTS.SUCCESS} icon="mif-share" caption="Share It" />
                <ImageButton shadow variant={BUTTON_VARIANTS.WARNING} icon="mif-share" caption="Share It" />
                <ImageButton shadow variant={BUTTON_VARIANTS.DANGER} icon="mif-share" caption="Share It" />
            </div>
            <div className="button-container">
                <ImageButton outline variant={BUTTON_VARIANTS.DEFAULT} icon="mif-share" caption="Share It" />
                <ImageButton outline variant={BUTTON_VARIANTS.PRIMARY} icon="mif-share" caption="Share It" />
                <ImageButton outline variant={BUTTON_VARIANTS.SECONDARY} icon="mif-share" caption="Share It" />
                <ImageButton outline variant={BUTTON_VARIANTS.SUCCESS} icon="mif-share" caption="Share It" />
                <ImageButton outline variant={BUTTON_VARIANTS.WARNING} icon="mif-share" caption="Share It" />
                <ImageButton outline variant={BUTTON_VARIANTS.DANGER} icon="mif-share" caption="Share It" />
            </div>
            <div className="button-container">
                <ImageButton animate={BUTTON_ANIMATION.RING} icon="mif-bell" caption="Ring Setup" />
                <ImageButton animate={BUTTON_ANIMATION.ROTATE} iconRight icon="mif-cog" caption="Options" />
                <ImageButton rounded={BUTTON_ROUNDED.BOTH} animate={BUTTON_ANIMATION.RING} icon="mif-bell" caption="Ring Setup" />
                <ImageButton rounded={BUTTON_ROUNDED.LEFT} animate={BUTTON_ANIMATION.ROTATE} icon="mif-cog" caption="Options" />
                <ImageButton rounded={BUTTON_ROUNDED.RIGHT} animate={BUTTON_ANIMATION.ROTATE} iconRight icon="mif-cog" caption="Options" />
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <h2>Shortcuts</h2>
            </div>
            <div className="button-container">
                <Shortcut variant={BUTTON_VARIANTS.DEFAULT} icon="mif-share" caption="Share It" />
                <Shortcut variant={BUTTON_VARIANTS.PRIMARY} icon="mif-share" caption="Share It" />
                <Shortcut variant={BUTTON_VARIANTS.SECONDARY} icon="mif-share" caption="Share It" />
                <Shortcut variant={BUTTON_VARIANTS.SUCCESS} icon="mif-share" caption="Share It" />
                <Shortcut variant={BUTTON_VARIANTS.WARNING} icon="mif-share" caption="Share It" />
                <Shortcut variant={BUTTON_VARIANTS.DANGER} icon="mif-share" caption="Share It" />
            </div>
            <div className="button-container">
                <Shortcut shadow variant={BUTTON_VARIANTS.DEFAULT} icon="mif-share" caption="Share It" />
                <Shortcut shadow variant={BUTTON_VARIANTS.PRIMARY} icon="mif-share" caption="Share It" />
                <Shortcut shadow variant={BUTTON_VARIANTS.SECONDARY} icon="mif-share" caption="Share It" />
                <Shortcut shadow variant={BUTTON_VARIANTS.SUCCESS} icon="mif-share" caption="Share It" />
                <Shortcut shadow variant={BUTTON_VARIANTS.WARNING} icon="mif-share" caption="Share It" />
                <Shortcut shadow variant={BUTTON_VARIANTS.DANGER} icon="mif-share" caption="Share It" />
            </div>
            <div className="button-container">
                <Shortcut outline variant={BUTTON_VARIANTS.DEFAULT} icon="mif-share" caption="Share It" />
                <Shortcut outline variant={BUTTON_VARIANTS.PRIMARY} icon="mif-share" caption="Share It" />
                <Shortcut outline variant={BUTTON_VARIANTS.SECONDARY} icon="mif-share" caption="Share It" />
                <Shortcut outline variant={BUTTON_VARIANTS.SUCCESS} icon="mif-share" caption="Share It" />
                <Shortcut outline variant={BUTTON_VARIANTS.WARNING} icon="mif-share" caption="Share It" />
                <Shortcut outline variant={BUTTON_VARIANTS.DANGER} icon="mif-share" caption="Share It" />
            </div>
            <div className="button-container">
                <Shortcut animate={BUTTON_ANIMATION.RING} variant={BUTTON_VARIANTS.DEFAULT} icon="mif-bell" caption="Ring" />
                <Shortcut animate={BUTTON_ANIMATION.ROTATE} variant={BUTTON_VARIANTS.DEFAULT} icon="mif-cog" caption="options" />
                <Shortcut rounded animate={BUTTON_ANIMATION.RING} variant={BUTTON_VARIANTS.DEFAULT} icon="mif-bell" caption="Ring" />
                <Shortcut rounded animate={BUTTON_ANIMATION.ROTATE} variant={BUTTON_VARIANTS.DEFAULT} icon="mif-cog" caption="options" />
                <Shortcut badge={10} variant={BUTTON_VARIANTS.SUCCESS} icon="mif-share" caption="Share It" />
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <h2>Toolbar</h2>
            </div>
            <div className="button-container">
                <Toolbar>
                    <ToolButton icon="mif-floppy-disk"/>
                    <ToolButton icon="mif-checkmark"/>
                    <ToolButton icon="mif-printer"/>
                    <ToolButton caption="Open File"/>
                    <ToolButton icon="mif-folder-open" caption="Open File"/>
                    <ToolButton icon="mif-pencil" caption="Edit File" disabled/>
                </Toolbar>
            </div>
            <div className="button-container">
                <Toolbar>
                    <ToolButton outline icon="mif-floppy-disk"/>
                    <ToolButton outline icon="mif-checkmark"/>
                    <ToolButton outline icon="mif-printer"/>
                    <ToolButton outline caption="Open File"/>
                    <ToolButton outline icon="mif-folder-open" caption="Open File"/>
                    <ToolButton icon="mif-pencil" caption="Edit File" disabled/>
                </Toolbar>
            </div>
            <div className="button-container">
                <Toolbar>
                    <ToolButton shadow icon="mif-floppy-disk"/>
                    <ToolButton shadow icon="mif-checkmark"/>
                    <ToolButton shadow icon="mif-printer"/>
                    <ToolButton shadow caption="Open File"/>
                    <ToolButton shadow icon="mif-folder-open" caption="Open File"/>
                    <ToolButton shadow icon="mif-pencil" caption="Edit File" disabled/>
                </Toolbar>
            </div>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );