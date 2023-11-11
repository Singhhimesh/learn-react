import { useState } from "react";

function States(params) {
    let [count, setCounter] = useState(0);

    return (
        <>
            <button onClick={() => setCounter(count + 1)}>{count}</button>
        </>
    );
}

export default States;