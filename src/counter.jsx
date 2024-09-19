
import { useState } from "react"
export default function counter() {
    const [count, setcount] = useState(0)
    const [value, setValue] = useState("Type Here");
    return (<>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        <h3>You type {value.length} chars</h3>
        <button onClick={() => setcount(count + 1)}>Cilck me</button>
        <button onClick={() => setcount(0)}>Clear</button>
        <p>you cilcked {count} times</p>
    </>);

}