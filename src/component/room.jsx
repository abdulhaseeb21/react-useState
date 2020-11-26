import { useState } from 'react'
const Room = () => {
    let [lit, setLit] = useState(true)
    const [age,setAge] = useState(17)
    function updateLit() {
        // lit = !lit
        // console.log('lit', lit);
        // the lit is getting updated on every click but the state is not updating and when state updates
        // it re renders the component due to which the lit is getting a value but state doesn't know that lit is updated
        // useState will only get to know that lit is updated when we'll update it with the function setLit

        setLit(!lit) //here lit is getting updated as well as useState get's to know that lit is updated and it is resulting in
        // rendering the whole component again

    }
    function updateAge() {
        setAge(age + 1)
    }
    return (
        <div style={{ height: '100vh', backgroundColor: lit ? 'white' : 'black', color: lit ? 'black' : 'white' }}>
            <p> The room is {lit ? 'lit' : 'dark'}</p>
            <button onClick={updateLit}>Toggle Lit</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Increment Age</button>

        </div>
    )
}
export default Room