import React from "react";
import { Window, WindowContent, GroupBox } from "react95";

function Label({ title, text, emoji }) {
    return (
        <Window>
            <WindowContent>
                <GroupBox label={title}>
                    {text}
                    {
                        emoji != "" ?
                            <span role='img' aria-label={emoji}>
                                {emoji}
                            </span>
                            : ''
                    }

                </GroupBox>
            </WindowContent>
        </Window>
    );
}

export { Label };