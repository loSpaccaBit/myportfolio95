import React from "react";
import { Window, WindowContent, GroupBox } from "react95";

function Card({ link, linkImg, target, title, text }) {
    const textSplit = text.split('.');
    const renderedText = textSplit.map((t, index) => (
        <p key={index}>
            {t}
            <br />
        </p>
    ));
    return (
        <>
            <Window as={'a'} href={link} target={target} className="mb-8 p-8">
                <WindowContent>
                    <GroupBox label={title}>
                        {link != null ?
                            <div className="flex items-center justify-center">
                                <img src={linkImg} className="rounded-lg h-36 w-36" />
                            </div>
                            : ''}
                        {renderedText}
                    </GroupBox>
                </WindowContent>
            </Window>
        </>
    );
}

export { Card };