import { useState } from "react";

function TextEditor() {
    let [status, setStatus] = useState(false);

    return(
        <>
            <button onClick={() => setStatus(status = ! status)}>Toggle</button>
            
            { status ? <h1>Hello, This is me</h1> : ''}
        </>
    );
}

export default TextEditor;