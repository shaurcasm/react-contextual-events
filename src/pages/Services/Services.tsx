import { useContext } from "react"
import { Link } from "react-router-dom";
import { useEvents } from "../../contexts/EventsContextProvider";


export function Services() {
    const { services } = useEvents();

    return (
        <>
            <Link to="/systems" style={{ color: "whitesmoke" }}>To Systems</Link>
            {/* {events.map((e => <span style={{ position: "fixed", top: Math.random() * window.innerHeight, right: Math.random() * window.innerWidth}}>{e}</span>))} */}
            {services.map((e => <span>{e}</span>))}
        </>
    )
}