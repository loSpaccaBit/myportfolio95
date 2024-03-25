import React, { useState } from "react";
import { TextInput, Button } from "react95"; // Aggiunto Button

function InpuText() {
    const [state, setState] = useState({
        value: ''
    });

    const handleChange = (e) => setState({ value: e.target.value });
    const reset = () => setState({ value: '' });

    return (
        <div style={{ width: 300 }}>
            <div style={{ display: 'flex' }}>
                <TextInput
                    multiline={5}
                    value={state.value}
                    placeholder='Type here...'
                    onChange={handleChange}
                    fullWidth
                />
                <Button onClick={reset} style={{ marginLeft: 4 }}>
                    Invia
                </Button>
            </div>
        </div> // Rimossa parentesi graffa in eccesso
    );
}

export { InpuText };
