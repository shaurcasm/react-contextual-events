import { useContext } from "react"
import { Link } from "react-router-dom"
import { useEvents } from "../../contexts/EventsContextProvider"


export function Systems({}) {
    const { systems } = useEvents();

    return (
        <>
            <Link to="/services" style={{ color: "whitesmoke" }}>To Services</Link>
            {/* {events.map((e => <span style={{ position: "fixed", top: Math.random() * window.innerHeight, right: Math.random() * window.innerWidth}}>{e}</span>))} */}
            {systems.map(e => <div>{e}</div>)}
        </>
    )
}