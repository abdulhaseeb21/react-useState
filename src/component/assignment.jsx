import { useState } from "react"

const Assignment = () => {
    const [light, setLight] = useState(true)
    const [temp, setTemp] = useState(22)
    return (
        <div style={{ height: '100vh', backgroundColor: light ? 'white' : 'black', color: light ? 'black' : 'white' }}>
            <h1>Room light and temperature of room</h1>
            <p>Room light</p>
            <button style={{ backgroundColor: light && 'blue' }} onClick={() => setLight(true)}>On</button>
            <button style={{ backgroundColor: !light && 'blue' }} onClick={() => setLight(false)}>Off</button>
            <p>Room temperature</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => setTemp(temp - 1)}>-</button>
                <p>{temp}C</p>
                <button onClick={() => setTemp(temp + 1)}>+</button>
            </div>


        </div>
    )
}
export default Assignment