import React from "react";
import { Monitor, Window, WindowContent, Button, WindowHeader, Toolbar, Frame } from 'react95';

function Wind({ title, items, text, footer }) {
    const renderedItems = items.map((item, index) => (
        <Button variant='menu' size='sm' key={index}>
            {item}
        </Button>
    ));

    const textSplit = text.split('.'); 
    const renderedText = textSplit.map((t, index) => (
        <p key={index}>
            {t}
            <br />
        </p>
    ));

    return (
        <Window resizable className='window'>
            <WindowHeader className='window-title'>
                <span>loSpaccaBit.exe</span>
                {/* <Button>
                    <span className='close-icon' />
                  </Button> */}
            </WindowHeader>
            <Toolbar>
                {renderedItems}
            </Toolbar>
            <WindowContent>
                {renderedText}
            </WindowContent>
            <Frame variant='well' className='footer'>
                {footer}
            </Frame>
        </Window>
    );
}

export { Wind };